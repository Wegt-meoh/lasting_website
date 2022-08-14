import React, { useEffect } from "react";

import "./style.css";

export default function BlurryLoading () {
    useEffect(() => {
        const BlurryLoading = document.getElementById("BlurryLoading") as HTMLDivElement;
        const bg = BlurryLoading.getElementsByClassName("bg")[0] as HTMLElement;
        const text = BlurryLoading.getElementsByClassName("loading-text")[0] as HTMLDivElement;

        let current = 1;

        const interv = setInterval(() => {
            text.innerHTML = `${parseInt(String(scale(current, 1, 100, 1, 100)))}%`;
            text.style.opacity = `${parseInt(String(scale(current, 1, 100, 100, 0)))}%`;
            bg.style.filter = `blur(${parseInt(String(scale(current, 1, 100, 30, 0)))}px)`;
            current++;
            if (current > 100) {
                clearInterval(interv);
                text.innerHTML = "";
            }
        }, 30);

        const scale = (current: number, inStart: number, inEnd: number, outStar: number, outEnd: number): number => {
            return (current - inStart) / (inEnd - inStart) * (outEnd - outStar) + outStar;
        };
    }, []);

    return (
        <div id='BlurryLoading'>
            <section className="bg"></section>
            <div className="loading-text">0%</div>
        </div>
    );
}
