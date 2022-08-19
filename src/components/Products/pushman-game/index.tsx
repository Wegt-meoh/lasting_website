import React, { useEffect, useState, useMemo, useRef } from "react";

import "./index.css";
import FullScreen from "../../FullScreen";
import PushBox from "./main/gameMaster";
import { getGraphLength } from "./data/graph.data";
import { getFinishedLevel } from "./utils/utils";

export default function PushBoxGame () {
    const gameMaster = useRef<PushBox>();
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvas.current !== null) {
            gameMaster.current = new PushBox(0, canvas.current);
        } else {
            throw new Error("can not get canvas");
        }
    }, [canvas]);

    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            switch (event.key) {
                case "w":
                case "ArrowUp":
                    gameMaster.current?.playerMove("up");
                    break;
                case "a":
                case "ArrowLeft":
                    gameMaster.current?.playerMove("left");
                    break;
                case "s":
                case "ArrowDown":
                    gameMaster.current?.playerMove("down");
                    break;
                case "d":
                case "ArrowRight":
                    gameMaster.current?.playerMove("right");
                    break;
                case "z":
                    gameMaster.current?.back();
                    break;
            }
        };

        document.addEventListener("keydown", listener);

        return () => {
            document.removeEventListener("keydown", listener);
        };
    }, [gameMaster]);

    return (
        <FullScreen>
            <div id='pushBoxGame'>
                <div className='gameUI'>
                    <GameUI gameMaster={gameMaster} />
                </div>
                <div className='gameScene'>
                    <canvas ref={canvas}></canvas>
                </div>
            </div>
        </FullScreen>
    );
}

function GameUI (props: {gameMaster: React.MutableRefObject<PushBox | undefined>}) {
    const { gameMaster } = props;
    const [level, setLevel] = useState(0);

    const levelList = useMemo(() => {
        const finishedLevel = getFinishedLevel();

        const t: JSX.Element[] = [];
        for (let i = 0; i < getGraphLength(); i++) {
            let className = "";
            if (finishedLevel[i]) className = "finished";
            if (level === i) className = "checked";
            t.push(
                <div
                    onClick={() => {
                        if (level === i) return;
                        gameMaster.current?.confirm(
                            i,
                            () => {
                                gameMaster.current?.loadLevel(i);
                                setLevel(i);
                            });
                    }}
                    className={className}
                    key={i}>{i}
                </div>
            );
        }
        return t;
    }, [gameMaster, level]);

    return <>
        <div className="tipContainer">
            <div>up: w /&nbsp;<img src="/icons/icons8-present-to-all-48.png" alt="arrow up img" /></div>
            <div>right: d /&nbsp;<img src="/icons/icons8-present-to-all-48.png" alt="arrow up img" /></div>
            <div>down: s /&nbsp;<img src="/icons/icons8-present-to-all-48.png" alt="arrow up img" /></div>
            <div>left: a /&nbsp;<img src="/icons/icons8-present-to-all-48.png" alt="arrow up img" /></div>
            <div>back: z</div>
            <div>full screen: f</div>
        </div>
        <div className="levelSelection">
            {levelList}
        </div>
    </>;
}
