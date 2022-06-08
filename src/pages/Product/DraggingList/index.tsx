import React, { useCallback, useState } from 'react'

import './index.css'

export default function DraggingList() {
    const liHeight = 40
    const [liData, setLiData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [dragState, setDragState] = useState({
        dragging: false,
        dragItemIndex: 0,
        startPageY: 0,
        offsetPageY: 0,
    })

    function moveLiItem(index: number, direction: 'up' | 'down'): void {
        const newLiData = [...liData]
        if (index < 0 || index >= newLiData.length) return
        if (direction === 'up') {
            if (index === 0) return
            let t = newLiData[index]
            newLiData[index] = newLiData[index - 1]
            newLiData[index - 1] = t
        } else {
            if (index === newLiData.length - 1) return
            let t = newLiData[index]
            newLiData[index] = newLiData[index + 1]
            newLiData[index + 1] = t
        }
        setLiData([...newLiData])
    }

    function handleMouseDown(e: React.MouseEvent<HTMLLIElement, MouseEvent>, index: number) {
        setDragState({ dragging: true, dragItemIndex: index, startPageY: e.pageY, offsetPageY: 0 })
    }

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        const { dragItemIndex, offsetPageY, startPageY } = dragState
        const length = liData.length
        const movedPageY = e.pageY - dragState.startPageY
        if (movedPageY >= liHeight && dragItemIndex < length - 1) {
            moveLiItem(dragItemIndex, 'down')
            setDragState({
                startPageY: e.pageY,
                dragItemIndex: dragItemIndex + 1,
                dragging: true,
                offsetPageY: 0
            })
        } else if (movedPageY <= -liHeight && dragItemIndex > 0) {
            setDragState({
                startPageY: e.pageY,
                dragItemIndex: dragItemIndex - 1,
                dragging: true,
                offsetPageY: 0
            })
        } else {
            if ((dragItemIndex === length - 1 && movedPageY > 0) || (dragItemIndex === 0 && movedPageY < 0)) {
                return                 
            } else {
                setDragState({ ...dragState, offsetPageY: movedPageY })
            }
        }
    }

    function handleMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        setDragState({ ...dragState, dragging: false })
    }

    function getLiStyle(index: number): React.CSSProperties {
        const { dragging, dragItemIndex, offsetPageY } = dragState
        if (dragging === true && dragItemIndex === index) {
            return {
                transform: `translate(5px,${offsetPageY}px)`,
                backgroundColor: 'rgba(134, 188, 216, 0.333)',
            }
        } else {
            return {}
        }
    }

    return (
        <div>
            <ul className='dragging-list'>
                {
                    liData.map((i, index) => {
                        return (
                            <li
                                key={index}
                                style={getLiStyle(index)}
                                onMouseDown={(e) => { handleMouseDown(e, index) }}>item{i}
                            </li>
                        )
                    })
                }
                {dragState.dragging === false ?
                    undefined :
                    <div
                        onMouseMove={e => handleMouseMove(e)}
                        onMouseUp={e => handleMouseUp(e)}
                        className='dragging-mask' />}
            </ul>
        </div>
    )
}