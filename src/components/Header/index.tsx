import React from "react";

import "./index.css";

interface HeaderProps{
    h1: React.ReactElement | string
    p: React.ReactElement | string
}

export default function Header (props: HeaderProps) {
    const { h1, p } = props;

    return (
        <header className='Header'>
            <h1>{h1}</h1>
            <p>{p}</p>
        </header>
    );
}
