import React, { ReactElement } from "react";

import "./index.css";

interface DoubleCardProps {
    title: string
    description: string
    children: ReactElement
}

export default function DoubleCard (props: DoubleCardProps) {
    const { title, description, children } = props;

    return (
        <div className="doubleCard">
            <div className="show">
                <div className="front">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="back">
                    {children}
                </div>
            </div>
        </div>
    );
}
