import dashboard from "../assets/dashboard.svg";
import project from "../assets/project.svg";
import challenge from "../assets/challenge.svg";
import profile from "../assets/profile.svg";
import explore from "../assets/explore.svg";
import logout from "../assets/logout.svg";
import { Link } from "react-router-dom";
import userplus from "../assets/userplus.svg";

function Sidebarlinks() {
  return (
    <div className="">
      {/* <img
        src="../../connectdevsicon.png"
        alt="logo"
        className="w-12 h-12 m-3"
      /> */}
      <ul className="pt-7 px-3 flex justify-center">
        <li>
          <button className="rounded-full">
            <img
              src={userplus}
              alt="image"
              className="h-9 w-9 bg-transparent rounded-full p-2"
            />
          </button>
        </li>
      </ul>
      <hr className="border-gray-300 m-3" />
      <ul className="gap-y-10   font-mono  flex justify-center items-center flex-col list-none text-xl font-semibold">
        {" "}
        <Link to="/Home">
          {" "}
          <li className=" pt-3">
            <img src={dashboard} alt="dash" />
            {/* <p>Dashboard</p> */}
          </li>
        </Link>
        <Link to="/Project">
          <li className="">
            <img src={project} alt="pjt" />
            {/* <p>Projects</p> */}
          </li>
        </Link>
        <Link to="/Challenge">
          <li className="">
            <img src={challenge} alt="chg" />
            {/* <p>Challenges</p> */}
          </li>
        </Link>
        <Link to="/Feed">
          <li className="">
            <img src={explore} alt="exp" />
            {/* <p>Explore</p> */}
          </li>
        </Link>
        <Link to="/Profile">
          <li className="">
            <img src={profile} alt="pfp" />
            {/* <p>Profile</p> */}
          </li>
        </Link>
      </ul>{" "}
      <div className="flex-col relative top-44">
        <hr className="border-gray-300 mx-3" />{" "}
        <Link to="/Logout">
          <div className="mt-6 flex  justify-center rotate-180">
            <img src={logout} alt="lout" />
            {/* <p>Logout</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebarlinks;
