import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../store";
import Switch from "@mui/material/Switch";
import {UserInfo} from "../UserContainer/UserInfo";

const Header = () => {
    const {theme} = useAppSelector(state => state.theme);
    const dispatch = useAppDispatch();

    const handleChange = () => {
        dispatch(themeActions.toggleTheme())
    }

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);
    return (
        <div className={`${css.Main} ${theme === 'dark' ? css.DarkTheme : css.LightTheme}`}>
            <div className={css.Header}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
                <NavLink to={'searchMovie'}>SEARCH MOVIE</NavLink>
            </div>
            <div className={css.Switch}>
                <UserInfo/>
                <Switch
                    checked={theme === 'dark'}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                />
            </div>
        </div>
    );
};

export {Header};