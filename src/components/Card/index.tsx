import React from "react";
import "./index.css";

interface CardProps {
    children?: React.ReactNode
    style?: React.CSSProperties
    hoverable?: boolean
}

export default function Card (props: CardProps) {
    const {
        children,
        style
    // hoverable = true
    } = props;

    return (
        <div
            style={style}
            className='lasting-card'>
            {children}
        </div>
    );
}
