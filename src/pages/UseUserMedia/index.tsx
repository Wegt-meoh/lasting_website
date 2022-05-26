import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import './index.css'


export default function UseUserMedia() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const downloadRef = useRef<HTMLAnchorElement>(null)

    useEffect(() => {
        if (navigator.mediaDevices.getUserMedia !== undefined || navigator.mediaDevices.getUserMedia !== null) {
            navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 400, height: 400 } })
                .then(mediaStream => {                   
                    if (videoRef.current !== null) {
                        videoRef.current.srcObject = mediaStream
                        videoRef.current.play()
                    }
                }).catch(reason => { console.log('reason' + reason) })
        }
        return () => {
            if (videoRef.current !== null) {
                videoRef.current.srcObject = null
            }
        }
    }, [])

    function handleClick() {
        if (canvasRef.current !== null && videoRef.current !== null) {        
            canvasRef.current.getContext('2d')?.drawImage(videoRef.current, 0, 0)
            const imgUrl = canvasRef.current.toDataURL()
            console.log('imgUrl: ' + imgUrl)
            const imgDataArray = imgUrl.split(',')
            let bufferString = atob(imgDataArray[1])
            let u8array = new Uint8Array(bufferString.length)
            let n = bufferString.length
            const mimeType = imgDataArray[0].match(/:(.*);/)
            console.log(mimeType)
            while (n--) {
                u8array[n] = bufferString.charCodeAt(n)
            }
            if (imgDataArray[0] !== null && mimeType !== null && downloadRef.current !== null) {
                let blob = new Blob([u8array], { type: mimeType[1] })
                let CompatibleURL = window.URL || window.webkitURL
                const objUrl = CompatibleURL.createObjectURL(blob)
                downloadRef.current.download = 'target.png'
                downloadRef.current.href = objUrl
                downloadRef.current.click()
                CompatibleURL.revokeObjectURL(objUrl)
            }
        }
    }

    return (
        <div className='useUserMedia'>
            <div className='media-window'>
                <video
                    
                    width={400}
                    height={400}
                    ref={videoRef} />
                <Button onClick={handleClick}>截图</Button>
            </div>
            <canvas
                className='useUserMidia-canvas'
                width={400}
                height={400}
                ref={canvasRef}></canvas>
            <a hidden ref={downloadRef}>download</a>
        </div>
    )
}
