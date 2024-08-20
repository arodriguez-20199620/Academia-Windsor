import { lazy } from "react";

const Home = lazy(() => import('./pages/home/HomePage'));
const NotFound = lazy(() => import('./pages/utils/NotFound'))

const routes = [
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFound /> },
]

export default routes;