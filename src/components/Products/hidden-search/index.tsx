import React, { useEffect } from 'react'

import './style.css'

export default function HiddenSearch() {

    useEffect(() => {
        const search = document.querySelector('.search') as HTMLDivElement
        const btn = document.querySelector('.btn') as HTMLButtonElement
        const input = document.querySelector('.input') as HTMLInputElement

        btn.addEventListener('click', () => {
            search.classList.toggle('show')
            input.focus()
        })
    }, [])

    return (
        <div id='hiddenSearch'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css" integrity="sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==" crossOrigin="anonymous" />
            <div className="search show">
                <input type="text" className="input" placeholder="Search..." />
                <button className="btn">
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </div>
    )
}
