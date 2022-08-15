import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { useRoutes, BrowserRouter, Route, Routes } from "react-router-dom";
import APlayerComponent from "./components/APlayerComponent";
import Footer from "./components/Footer";
import SiderBar from "./components/SiderBar";

import "./index.css";
import { getAllRoutes } from "./route/routes";
import { useAppSelector } from "./store/hooks/hook";
import { store } from "./store/store";

export default function App () {
    const routes = useRoutes(getAllRoutes());
    const theme = useAppSelector((state) => state.theme.value);
    const [appClassName, setAppClassName] = useState("App");

    useEffect(() => {
        setAppClassName(`App ${theme}`);
        if (theme === "dark") {
            document.body.style.backgroundColor = "rgb(40, 44, 52)";
        } else if (theme === "light") {
            document.body.style.backgroundColor = "white";
        } else {
            document.body.style.backgroundColor = "#ebdbb2";
        }
    }, [theme]);

    return (
        <div className={appClassName}>
            <SiderBar />
            <main>
                <Suspense fallback={<h1>loading...</h1>}>
                    {routes}
                </Suspense>
            </main>
            <Footer />
            <Routes>
                <Route path="/" element={ <APlayerComponent />} />
            </Routes>
        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
