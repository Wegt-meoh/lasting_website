import React from 'react'
import './index.css'


export default function CssLayoutPractice() {
    return (
        <div className='cssLayoutPractice'>

            <h1>css九宫格布局flex实现</h1>
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
            <h1>css九宫格布局grid实现</h1>
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
            <h1>左边固定右边自适应</h1>
            <div className='leftFixedRightAutofit'>
                <div className='leftPart'></div>
                <div className='rightPart'></div>
            </div>
            <h1>三列布局</h1>
            <div className='sanlie'>
                <div className='left'></div>
                <div className="mid"></div>
                <div className="right"></div>
            </div>
        </div>
    )
}
