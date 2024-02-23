import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/HomePage.jsx";
import Profile from "./Pages/ProfilePage.jsx";
import Project from "./Pages/project.jsx";
import Feed from "./Pages/Feed.jsx";
import  Challenge from "src/Pages/Challenge.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Feed",
    element: <Feed />,
  },
  {
    path: "Profile",
    element: <Profile />,
  },
  {
    path: "Challenge",
    element: <Challenge />,
  },
  {
    path: "Project",
    element: <Project />,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
