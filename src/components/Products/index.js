import React from "react"

const CssLayoutPractice = React.lazy(() => import("./css-layout-practice"))
const BlurryLoading = React.lazy(() => import("./blurry-loading"))
const DraggingList = React.lazy(() => import("./dragging-list"))
const ExpandingCards = React.lazy(() => import("./expanding-cards"))
const HiddenSearch = React.lazy(() => import("./hidden-search"))
const LoginDemo = React.lazy(() => import("./login-demo"))
const ProgressSteps = React.lazy(() => import("./progress-steps"))
const RotatingNavAnimation = React.lazy(() => import("./rotating-nav-animation"))
const ScrollAnimation = React.lazy(() => import("./scroll-animation"))
const UseUserMedia = React.lazy(() => import("./use-user-media"))
const PushBox = React.lazy(() => import("./pushman-game"))
const UseDisplayMedia = React.lazy(() => import("./use-display-media"))


export {
    CssLayoutPractice, BlurryLoading, DraggingList, ExpandingCards,
    HiddenSearch, LoginDemo, ProgressSteps, RotatingNavAnimation, ScrollAnimation,
    UseUserMedia, PushBox,UseDisplayMedia
}