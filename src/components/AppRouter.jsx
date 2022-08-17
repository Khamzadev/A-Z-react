import React, {useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router";
import {AuthContext} from '../context'

const AppRouter = () => {

  const {isAuth, setIsAuth} = useContext(AuthContext)

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
      <Route to="*" element={<Posts/>}/>
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route
          element={route.element}
          path={route.path}
          exact={route.exact}
          key={route.path}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
