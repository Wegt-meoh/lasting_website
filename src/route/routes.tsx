import React from "react";
import { Link, RouteObject } from "react-router-dom";
import MarkdownSlice from "../components/MarkdownSlice";
import Artical from "../pages/Artical";
import Main from "../pages/Main";
import Product from "../pages/Product";
import {
    CssLayoutPractice, BlurryLoading, DraggingList, ExpandingCards,
    HiddenSearch, LoginDemo, ProgressSteps, RotatingNavAnimation, ScrollAnimation,
    UseUserMedia, PushBox, UseDisplayMedia
} from "../components/Products";

interface customRouteObject extends Omit<RouteObject, "children"> {
    title: string
    desc: string
    classify: "artical" | "product" | "other"
    children?: customRouteObject[]
    date?: string
}

const routes: customRouteObject[] = [
    { path: "*", element: <NoMatchPage />, title: "主页", desc: "", classify: "other" },
    { index: true, path: "/", element: <Main />, title: "主页", desc: "", classify: "other" },
    { path: "/product", element: <Product />, title: "作品", desc: "", classify: "other" },
    { path: "/artical", element: <Artical />, title: "文章", desc: "", classify: "other" },
    { path: "/cssLayoutPractice", element: <CssLayoutPractice />, title: "css布局练习", desc: "", classify: "product" },
    { path: "/draggingList", element: <DraggingList />, title: "拖动列表", desc: "", classify: "product" },
    { path: "/loginDemo", element: <LoginDemo />, title: "登陆页面Demo", desc: "", classify: "product" },
    { path: "/useUserMedia", element: <UseUserMedia />, title: "摄像头拍照", desc: "", classify: "product" },
    { path: "/knowlege", element: <MarkdownSlice src={"/mdFiles/knowlage/home.md"} alt={"loading"} languageSubset={["ts", "python"]} />, title: "知识梳理", desc: "", classify: "artical", date: "2022 06 08" },
    { path: "/cssNote", element: <MarkdownSlice src='/mdFiles/cssNote/cssSelector.md' alt={"loading..."} languageSubset={["css"]} />, title: "css选择器", desc: "", classify: "artical", date: "2022 06 10" },
    { path: "/other", element: <MarkdownSlice src='/mdFiles/otherNote/note.md' alt={"loading..."} languageSubset={["css"]} />, title: "网络安全", desc: "", classify: "artical", date: "2022 06 11" },
    { path: "/expandingCards", element: <ExpandingCards />, title: "expanding cards", desc: "", classify: "product", date: "2022 06 12" },
    { path: "/progressStep", element: <ProgressSteps />, title: "pregress steps", desc: "", classify: "product", date: "2022 06 12" },
    { path: "/RotatingNavAnimation", element: <RotatingNavAnimation />, title: "Rotating nav animation", desc: "", classify: "product", date: "2022 06 13" },
    { path: "/HiddenSearch", element: <HiddenSearch />, title: "Hidden search", desc: "", classify: "product", date: "2022 06 13" },
    { path: "/BlurryLoading", element: <BlurryLoading />, title: "Blurry Loading", desc: "", classify: "product", date: "2022 06 14" },
    { path: "/ScrollAnimation", element: <ScrollAnimation />, title: "Scroll Animation", desc: "", classify: "product", date: "2022 06 14" },
    { path: "/mianshi", element: <MarkdownSlice src="/mdFiles/otherNote/note1.md" alt="loading..." languageSubset={["ts"]} />, title: "面试实战", desc: "", classify: "artical", date: "2022 06 16" },
    { path: "/jsManipulateCss", element: <MarkdownSlice src="/mdFiles/jsNote/jsManipulateCss.md" alt="loading..." languageSubset={["js"]} />, title: "js操作css", desc: "", classify: "artical", date: "2022 06 16" },
    { path: "/httpAndHttps", element: <MarkdownSlice src="/mdFiles/otherNote/httpAndHttps.md" alt="loading..." languageSubset={[]} />, title: "Http&Https", desc: "", classify: "artical", date: "2022 06 19" },
    { path: "/jsbagu", element: <MarkdownSlice src="/mdFiles/jsNote/jsbagu.md" alt="loading..." languageSubset={[]} />, title: "js八股文", desc: "", classify: "artical", date: "2022 06 21" },
    { path: "/useDisplayMedia", element: <UseDisplayMedia />, title: "共享屏幕内容", desc: "", classify: "product", date: "2022 06 21" },
    { path: "/dockercmd", element: <MarkdownSlice src="/mdFiles/otherNote/dockerCmd.md" alt="loading..." languageSubset={[]} />, title: "docker常用命令", desc: "", classify: "artical", date: "2022 06 21" },
    { path: "/whatiswebpack", element: <MarkdownSlice src="/mdFiles/otherNote/learningWebpack.md" alt="loading..." languageSubset={[]} />, title: "什么是webpack", desc: "", classify: "artical", date: "2022 06 23" },
    { path: "/pushbox", element: <PushBox />, title: "Push Box", desc: "", classify: "product", date: "2022 06 25" }
];

function getProduct () {
    return routes.filter((r) => {
        return r.classify === "product";
    });
}

function getArtical () {
    return routes.filter((r) => {
        return r.classify === "artical";
    });
}

function getSortedArtical () {
    return getArtical().sort((a, b) => {
        const date_a = a.date === undefined ? "0" : a.date;
        const num_a = parseInt(date_a.replaceAll(" ", ""));

        const date_b = b.date === undefined ? "0" : b.date;
        const num_b = parseInt(date_b.replaceAll(" ", ""));
        return num_b - num_a;
    });
}

function getAllRoutes () {
    return routes;
}

function NoMatchPage () {
    return (
        <div>
            <h2>No such Page, please check your url.</h2>
            <Link to='/'>back to home page</Link>
        </div>
    );
}

export { getProduct, getAllRoutes, getArtical, getSortedArtical };
export type { customRouteObject };
