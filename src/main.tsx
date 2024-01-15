import "@fontsource/bagnard";
import "@fontsource/open-sans";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "./About.tsx";
import { Blog, BlogEntry } from "./Blog.tsx";
import Contact from "./Contact.tsx";
import ErrorPage from "./ErrorPage.tsx";
import Welcome from "./Welcome.tsx";
import "./style.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog/:id",
    element: <BlogEntry md="test" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
