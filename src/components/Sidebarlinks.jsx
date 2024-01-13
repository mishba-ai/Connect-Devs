import dashboard from "../assets/dashboard.svg";
import project from "../assets/project.svg";
import challenge from "../assets/challenge.svg";
import profile from "../assets/profile.svg";
import explore from "../assets/explore.svg";
import logout from "../assets/logout.svg";
import { Link } from "react-router-dom";

function Sidebarlinks() {
  return (
    <div className="">
      <ul className="gap-y-12 p-6 font-mono  flex flex-col list-none text-xl font-semibold">
        {" "}
        <Link to="/Home">
          {" "}
          <li className="flex gap-x-2 ">
            <img src={dashboard} alt="dash" />
            <p>Dashboard</p>
          </li>
        </Link>
        <Link to="/Project">
          <li className="flex gap-x-2">
            <img src={project} alt="pjt" />
            <p>Projects</p>
          </li>
        </Link>
        <Link to="/Challenge">
          <li className="flex gap-x-2">
            <img src={challenge} alt="chg" />
            <p>Challenges</p>
          </li>
        </Link>
        <Link to="/Feed">
          <li className="flex gap-x-2">
            <img src={explore} alt="exp" />
            <p>Explore</p>
          </li>
        </Link>
        <Link to="/Profile">
          <li className="flex gap-x-2">
            <img src={profile} alt="pfp" />
            <p>Profile</p>
          </li>
        </Link>
        <Link to="/Logout">
          <li className="flex gap-x-2 mt-24">
            <img src={logout} alt="lout" />
            <p>Logout</p>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Sidebarlinks;
