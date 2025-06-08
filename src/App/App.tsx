import classes from './app.module.scss'
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/helpers/classNames/classNames';
import { Navbar } from 'widgets/Navbar';

import './styles/index.scss'
import { AppRouter } from './providers/Router';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense } from 'react';


export enum Theme {
    DARK = 'dark',
    LIGHT = 'light',
}

export const App = () => {

    const { theme } = useTheme()


    return (
        <div className={classNames(classes.app, {}, ['app', theme])}>
            <Suspense fallback=''>
                <Navbar />
                <div className='page-content'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}