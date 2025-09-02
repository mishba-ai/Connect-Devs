import { Outlet, useLocation } from "react-router-dom";
import Header from "./common/Header";
import Sidebar from "./common/Sidebar";

export default function Layout() {
  const location = useLocation();

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
    //
  };
  const pageName = getPageName();
  const isHome = pageName.toLowerCase() === "home";

  return (
    <div className="min-h-screen ">
      <section className="flex gap-x-12 min-h-screen bg-[#f2f5f2] w-full">
        <div className="shrink-0">
          <Sidebar style={{}} />
        </div>
        <div className="flex-1 max-w-7xl mx-auto px-6 py-8 flex flex-col min-h-screen ">
          <div className={isHome ? "w-[] " : " w-full"}>
            <div>
              <Header page={pageName} />
            </div>{" "}
            <div className="mt-10">
              <Outlet />
            </div>
          </div>{" "}
        </div>{" "}
      </section>
    </div>
  );
}
