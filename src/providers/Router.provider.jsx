import React, { useContext, useState } from 'react';
import { RouterContext } from '../context/RouterContext';

function useRouterContext() {
  const context = useContext(RouterContext);
  if (!context) {
    return new Error(
      'You can not use useRouterContext without an RouterProvider'
    );
  }

  return context;
}

function Route({ children, href }) {
  const context = useContext(RouterContext);
  if (!context) {
    return new Error(
      'You can not use useRouterContext without an RouterProvider'
    );
  }
  console.log(context);
  const routerValues = { ...context };

  switch (routerValues.router.pathname) {
    case href:
      return children;
    default:
      return null;
  }
}

function RouterProvider({ children }) {
  const navigate = (pathname, navigate) => {
    setRouter({ pathname, navigate });
    window.history.pushState(null, null, pathname);
  };
  const [router, setRouter] = useState({
    pathname: window.location.pathname,
    navigate,
  });
  console.log(router);
  window.onpopstate = () => {
    setRouter({ pathname: window.location.pathname, navigate });
  };

  return (
    <RouterContext.Provider value={{ router }}>
      {children}
    </RouterContext.Provider>
  );
}

export { Route, RouterProvider, useRouterContext };
