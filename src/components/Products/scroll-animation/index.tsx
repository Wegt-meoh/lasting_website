import React, { useEffect } from 'react'

import './style.css'

export default function ScrollAnimation() {

    useEffect(() => {
        const ScrollAnimation=document.getElementById('ScrollAnimation') as HTMLElement
        const boxes = ScrollAnimation.querySelectorAll('.box')

        window.addEventListener('scroll', checkBoxes)

        checkBoxes()

        function checkBoxes() {
            const triggerBottom = window.innerHeight 

            boxes.forEach(box => {
                const boxBottom = box.getBoundingClientRect().bottom

                if (boxBottom < triggerBottom) {
                    box.classList.add('show')
                } else {
                    box.classList.remove('show')
                }
            })
        }
    },[])

    return (
        <div id='ScrollAnimation'>
            <h1>Scroll to see the animation</h1>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
            <div className="box"><h2>Content</h2></div>
        </div>
    )
}
