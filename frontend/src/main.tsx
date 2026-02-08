import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from "./Pages/HomePage";
import Profile from "./Pages/ProfilePage";
import Project from "./Pages/Project";
import Feed from "./Pages/Feed";
import Challenges from "./Pages/Challenges";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Notfound from "./components/Notfound";
import Setting from "./Pages/Setting";
import Layout from "./components/Layout";
import CreateProject from "./Pages/Createproject";

const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_OAUTH_CLIENT_ID
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
        path:"CreateProject",
        element:<CreateProject/>
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
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find the root element");
}
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
