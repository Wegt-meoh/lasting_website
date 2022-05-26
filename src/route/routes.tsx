import React from "react"
import { Link, RouteObject } from "react-router-dom"
import DraggingList from "../pages/DraggingList"
import Index from "../pages/Index"
import Login from "../pages/Login"
import RefDemo from "../pages/RefDemo"
import RgbaToHex from "../pages/rgba2hex"
import UseUserMedia from "../pages/UseUserMedia"

interface customRouteObject extends RouteObject {
    title: string
    desc: string
}

const ReviewForCollegeClass = React.lazy(() => import("../pages/ReviewForCollegeClass"))
const EccLearning = React.lazy(() => import("../pages/EccLearning"))

const routes: customRouteObject[] = [
    { index: true, path: '/', element: <Index />, title: '主页', desc: '' },
    { path: '*', element: <NoMatchPage />, title: '未匹配', desc: '' },
    { path: '/app/reviewForCollegeClass', element: <ReviewForCollegeClass />, title: '课程复习', desc: '' },
    { path: '/app/rgba2hex', element: <RgbaToHex />, title: 'rgb2hex', desc: '' },
    { path: '/app/eccLearning', element: <EccLearning />, title: '椭圆曲线ecc', desc: '' },
    { path: '/app/login', element: <Login />, title: '登陆页面', desc: '' },
    { path: '/app/ref', element: <RefDemo />, title: 'useRef', desc: '' },
    { path: '/app/draggingList', element: <DraggingList />, title: '拖动排序', desc: '一个拖动排序的列表' },
    { path: '/app/userMedia', element: <UseUserMedia />, title: '摄像头', desc: '' },
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
