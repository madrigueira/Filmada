import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Search from "./pages/MovieSearch";
import Movie from "./pages/MovieSinglePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "movie",
    element: <Movie />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
