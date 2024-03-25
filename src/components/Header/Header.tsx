import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {themeActions} from "../../store";
import Switch from "@mui/material/Switch";
import {UserInfo} from "../UserContainer";

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
        <div className={css.Main}>
            <div className={css.Header}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
                <NavLink to={'searchMovie'}>SEARCH MOVIE</NavLink>
                <div className={css.Switch}>
                    <Switch
                        checked={theme === 'dark'}
                        onChange={handleChange}
                        inputProps={{'aria-label': 'controlled'}}
                    />
                    <UserInfo/>
                </div>
            </div>
        </div>
    );
};

export {Header};