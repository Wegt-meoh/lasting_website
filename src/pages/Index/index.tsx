import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import IndexFooter from '../../components/IndexFooter';
import { customRouteObject, getAllRoutes, getAvailableRoutes } from '../../route/routes';
import Card from '../../components/Card';



export default function Index() {
    const routes=getAvailableRoutes()
    return (
        <>
            <span className='version-span'>v1.0</span>
            <div className='Index'>
                <div className='header'>
                    <h2>Welcome to lasting's website</h2>
                </div>
                <div className='content'>
                    {routes.map((i, index) => {                        
                        return IndexApp(i, index)
                    })}
                </div>
                <IndexFooter />
            </div>
        </>
    )
}

function IndexApp(props: customRouteObject, index: number) {
    const { path, title, desc } = props
    return (
        <Link key={index} to={String(path)}>            
            <Card style={{width:'160px',height:'160px'}}>
                <div>{title}</div>
                <hr></hr>
                <div>{desc}</div>
            </Card>
        </Link>
    )
}
