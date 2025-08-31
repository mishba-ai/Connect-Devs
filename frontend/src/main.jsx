import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Pages/HomePage.jsx";
import Profile from "./Pages/ProfilePage.jsx";
import Project from "./Pages/Project.jsx";
import Feed from "./Pages/Feed.jsx";
import Challenges from "./Pages/Challenges.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./components/Notfound.jsx";
import Setting from "./Pages/Setting.jsx";
import Layout from "./components/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
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
        path: "Project",
        element: <Project />,
      },
      {
        path: "Challenges",
        element: <Challenges />,
      },
    ],
  },

  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "setting",
    element: <Setting />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
