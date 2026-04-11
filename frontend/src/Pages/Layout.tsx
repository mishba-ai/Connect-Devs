import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/common/Header.tsx";
import Sidebar from "../components/common/Sidebar.tsx";
import { useAuth } from "../hooks/useAuth.ts";
import { Navigate } from "react-router-dom";
import Splashscreen from "./Splashscreen.tsx";

export default function Layout() {
  const location = useLocation();
  const { user, loading } = useAuth();
  
  if (loading) return <Splashscreen/>;
  // if (!user) return <Navigate to="/" replace />;
  
  //get pagename from the url
  const getPageName = ():string => {
    const pathname = location.pathname;
    //remove leadin slash
    const segments = pathname.split("/").filter((segment) => segment !== "");

    if (segments.length === 0) {
      return "Home"; //default for root path '/'
    }
    const pageName = segments[0];
    // Capitalize first letter and handle specific cases

    switch (pageName.toLowerCase()) {
      case "home":
        return "Home";
      case "project":
        return "Project";
      case "settings":
        return "Settings";
      case "profile":
        return "Profile";
      default:
        // Capitalize first letter of any other page
        return pageName.charAt(0).toUpperCase() + pageName.slice(1);
    }
  };
  const pageName = getPageName();
  const isHome = pageName.toLowerCase() === "home";

  return (
    <div className=" w-full relative">
      <section className="flex relative z-10  bg-[#faf4f0] w-full">
       <div className="absolute top-0 right-0 w-[70%] h-[400px] bg-gradient-to-bl from-[#F66254] via-[#0052FF] to-[#8a5f21] opacity-50 pointer-events-none rounded-bl-full blur-3xl"></div>
        <div className="shrink-0">
          <Sidebar style={{}} />
        </div>
        <div className="flex-1  py-4 flex flex-col min-h-screen ">
          <div className={isHome ? "w-[] " : " w-full"}>
            <div>
              <Header page={pageName} />
            </div>{" "}
            <div className="mt-4  max-w-7xl mx-auto  flex-1">
              <Outlet />
            </div>
          </div>{" "}
        </div>{" "}
      </section>
    </div>
  );
}
