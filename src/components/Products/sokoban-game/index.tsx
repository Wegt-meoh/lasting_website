import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { directions, keys } from './constants'
import Sokoban from './Sokoban'

import './style.css'

export default function SokobanGame() {
    const [isFullScreen, setFullScreenState] = useState(false)
    let sokoban = useRef<Sokoban | null>(null)

    useEffect(() => {
        sokoban.current = new Sokoban({ level: 1 }, document.querySelector('canvas'))
        sokoban.current?.render({ restart: true })
    }, [])


    useEffect(() => {
        const listener = (event: KeyboardEvent) => {
            const playerCoords = sokoban.current?.findPlayerCoords()
            event.stopPropagation()
            switch (event.key) {
                case keys.up:
                case keys.w:
                    sokoban.current?.move(playerCoords, directions.up)
                    break
                case keys.down:
                case keys.s:
                    sokoban.current?.move(playerCoords, directions.down)
                    break
                case keys.left:
                case keys.a:
                    sokoban.current?.move(playerCoords, directions.left)
                    break
                case keys.right:
                case keys.d:
                    sokoban.current?.move(playerCoords, directions.right)
                    break
                case keys.fullScreen:
                    toggleFullScreen()
                    break
                default:
            }

            sokoban.current?.render()
        }

        // re-render
        document.addEventListener('keydown', listener)
        document.onfullscreenchange = function () {
            setFullScreenState(!isFullScreen)
        }

        return () => {
            document.removeEventListener('keydown', listener)
        }

    }, [isFullScreen])

    function toggleFullScreen() {        
        const sokobanner = document.getElementById('Sokoban')
        if (!isFullScreen && document.fullscreenEnabled) {
            sokobanner?.requestFullscreen()
        } else {
            document.exitFullscreen()
        }
    }

    return (
        <div id='Sokoban'>
            <header>
                <h1>Sokoban</h1>
                <p>Level 1</p>
                <button onClick={e => { sokoban.current?.render({ restart: true }) }}>Restart</button>
                <button onClick={e => { e.stopPropagation(); toggleFullScreen() }}>{isFullScreen?'exit ':'enter '}full screen</button>
            </header>

            <canvas></canvas>
        </div>
    )
}


