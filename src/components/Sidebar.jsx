import PropTypes from "prop-types";
import dashboard from "../assets/dashboard.svg";
import project from "../assets/project.svg";
import challenge from "../assets/challenge.svg";
import profile from "../assets/profile.svg";
import explore from "../assets/explore.svg";
import logout from "../assets/logout.svg";
import { Link } from "react-router-dom";
import userplus from "../assets/userplus.svg";
import { useLocation } from "react-router-dom";
import Tooltip from "./Tooltip";

function Sidebar({ style }) {
  // const [activeIndex, setActiveIndex] = useState(null);
  const location = useLocation(); // Get the current location
  // const handleClick = (index) => {
  //   setActiveIndex(index); //  Update the active button index
  // };
  const isCurrentPath = (path) => {
    return location.pathname === path; // Check if the current path is the same as the given path
  };

  return (
    <div className=" sticky top-6">
      <div
        className="h-[93vh] rounded-[35px] m-[24px] w-24 bg-primary border border-white  top-0 sticky "
        style={style}
      >
        <div className="">
          {/* <img
        src="../../connectdevsicon.png"
        alt="logo"
        className="w-12 h-12 m-3"
      /> */}
          <ul className="pt-7 px- flex justify-center">
            <li>
              <Tooltip text="User">
              <button
                className={` ${
                  isCurrentPath("/userplus")
                    ? "transition-all translate-x-[-3px] shadow-[2px_2px_0px_rgb(255,255,255)] active translate-y-[-3px] "
                    : "bg-transparent rounded-2xl px-1 py-1  transition-all hover:translate-x-[-3px] hover:shadow-[2px_2px_0px_rgb(255,255,255)] hover:translate-y-[-3px]"
                }`}
              > 
                <img src={userplus} alt="image" className="h-8 w-8  p-1" />
                
              </button></Tooltip>
            </li>
          </ul>
          <hr className="border-gray-300 m-3" />
          <ul className="gap-y-10     flex justify-center items-center flex-col list-none ">
            {" "}
            <Link to="/Home">
              {" "}
              <li className=" pt-3">
                <Tooltip text="dashboard">
                <button
                  className={` ${
                    isCurrentPath("/Home")
                      ? "transition-all translate-x-[-3px] shadow-[2px_2px_0px_rgb(206,255,26)] rounded-xl px-1 py-1  translate-y-[-3px]"
                      : "bg-transparent rounded-xl px-1 py-1  transition-all hover:translate-x-[-3px] hover:shadow-[2px_2px_0px_rgb(255,255,255)] hover:translate-y-[-3px]"
                  }`}
                >
                  <img src={dashboard} alt="dash" />
                </button></Tooltip>
                {/* <p>Dashboard</p> */}
              </li>
            </Link>
            <Link to="/Project">
              <li className="">
              <Tooltip text="Project">

                <button
                  className={` ${
                    isCurrentPath("/Project")
                      ? "transition-all translate-x-[-3px] rounded-xl px-1 py-1 shadow-[2px_2px_0px_rgb(206,255,26)]  translate-y-[-3px]"
                      : "bg-transparent rounded-xl px-1 py-1  transition-all hover:translate-x-[-3px] hover:shadow-[2px_2px_0px_rgb(255,255,255)] hover:translate-y-[-3px]"
                  }`}
                >
                  <img src={project} alt="pjt" />
                </button></Tooltip>
                {/* <p>Projects</p> */}
              </li>
            </Link>
            <Link to="/Challenges">
              <li className="">
              <Tooltip text="Challenge">

                <button
                  className={` ${
                    isCurrentPath("/Challenge")
                      ? "transition-all translate-x-[-3px] shadow-[2px_2px_0px_rgb(206,255,26)] rounded-xl px-1 py-1 translate-y-[-3px]"
                      : "bg-transparent rounded-xl px-1 py-1  transition-all hover:translate-x-[-3px] hover:shadow-[2px_2px_0px_rgb(255,255,255)] hover:translate-y-[-3px] "
                  }`}
                >
                  <img src={challenge} alt="chg" />
                </button></Tooltip>
                {/* <p>Challenges</p> */}
              </li>
            </Link>
            <Link to="/Feed">
              <li className="">
              <Tooltip text="Feed">

                <button
                  className={` ${
                    isCurrentPath("/Feed")
                      ? "transition-all translate-x-[-3px] shadow-[2px_2px_0px_rgb(206,255,26)] rounded-xl px-1 py-1 translate-y-[-3px]"
                      : "bg-transparent rounded-xl px-1 py-1  transition-all hover:translate-x-[-3px] hover:shadow-[2px_2px_0px_rgb(255,255,255)] hover:translate-y-[-3px]"
                  }`}
                >
                  <img src={explore} alt="exp" />
                </button></Tooltip>
                {/* <p>Explore</p> */}
              </li>
            </Link>
            <Link to="/Profile">
              <li className="">
              <Tooltip text="Profile">

                <button
                  className={` ${
                    isCurrentPath("/Profile")
                      ? "transition-all translate-x-[-3px] shadow-[2px_2px_0px_rgb(206,255,26)] rounded-xl px-1 py-1 translate-y-[-3px]"
                      : "bg-transparent rounded-xl px-1 py-1  transition-all hover:translate-x-[-3px] hover:shadow-[2px_2px_0px_rgb(255,255,255)] hover:translate-y-[-3px]"
                  }`}
                >
                  {" "}
                  <img src={profile} alt="pfp" />
                </button></Tooltip>
                {/* <p>Profile</p> */}
              </li>
            </Link>
          </ul>{" "}
          <div className="flex-col relative top-28">
            <hr className="border-gray-300 mx-3" />{" "}
            <Link to="/Logout">
              <div className="mt-4 flex  justify-center ">
              <Tooltip text="Logout">
                <button
                  className={` ${
                    isCurrentPath("/Logout")
                      ? "transition-all translate-x-[-3px] shadow-[2px_2px_0px_rgb(206,255,26)] rounded-xl px-1 py-1 translate-y-[-3px]"
                      : "bg-transparent rounded-xl px-1 py-1  transition-all hover:translate-x-[-3px] hover:shadow-[2px_2px_0px_rgb(255,255,255)] hover:translate-y-[-3px] mt-2"
                  }`}
                >
                  {" "}
                  <img src={logout} alt="lout" className="rotate-180" />
                </button></Tooltip>
                {/* <p>Logout</p> */}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
Sidebar.propTypes = {
  style: PropTypes.object, // Optional prop with type `object`
};
export default Sidebar;
