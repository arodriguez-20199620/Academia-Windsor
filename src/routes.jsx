import { lazy } from "react";

const Home = lazy(() => import('./pages/home/HomePage'));
const Plans = lazy(() => import('./pages/plans/PlansPage'));
const CorporateClasses = lazy(() => import('./pages/corporateClasses/CorporateClassesPage'));
const PrivateClasses = lazy(() => import('./pages/privateClasses/PrivateClassesPage'));
const Tutors = lazy(() => import('./pages/tutors/TutorsPage'));
const Contact = lazy(() => import('./pages/contact/ContactPage'));
const NotFound = lazy(() => import('./pages/utils/NotFound'));


const routes = [
    { path: '/', element: <Home /> },
    { path: '/planes', element: <Plans />, },
    { path: '/planes/clases-corporativas', element: <CorporateClasses />, },
    { path: '/planes/clases-privadas', element: <PrivateClasses />, },
    { path: '/tutores', element: <Tutors />, },
    { path: '/contacto', element: <Contact />, },
    { path: '*', element: <NotFound /> },
]

export default routes;