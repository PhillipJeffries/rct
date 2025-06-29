import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { RouteConfig } from "shared/config/routeConfig/routeConfig"
import { PageLoader } from "widgets/PageLoader"

const AppRouter = () => {
    return (
        <Routes>
            {Object.values(RouteConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    element={
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">
                                {element}
                            </div>
                        </Suspense>
                    }
                    path={path}
                />
            ))}
        </Routes>
    )
}

export default AppRouter