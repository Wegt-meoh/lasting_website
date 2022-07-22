import React, { useEffect, useRef, useState } from 'react'
import './index.css'


export default function UseUserMedia() {
    const [isMirror, setIsMirror] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const downloadRef = useRef<HTMLAnchorElement>(null)
    const tracks = useRef<MediaStreamTrack[]>([])

    useEffect(() => {
        try {
            if (navigator.mediaDevices.getUserMedia !== undefined || navigator.mediaDevices.getUserMedia !== null) {
                navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 400, height: 400 } })
                    .then(mediaStream => {
                        if (videoRef.current !== null) {
                            videoRef.current.srcObject = mediaStream
                            tracks.current = mediaStream.getTracks()
                            videoRef.current.play()
                        }
                    }).catch(reason => { alert('无法调用摄像头') })
            }
        } catch (e) {
            alert('请查看控制台')
            console.log(`地址栏搜索chrome://flags/，找到Insecure origins treated as secure,把本站域名http://www.lastingcoder.xyz输入`)
        }
        return () => {
            tracks.current.forEach(t => {
                t.stop()
            })
        }
    }, [])

    function saveImg() {
        if (canvasRef.current !== null && videoRef.current !== null) {
            canvasRef.current.getContext('2d')?.drawImage(videoRef.current, 0, 0)
            const canvascBlob=canvasRef.current.toBlob((blob):void=>{
                if(blob===null||downloadRef.current===null) return
                const url=URL.createObjectURL(blob)               
                downloadRef.current.download='target.png'
                downloadRef.current.href=url
                downloadRef.current.click()
                URL.revokeObjectURL(url)
            },undefined,1)
            // const imgUrl = canvasRef.current.toDataURL()
            // const [typePart, dataPart] = imgUrl.split(',')
            // let bufferString = atob(dataPart)
            // let u8array = new Uint8Array(bufferString.length)
            // let n = bufferString.length
            // const mimeType = typePart.match(/:(.*);/)
            // while (n--) {
            //     u8array[n] = bufferString.charCodeAt(n)
            // }
            // if (u8array !== null && mimeType !== null && downloadRef.current !== null) {
            //     let blob = new Blob([u8array], { type: mimeType[1] })
            //     let CompatibleURL = window.URL || window.webkitURL
            //     const objUrl = CompatibleURL.createObjectURL(blob)
            //     downloadRef.current.download = 'target.png'
            //     downloadRef.current.href = objUrl
            //     downloadRef.current.click()
            //     CompatibleURL.revokeObjectURL(objUrl)
            // }
        }
    }

    return (
        <>
            <div className='useUserMedia'>
                <div className='media-window'>
                    <video
                        className={isMirror ? 'mirror' : ''}
                        width={400}
                        height={400}
                        ref={videoRef} />
                    <button onClick={() => { setIsMirror(!isMirror) }}>{isMirror ? '镜像' : '正常'}</button>
                    <button onClick={saveImg}>截图</button>
                </div>
                <canvas
                    className='useUserMidia-canvas'
                    width={400}
                    height={400}
                    ref={canvasRef}></canvas>
                <a hidden ref={downloadRef}>download</a>
            </div>
        </>
    )
}
