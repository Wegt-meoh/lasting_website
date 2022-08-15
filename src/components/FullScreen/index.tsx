import React, { useEffect, useRef } from "react";

export default function FullScreen ({ children }: any) {
    const div = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const listenFunc = (ev: KeyboardEvent) => {
            if (ev.key === "f") {
                if (document.fullscreenElement !== null) {
                    document.exitFullscreen().then(result => {}, reason => {});
                } else {
                    div.current?.requestFullscreen().then(v => {}, r => {});
                }
            }
        };

        document.addEventListener("keyup", listenFunc);

        return () => {
            document.removeEventListener("keyup", listenFunc);
        };
    });

    return (
        <div ref={div}>
            {children}
        </div>
    );
}
