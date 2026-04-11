import App from "../App.tsx";
import Home from "../Pages/HomePage.tsx";
import Profile from "../Pages/ProfilePage.tsx";
import Project from "../Pages/Project.tsx";
import Feed from "../Pages/Feed.tsx";
import Challenges from "../Pages/Challenges.tsx";
import Notfound from "../components/Notfound.tsx";
import Setting from "../Pages/Setting.tsx";
import Layout from "../components/Layout.tsx";
import CreateProject from "../Pages/Createproject.tsx";
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