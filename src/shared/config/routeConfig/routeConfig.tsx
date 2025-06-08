import React from "react"
import { AboutPage } from "pages/aboutPage"
import { HomePage } from "pages/homePage"
import { NotFoundPage } from "pages/notFoundPage"

import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'notFound'
}

export const RoutPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.NOT_FOUND]: '*',

}

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutPath.main,
        element: <HomePage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutPath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutPath.notFound,
        element: <NotFoundPage/>
    },
}