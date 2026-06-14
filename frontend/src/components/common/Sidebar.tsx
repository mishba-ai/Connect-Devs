import { Link, useLocation } from "react-router-dom";
import Tooltip from "./Tooltip.tsx";
import { SquareUser, LayoutDashboard, UserPlus, SquareChartGantt, AppWindow } from "lucide-react";
import React from "react";
import connectlogo from "/connectlogo.png"
interface NavItem {
  path: string;
  icon: React.ReactNode;
  alt?: string
  tooltip: string;
}

const navItems: NavItem[] = [
  // { path: "/userplus", icon: <UserPlus className="text-white"/>, tooltip: "User" },
  { path: "/home", icon: <LayoutDashboard className="text-white" />, tooltip: "dashboard" },
  { path: "/project", icon: <SquareChartGantt className="text-white" />, tooltip: "Project" },
  { path: "/CreateProject", icon: <AppWindow className="text-white" />, tooltip: "CreateProject" },
  // { path: "/Challenges", icon: challenge, alt: "Challenges", tooltip: "Challenge" },
  // { path: "/Feed", icon: explore, alt: "Explore", tooltip: "Feed" },
  // { path: "/Profile", icon: profile, alt: "Profile", tooltip: "Profile" },
];

const ProfileItem = { path: "/Profile", icon: <SquareUser className="text-white" />, tooltip: "profile" };


interface SidebarTypes {
  style: React.CSSProperties,
}
function Sidebar({ style }: SidebarTypes) {
  const location = useLocation();

  // Helper function to determine the button classes
  const getButtonClass = (path: string) => {
    const baseClasses = "rounded-xl px-1 py-1 transition-all hover:translate-x-[-3px] hover:shadow-[2px_2px_0px_rgb(255,255,255)] hover:translate-y-[-3px]";
    const activeClasses = "translate-x-[-3px] shadow-[2px_2px_0px_rgb(206,255,26)] translate-y-[-3px]";
    return location.pathname === path ? `${baseClasses} ${activeClasses}` : baseClasses;
  };

  return (
    <div className="sticky top-0">
      <div
        className="h-screen w-12 bg-primary border-r-2 border-green top-0 sticky"
        style={style}
      >
        <div className="pt-4 flex justify-center items-center pb-1">
          <img src={connectlogo} alt="" className="h-6 w-6 -mt-" />

        </div>
        <hr className="border-gray-300 m-3 pb-4" />

        <div className="">
          <ul className="gap-y-10 flex justify-center items-center flex-col list-none">
            {navItems.map((item) => (
              <li key={item.path} className="">
                <Tooltip text={item.tooltip}>
                  <Link to={item.path}>
                    <button className={getButtonClass(item.path)}>
                      <div>{item.icon}</div>
                    </button>
                  </Link>
                </Tooltip>
              </li>
            ))}
          </ul>
          <div className="flex-col  relative top-80 ">
            <hr className="border-gray-300 mx-3" />
            <div className="mt-4 flex justify-center">
              <Tooltip text={ProfileItem.tooltip}>
                <Link to={ProfileItem.path}>
                  <button className={`${getButtonClass(ProfileItem.path)} mt-2`}>
                    <div>{ProfileItem.icon} </div>
                  </button>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Sidebar;