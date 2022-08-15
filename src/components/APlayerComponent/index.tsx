import React, { useEffect, useMemo, useRef } from "react";
import "./APlayer.min.css";
import APlayer from "./APlayer.min.js";
import { getAudios } from "./audioData";
import "./index.css";

export default function APlayerComponent () {
    useEffect(() => {
        const ap = new APlayer({
            container: document.getElementById("aplayer"),
            audio: getAudios(),
            listFolded: true
        });
        ap.pause();

        return () => {
            ap.destroy();
        };
    }, []);

    return (
        <div id="aplayer"></div>
    );
}
