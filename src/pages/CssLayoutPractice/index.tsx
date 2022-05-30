import React from 'react'
import './index.css'


export default function CssLayoutPractice() {
    return (
        <div className='cssLayoutPractice'>

            <h2>css九宫格布局flex实现</h2>
            <div className='jiuGongGe'>
                <div className='jiuGongGeChild'>
                    <div className='jiuGongGeItem'>1</div>
                    <div className='jiuGongGeItem'>2</div>
                    <div className='jiuGongGeItem'>3</div>
                </div>
                <div className='jiuGongGeChild'>
                    <div className='jiuGongGeItem'>1</div>
                    <div className='jiuGongGeItem'>2</div>
                    <div className='jiuGongGeItem'>3</div>
                </div>                
                <div className='jiuGongGeChild'>
                    <div className='jiuGongGeItem'>1</div>
                    <div className='jiuGongGeItem'>2</div>
                    <div className='jiuGongGeItem'>3</div>
                </div>
            </div>
            <h2>css九宫格布局grid实现</h2>
            <div className="jiuGongGeByGrid">
                <div className="jiuGongGeByGridItem">1</div>
                <div className="jiuGongGeByGridItem">2</div>
                <div className="jiuGongGeByGridItem">3</div>
                <div className="jiuGongGeByGridItem">4</div>
                <div className="jiuGongGeByGridItem">5</div>
                <div className="jiuGongGeByGridItem">6</div>
                <div className="jiuGongGeByGridItem">7</div>
                <div className="jiuGongGeByGridItem">8</div>
                <div className="jiuGongGeByGridItem">9</div>
            </div>
            <h2>左边固定右边自适应</h2>
            <div className='leftFixedRightAutofit'>
                <div className='leftPart'></div>
                <div className='rightPart'></div>
            </div>
        </div>
    )
}
