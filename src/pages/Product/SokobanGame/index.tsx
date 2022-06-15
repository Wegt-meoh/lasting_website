import React, { useEffect } from 'react'
import { directions, keys } from './constants'
import Sokoban from './Sokoban'

import './style.css'

export default function SokobanGame() {

    useEffect(() => {
        // init
        const sokoban = new Sokoban({ level: 1 })
        sokoban.render({ restart: true })

        // re-render
        document.addEventListener('keydown', (event) => {
            const playerCoords = sokoban.findPlayerCoords()

            switch (event.key) {
                case keys.up:
                case keys.w:
                    sokoban.move(playerCoords, directions.up)
                    break
                case keys.down:
                case keys.s:
                    sokoban.move(playerCoords, directions.down)
                    break
                case keys.left:
                case keys.a:
                    sokoban.move(playerCoords, directions.left)
                    break
                case keys.right:
                case keys.d:
                    sokoban.move(playerCoords, directions.right)
                    break
                default:
            }

            sokoban.render()
        })

        document.querySelector('button')!.addEventListener('click', (event) => {
            sokoban.render({ restart: true })
        })
    },[])

    return (
        <div id='Sokoban'>
            <header>
                <h1>Sokoban</h1>
                <p>Level 1</p>
                <button>Restart</button>
            </header>

            <canvas></canvas>
        </div>
    )
}


