import * as classes from './app.module.scss'
import { Counter } from "../counter";

import img from '../../img.png'
import { Route, Routes, Link } from 'react-router-dom';
// import AboutPage from '../../pages/aboutPage';
// import HomePage from '../../pages/homePage';
import { AboutPageAsync } from '../../pages/aboutPage.async';
import { HomePageAsync } from '../../pages/homePage.async';
import { Suspense } from 'react';

export const App = () => {
    return (
        <div className={classes.app}>
            <Link to={'/'}>home</Link>
            <Link to={'/about'}>about</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route path={'/about'} element={<AboutPageAsync />} />
                    <Route path={'/'} element={<HomePageAsync />} />
                </Routes>
            </Suspense>
            <img src={img} />
            <Counter />
        </div>
    )
}