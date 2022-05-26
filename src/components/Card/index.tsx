import React, { useState } from 'react'
import './index.css'

interface CardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    hoverable?: boolean
}

export default function Card(props: CardProps) {
    const {
        children,
        style,
        hoverable = true
    } = props
    const [classNames, setClassNames] = useState('lasting-card')

    function handleMouseOver(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (hoverable === false) return
        setClassNames('lasting-card lasting-card-hover')
    }

    function handleMouseLeave(e: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
        if (hoverable === false) return
        setClassNames('lasting-card')
    }

    return (
        <div
            style={style}
            className={classNames}
            onMouseOver={hoverable === true ? handleMouseOver : undefined}
            onMouseLeave={hoverable === true ? handleMouseLeave : undefined}>
            {children}
        </div>
    )
}
