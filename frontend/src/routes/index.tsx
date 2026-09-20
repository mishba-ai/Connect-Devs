import App from "../App.tsx";
import Home from "../Pages/HomePage.tsx";
import Profile from "../Pages/ProfilePage.tsx";
import Project from "../Pages/Project.tsx";
import Feed from "../Pages/Feed.tsx";
import Challenges from "../Pages/Challenges.tsx";
import Notfound from "../Pages/Notfound.tsx";
import Setting from "../Pages/Setting.tsx";
import Layout from "../Pages/Layout.tsx";
import CreateProject from "../Pages/Createproject.tsx";

export const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    element: <Layout />,
    children: [
      // { //   path: "Home",//   element: <Home />, // },
      // { index: true, element: <Project /> },
      { path: "Feed", element: <Project />, },
      { path: "Profile", element: <Profile />, },
      // {//   path: "Community",  //   element: <Feed />,// },
      { path: "CreateProject", element: <CreateProject /> },
      { path: "Challenges", element: <Challenges />, },
    ],
  },

  { path: "*", element: <Notfound />, },
  { path: "setting", element: <Setting />, },
]