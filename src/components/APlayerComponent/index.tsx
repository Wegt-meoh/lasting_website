import React, { useEffect, useRef } from "react";
import { useLocation, useResolvedPath } from "react-router-dom";
import "./APlayer.min.css";
import APlayer from "./APlayer.min.js";
import { getAudios } from "./audioData";
import "./index.css";

export default function APlayerComponent () {
    const location = useLocation();
    const aplayerDom = useRef<HTMLDivElement>(null);
    useEffect(() => {
        let ap: any;
        if (aplayerDom.current !== null) {
            ap = new APlayer({
                container: aplayerDom.current,
                audio: getAudios(),
                listFolded: true
            });
            ap.pause();
        }

        return () => {
            if (ap !== undefined) {
                ap.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (aplayerDom.current !== null) {
            if (location.pathname === "/") {
                aplayerDom.current.hidden = false;
            } else {
                aplayerDom.current.hidden = true;
            }
        }
    }, [location]);

    return (
        <div ref={aplayerDom} id="aplayer"></div>
    );
}
