import React, { useEffect, useMemo } from "react";
import { getFileToKeyMap } from "./fileToKey.map";
import { getKeyName } from "./keyCodeToKey.map";

const fileToKeyMap = getFileToKeyMap();
// 500ms
const extendTime = 1000;

const intervals = new Map();

function getAudioElement (keyName: string): HTMLAudioElement | null {
    return document.getElementById(`pianoKey${keyName}`) as HTMLAudioElement;
}

function createAudioFadeInterval (audio: HTMLAudioElement, extendTime: number) {
    let _extendTime = extendTime;
    const timer = setInterval(() => {
        const { volume } = audio;
        if (_extendTime < 10 || volume < 0.03) {
            clearInterval(timer);
        } else {
            audio.volume = volume - 0.01;
        }
        _extendTime -= 10;
    }, 10);
    return timer;
}

export default function Piano () {
    useEffect(() => {
        const keyDownListener = function (ev: KeyboardEvent): void {
            const keyName = getKeyName(ev.code);
            if (keyName !== undefined && !fileToKeyMap[keyName].isPlay) {
                const audio = getAudioElement(keyName);
                if (audio !== null) {
                    fileToKeyMap[keyName].isPlay = true;
                    audio.pause();
                    audio.volume = 1;
                    audio.loop = false;
                    audio.currentTime = 0;
                    audio.play().then(v => {
                        audio.onended = function () {
                            fileToKeyMap[keyName].isPlay = false;
                            audio.pause();
                        };
                    }, r => { console.log(r); });
                } else {
                    throw new Error("can not find audio Element in document");
                }
            }
        };

        const keyUpListener = function (ev: KeyboardEvent): void {
            const keyName = getKeyName(ev.code);
            if (keyName !== undefined && fileToKeyMap[keyName].isPlay) {
                fileToKeyMap[keyName].isPlay = false;
            }
        };

        document.addEventListener("keydown", keyDownListener);
        document.addEventListener("keyup", keyUpListener);

        return () => {
            document.removeEventListener("keydown", keyDownListener);
            document.removeEventListener("keyup", keyUpListener);
        };
    });

    const audioList = useMemo(() => {
        return Object.entries(fileToKeyMap).map((m, index) => {
            return <audio
                onPlay={(e) => {
                    clearInterval(intervals.get(m));
                    intervals.set(m, createAudioFadeInterval(e.currentTarget, extendTime));
                }} key={index} id={`pianoKey${m[0]}`}>
                <source src={`/audios/piano/mp3/${m[1].url}.mp3`} />
                <source src={`/audios/piano/ogg/${m[1].url}.ogg`} />
            </audio>;
        });
    }, [fileToKeyMap]);

    return (
        <div>
            <div>
                {audioList}
            </div>
        </div>
    );
}
