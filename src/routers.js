import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Services from "./services";
import Industries from "./industries";
import About from "./about";
import Terms from "./terms";
import Privacy from "./privacy";

const getDefaultRoutes = () => [
  { path: "/", element: <App /> },
  { path: "/services", element: <Services /> },
  { path: "/industries", element: <Industries /> },
  { path: "/about", element: <About /> },
  { path: "/terms", element: <Terms /> },
  { path: "/privacy", element: <Privacy /> }
];

function Routers() {
  const router = createBrowserRouter(getDefaultRoutes());

  return (
      <RouterProvider router={router} />
  );
}

export default Routers;