import React from "react";

const CssLayoutPractice = React.lazy(async () => await import("./css-layout-practice"));
const BlurryLoading = React.lazy(async () => await import("./blurry-loading"));
const DraggingList = React.lazy(async () => await import("./dragging-list"));
const ExpandingCards = React.lazy(async () => await import("./expanding-cards"));
const HiddenSearch = React.lazy(async () => await import("./hidden-search"));
const LoginDemo = React.lazy(async () => await import("./login-demo"));
const ProgressSteps = React.lazy(async () => await import("./progress-steps"));
const RotatingNavAnimation = React.lazy(async () => await import("./rotating-nav-animation"));
const ScrollAnimation = React.lazy(async () => await import("./scroll-animation"));
const UseUserMedia = React.lazy(async () => await import("./use-user-media"));
const PushBox = React.lazy(async () => await import("./pushman-game"));
const UseDisplayMedia = React.lazy(async () => await import("./use-display-media"));
const Piano = React.lazy(async () => await import("./piano"));

export {
    CssLayoutPractice, BlurryLoading, DraggingList, ExpandingCards,
    HiddenSearch, LoginDemo, ProgressSteps, RotatingNavAnimation, ScrollAnimation,
    UseUserMedia, PushBox, UseDisplayMedia, Piano
};
