import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from "./MainLayout.module.css"
import {useAppSelector} from "../hooks";

const MainLayout = () => {
    const {theme} = useAppSelector(state => state.theme);

    return (
        <div className={`${css.Main} ${theme === 'light' ? css.lightMode : css.darkMode}`}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};