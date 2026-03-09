import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy } from 'react';

//Importamos las paginas de nuestra aplicación de forma lazy para mejorar el rendimiento
const MainPage = lazy(() => import('./pages/MainPage/MainPage'));

//Creamos el router de nuestra aplicación
const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    );
};
export default AppRouter;
