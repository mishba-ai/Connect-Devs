import App from "../App";
import Home from "../Pages/HomePage";
import Profile from "../Pages/ProfilePage";
import Project from "../Pages/Project";
import Feed from "../Pages/Feed";
import Challenges from "../Pages/Challenges";
import Notfound from "../components/Notfound";
import Setting from "../Pages/Setting";
import Layout from "../components/Layout";
import CreateProject from "../Pages/Createproject";

export const routes =   [
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
]