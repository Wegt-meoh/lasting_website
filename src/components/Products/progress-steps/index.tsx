import React, { useEffect } from 'react'
import Header from '../../Header'

import './style.css'

export default function ProgressSteps() {

    useEffect(() => {
        const ProgressSteps = document.getElementById('ProgressSteps') as HTMLDivElement
        const progress=document.getElementById('progress') as HTMLDivElement
        const prevBtn =ProgressSteps.getElementsByClassName('prevBtn')[0] as HTMLButtonElement
        const nextBtn =ProgressSteps.getElementsByClassName('nextBtn')[0] as HTMLButtonElement
        const circles=ProgressSteps.getElementsByClassName('circle')        

        let rate=0;

        prevBtn.addEventListener('click',()=>{
            if(rate===0) return
            rate--
            update()
        })

        nextBtn.addEventListener('click',()=>{
            if(rate===circles.length-1) return
            rate++
            update()
        })

        const update=()=>{
            for(let i=0;i<circles.length;i++){
                if(i<=rate){
                    circles[i].classList.add('active')
                }else{
                    circles[i].classList.remove('active')
                }
            }
            progress.style.width=`${rate/(circles.length-1)*100.0}%`
            if(rate===0){
                prevBtn.disabled=true                
            }else if(rate===circles.length-1){
                nextBtn.disabled=true
            }else{
                prevBtn.disabled=false
                nextBtn.disabled=false
            }
        }

    }, [])
    return (
        <>
            <Header h1={<a href='https://github.com/bradtraversy/50projects50days' target='_blank' rel='noreferrer'>origin</a>}
                p={''} />
            <div className='ProgressSteps' id='ProgressSteps'>
                <div className="progress-container">
                    <div className="progress" id="progress"></div>
                    <div className="circle active">1</div>
                    <div className="circle">2</div>
                    <div className="circle">3</div>
                    <div className="circle">4</div>
                </div>

                <div className='progress-buttons'>
                    <button className="btn prevBtn" disabled>Prev</button>
                    <button className="btn nextBtn" >Next</button>
                </div>
            </div>
        </>
    )
}
