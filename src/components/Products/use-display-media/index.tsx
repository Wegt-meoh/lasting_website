import React, { useEffect, useRef } from "react";

export default function UseDisPlayMedia () {
    const video = useRef<HTMLVideoElement>(null);
    const tracks = useRef<MediaStreamTrack[]>();

    useEffect(() => {
        navigator.mediaDevices.getDisplayMedia({
            audio: true, video: true
        }).then(value => {
            tracks.current = value.getTracks();
            if (video.current !== null) {
                video.current.srcObject = value;
                video.current.play().then(result => {}, reason => {});
            } else {
                alert("video is null");
                throw new Error("video is null");
            }
        }).catch(reason => {
            alert(reason);
            throw new Error(reason);
        });

        return () => {
            tracks.current?.forEach(t => t.stop());
        };
    }, []);

    return (
        <video
            style={{ zIndex: "100", maxWidth: "100%" }}
            ref={video} />
    );
}

// export type AnyFunc = (...arg: any[]) => any;

// function deboucing (callback: (...arg: any[]) => any, interval: number) {
//     let timer: NodeJS.Timeout | null = null;
//     return () => {
//         if (timer !== null) clearTimeout(timer);
//         timer = setTimeout(callback, interval);
//     };
// }

// function throtting (callback: AnyFunc, interval: number, delay: number) {
//     let timer: NodeJS.Timeout | null = null;
//     let startTime = Date.now();

//     return (...args: any[]) => {
//         const waitTime = Date.now() - startTime;
//         if (timer !== null) clearTimeout(timer);
//         if (waitTime >= interval) {
//             callback.apply(args);
//             startTime = Date.now();
//         } else {
//             timer = setTimeout(callback, delay);
//         }
//     };
// }
