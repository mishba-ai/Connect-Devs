import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  const location = useLocation();

  //get pagename from the url
  const getPageName = () => {
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
    <div className="min-h-screen bg-background">
      <section className="flex gap-x-12 min-h-screen bg-background w-full">
        <div className="flex-shrink-0">
          <Sidebar style={{}} />
        </div>
        <div className="flex-1 flex flex-col min-h-screen ">
          <div
            className={
              isHome ? "w-[1000px]   mt-10" : " w-full mt-10"
            }
          >
            <div>
              <Header page={pageName} />
            </div>          <div>
            <Outlet />
          </div>
          </div>{" "}

        </div>{" "}
      </section>
    </div>
  );
}
