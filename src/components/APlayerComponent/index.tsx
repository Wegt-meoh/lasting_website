import React, { useEffect } from "react";
import "./APlayer.min.css";
import APlayer from "./APlayer.min.js";
import { getAudios } from "./audioData";
import "./index.css";

export default function APlayerComponent (): JSX.Element {
    const a = 1;

    useEffect(() => {
        const ap = new APlayer({
            container: document.getElementById("aplayer"),
            audio: getAudios()
        });
    }, []);

    return (
        <div id='aplayer' />
    );
}
