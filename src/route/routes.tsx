import React from "react"
import { Link, RouteObject } from "react-router-dom"
import CssLayoutPractice from "../pages/CssLayoutPractice"
import DraggingList from "../pages/DraggingList"
import Index from "../pages/Index"
import LearningNote from "../pages/LearningNote"
import Login from "../pages/Login"
import PromiseImpl from "../pages/PromiseImpl"
import RefDemo from "../pages/RefDemo"
import RgbaToHex from "../pages/rgba2hex"
import UseUserMedia from "../pages/UseUserMedia"

interface customRouteObject extends RouteObject {
    title: string
    desc: string
}

const EccLearning = React.lazy(() => import("../pages/EccLearning"))

const routes: customRouteObject[] = [
    { index: true, path: '/', element: <Index />, title: '主页', desc: '' },
    { path: '*', element: <NoMatchPage />, title: '未匹配', desc: '' },
    { path: '/app/rgba2hex', element: <RgbaToHex />, title: 'rgb2hex', desc: '' },
    { path: '/app/eccLearning', element: <EccLearning />, title: '椭圆曲线ecc', desc: '' },
    { path: '/app/login', element: <Login />, title: '登陆页面', desc: '拟态风格的登陆界面' },
    { path: '/app/ref', element: <RefDemo />, title: 'useRef', desc: '' },
    { path: '/app/draggingList', element: <DraggingList />, title: '拖动排序', desc: '一个拖动排序的列表' },
    { path: '/app/userMedia', element: <UseUserMedia />, title: '摄像头', desc: '非本地调试的话，需要开启权限才能使用,请查看控制台' },
    { path: '/app/cssPractice', element: <CssLayoutPractice />, title: 'css布局练习', desc: '' },
    { path: '/app/learningNote', element: <LearningNote />, title: '学习笔记', desc: '' },
    { path: '/app/promiseImpl', element: <PromiseImpl />, title: 'promise实现', desc: '' },
]

function getAvailableRoutes() {
    return routes.slice(2)
}

function getAllRoutes(){
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

export { getAvailableRoutes ,getAllRoutes }
export type { customRouteObject }
