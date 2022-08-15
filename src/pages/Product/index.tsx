import React from "react";
import { Link } from "react-router-dom";
import DoubleCard from "../../components/DoubleCard";
import Header from "../../components/Header";
import { getProduct } from "../../route/routes";
import "./index.css";

export default function Product () {
    const routes = getProduct();

    return (
        <div className='Product'>
            <Header h1='Product' p='' />
            <section>
                {routes.map(r => {
                    return (
                        <DoubleCard key={r.path} title={r.title} description={r.desc}>
                            <div>
                                <Link to={r.path === undefined ? "/" : r.path}>
                                    <span>demo</span>
                                </Link>
                            </div>
                        </DoubleCard>);
                })}
            </section>
        </div>
    );
}
