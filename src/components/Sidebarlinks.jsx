// import Sidebar from './Sidebar'
import dashboard from "../assets/dashboard.svg";
import project from "../assets/project.svg";
import challenge from "../assets/challenge.svg";
import profile from "../assets/profile.svg";
import explore from "../assets/explore.svg";
import logout from "../assets/logout.svg";

function Sidebarlinks() {
  return (
    <div >
      <ul className="gap-y-12 p-6 font-mono  flex flex-col list-none text-xl font-semibold">
        {" "} 
        <li className="flex gap-x-2">
          <img src={dashboard} alt="dash" />
          <p>Dashboard</p>
        </li>
        <li className="flex gap-x-2">
          <img src={project} alt="pjt" />
          <p>Project</p>
        </li>
        <li className="flex gap-x-2">
          <img src={challenge} alt="chg" />
          <p>Challenge</p>
        </li>
        <li className="flex gap-x-2">
          <img src={explore} alt="exp" />
          <p>Explore</p>
        </li>
        <li className="flex gap-x-2">
          <img src={profile} alt="pfp" />
          <p>Profile</p>
        </li>
        <li className="flex gap-x-2 mt-24">
          <img src={logout} alt="lout" />
          <p>Logout</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebarlinks;
