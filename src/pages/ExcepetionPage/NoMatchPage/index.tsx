import { Link } from "react-router-dom";
import React from "react";
export default function NoMatchPage () {
    return (
        <div>
            <h2>No such Page, please check your url.</h2>
            <Link to='/'>back to home page</Link>
        </div>
    );
}
