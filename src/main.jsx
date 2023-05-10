import React from "react"
import ReactDOM from "react-dom/client"
import Home from "./pages/Home"
import Movie from "./pages/Movie"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, {
    path: "/movie",
    element: <Movie />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
