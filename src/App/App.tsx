import * as classes from './app.module.scss'
import { Counter } from "components/counter";

import img from '../img.png'
import { Route, Routes, Link } from 'react-router-dom';
import { AboutPage } from '../pages/aboutPage';
import { HomePage } from '../pages/homePage';
import { Suspense } from 'react';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '../shared/lib/helpers/classNames';

import './styles/index.scss'

export enum Theme {
    DARK = 'dark',
    LIGHT= 'light',
}

export const App = () => {
    
    const {theme, toggleTheme} = useTheme()


    return (
        <div className={classNames(classes.app, {}, ['app', theme])}>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<HomePage />} />
                </Routes>
            </Suspense>
            <img src={img} />
            <Counter />
            <button onClick={toggleTheme}>change theme</button>
        </div>
    )
}