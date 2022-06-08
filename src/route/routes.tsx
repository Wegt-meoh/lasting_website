import React from "react"
import { Link, RouteObject } from "react-router-dom"
import Artical from "../pages/Artical"
import Knowlege from "../pages/Artical/Knowlege"
import Main from "../pages/Main"
import Product from "../pages/Product"
import CssLayoutPractice from "../pages/Product/CssLayoutPractice"
import DraggingList from "../pages/Product/DraggingList"
import Login from "../pages/Product/Login"
import UseUserMedia from "../pages/Product/UseUserMedia"

interface customRouteObject extends Omit<RouteObject, 'children'> {
    title: string
    desc: string
    classify: 'artical'|'product'|'other'
    children?: customRouteObject[]
    date?:string
}

const routes: customRouteObject[] = [
    { index: true, path: '/', element: <Main />, title: '主页', desc: '', classify: 'other' },
    {
        path: '/product', element: <Product />,
        title: '作品', desc: '', classify: 'other',
    },
    { path: '/artical', element: <Artical />, title: '文章', desc: '', classify: 'other' },
    { path: '/cssLayoutPractice', element: <CssLayoutPractice />, title: 'css布局练习', desc: '', classify: 'product' },
    { path: '/draggingList', element: <DraggingList />, title: '拖动列表', desc: '', classify: 'product' },
    { path: '/loginDemo', element: <Login />, title: '登陆页面Demo', desc: '', classify: 'product' },
    { path: '/useUserMedia', element: <UseUserMedia />, title: '摄像头拍照', desc: '', classify: 'product' }, 
    { path: '/knowlege', element: <Knowlege />, title: '知识梳理', desc: '', classify: 'artical' ,date:'2022 06 08'},    
]

function getProduct() {
    return routes.filter((r) => {
        return r.classify==='product'
    })
}

function getArtical() {
    return routes.filter((r) => {
        return r.classify==='artical'
    })
}

function getAllRoutes() {
    return routes
}

function NoMatchPage() {
    return (
        <div>
            <h2>No such Page, please check your url.</h2>
            <Link to='/'>back to home page</Link>
        </div>
    )
}

export { getProduct, getAllRoutes,getArtical }
export type { customRouteObject }
