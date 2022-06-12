import React, { useEffect } from 'react'

import './style.css'

export default function ProgressSteps() {

    useEffect(() => {
        const progress = document.getElementById('progress')
        const prev = document.getElementById('prev') as HTMLButtonElement
        const next = document.getElementById('next') as HTMLButtonElement
        const circles = document.querySelectorAll('.circle')

        const update = () => {
            circles.forEach((circle, idx) => {
                if (idx < currentActive) {
                    circle.classList.add('active')
                } else {
                    circle.classList.remove('active')
                }
            })

            const actives = document.querySelectorAll('.active')

            progress!.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

            if (currentActive === 1) {
                prev.disabled = true
            } else if (currentActive === circles.length) {
                next.disabled = true
            } else {
                prev.disabled = false
                next.disabled = false
            }
        }

        let currentActive = 1

        next.addEventListener('click', () => {
            currentActive++

            if (currentActive > circles.length) {
                currentActive = circles.length
            }

            update()
        })

        prev.addEventListener('click', () => {
            currentActive--

            if (currentActive < 1) {
                currentActive = 1
            }

            update()
        })
    }, [])
    return (
        <div className='ProgressSteps'>

            <div className="progress-container">
                <div className="progress" id="progress"></div>
                <div className="circle active">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
                <div className="circle">4</div>
            </div>

            <div className='progress-buttons'>
                <button className="btn" id="prev" disabled>Prev</button>
                <button className="btn" id="next">Next</button>
            </div>
        </div>
    )
}
