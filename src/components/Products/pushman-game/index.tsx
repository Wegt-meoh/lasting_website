import React, { useEffect, useRef, useState } from 'react'

import './index.css'
import FullScreen from '../../FullScreen'
import PushBox from './gameMaster'
import { getGraphLength } from './mapData'

export default function PushBoxGame() {
    const canvas = useRef<HTMLCanvasElement>(null)
    let pushBox = useRef<PushBox>()
    const [level,setLevel]=useState(0)

    useEffect(() => {
        if (canvas.current !== null) {
            pushBox.current = new PushBox(0, canvas.current)
        } else {
            console.log('can not get canvas')
        }

        const listener = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'w':
                case 'ArrowUp':
                    pushBox.current?.playerMove('up')
                    break
                case 'a':
                case 'ArrowLeft':
                    pushBox.current?.playerMove('left')
                    break
                case 's':
                case 'ArrowDown':
                    pushBox.current?.playerMove('down')
                    break
                case 'd':
                case 'ArrowRight':
                    pushBox.current?.playerMove('right')
                    break
                case 'z':
                    pushBox.current?.back()
            }
        }

        document.addEventListener('keydown', listener)

        return () => {
            document.removeEventListener('keydown', listener)
        }
    }, [pushBox, canvas])

    return (
        <FullScreen>
            <div id='pushBoxGame'>
                <div className='gameUI'>
                    <div className="tipContainer">
                        <div>up: w /&nbsp;<img src="/icons/icons8-present-to-all-48.png" alt="arrow up img" /></div>
                        <div>right: d /&nbsp;<img src="/icons/icons8-present-to-all-48.png" alt="arrow up img" /></div>
                        <div>down: s /&nbsp;<img src="/icons/icons8-present-to-all-48.png" alt="arrow up img" /></div>
                        <div>left: a /&nbsp;<img src="/icons/icons8-present-to-all-48.png" alt="arrow up img" /></div>
                        <div>back: z</div>
                        <div>full screen: f</div>
                    </div>
                    <div className="levelSelection">
                        {
                            (() => {
                                let t: any = []
                                for (let i = 0; i < getGraphLength(); i++) {
                                    let className=''
                                    if(level===i) className='checked'
                                    if(pushBox.current?.finishedLevel[i]===true) className='finished'
                                    t.push(
                                        <div
                                            onClick={() => {
                                                if (pushBox.current?.level === i) return
                                                if (window.confirm(`are you sure go to level ${i},any change that you done will be losed.`)) {
                                                    pushBox.current?.loadLevel(i)
                                                    setLevel(i)
                                                }
                                            }}
                                            className={className}                                            
                                            key={i}>{i}</div>
                                    )
                                }
                                return t
                            })()
                        }
                    </div>
                </div>
                <div className='gameScene'>
                    <canvas ref={canvas}></canvas>
                </div>
            </div>
        </FullScreen>
    )
}