import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context/authContext';

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <Routes>
          {isAuth && privateRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}></Route>)}
          {publicRoutes.map(route => <Route key={route.path} path={route.path} element={route.element}></Route>)}
        </Routes>
    );
};

export default AppRouter;