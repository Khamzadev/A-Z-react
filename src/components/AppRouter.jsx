import React from "react";
import { Routes, Route } from "react-router-dom";
import Posts from "../pages/Posts";
import { privateRoutes, publicRoutes } from "../router";

const AppRouter = () => {
  const isAuth = false;

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
