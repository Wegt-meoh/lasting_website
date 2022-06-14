import React, { useEffect } from 'react'

import './style.css'

export default function BlurryLoading() {

    useEffect(() => {
        const loadText = document.querySelector('.loading-text') as HTMLDivElement
        const bg = document.querySelector('.bg') as HTMLElement

        let load = 0

        let int = setInterval(blurring, 30)

        function blurring() {
            load++

            if (load > 99) {
                clearInterval(int)
            }

            loadText.innerText = `${load}%`
            loadText.style.opacity = String(scale(load, 0, 100, 1, 0))
            bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
        }

        // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
        const scale = (num:number, in_min:number, in_max:number, out_min:number, out_max:number) => {
            return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
        }

    }, [])

    return (
        <div id='BlurryLoading'>
            <section className="bg"></section>
            <div className="loading-text">0%</div>
        </div>
    )
}
