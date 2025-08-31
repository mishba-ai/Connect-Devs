import { DotIcon, Users, Clock, Star, Code, Zap, } from "lucide-react";
import { useState } from "react";

//paircard looking for collab
export default function Paircard() {
  //  status
  const [status, setStatus] = useState('open');
  const [projectTypes, setProjectTypes] = useState('hackathon project')
  const statusConfig = {
    open: {
      colorClass: "text-[#10B981]",
      bgColorClass: "bg-[#D1FAE5]",
      text: "Open"
    },
    urgent: {
      colorClass: "text-[#EF4444]",
      bgColorClass: "bg-[#FEE2E2]",
      text: "Urgent"
    },
    "in progress": {
      colorClass: "text-[#F59E0B]",
      bgColorClass: "bg-[#FEF3C7]",
      text: "In Progress"
    }
  }
  const difficultyConfig = {
    Beginner: { icon: "🌱", color: "#10B981" },
    Intermediate: { icon: "⚡", color: "#F59E0B" },
    Advanced: { icon: "🔥", color: "#EF4444" }
  };
  const projectType = ['hackathon project', 'side project'];

  const currentStatus = statusConfig[status.toLowerCase()];
  const currentProject = projectType[projectTypes.toLowerCase()]


  //type of project -hackathon or side project
  // skills required
  const [skills, setSkills] = useState(['react', 'tailwind'])
  //___if prjoect is particpating in hackathon___
  // which hackathon that project is participating in 
  const hackathon = []
  // which role the project owner is looking for
  const name = useState('name lastname')
  const [roles, setRoles] = useState(['frontend Developer', 'ml engineer'])
  //how many already memebered join and how many need 
  const totalteam = []
  //___ if project is side project
  //___open source or not?
  //___paid or unpaid__
  //role and also same how many working and all 
  // ___
  // description
  return (
    <div className="w-96 pb-4 h-auto bg-[#6637ee bg-white border opacity-75 borderblack- rounded-[0.5rem] hover:bord  hover:shadow-[4px_4px_0px_rgb(0,0,0)] transition-all ease-out duration-75 flex  flex-col ">

      {/* header section */}
      <div className="p-6  border-b-2 border-black bg-rd rounded-[0.5rem]">
        <div className="flex justify-between items-start mb-3">
          <h1>Ai code review assistant</h1>
          {/* status */}
          <div className={`flex items-center font-Ubuntu rounded-xs px-1  justify-center border-black py- text-xs font-medium border ${currentStatus.colorClass} ${currentStatus.bgColorClass}`}>
            <div className="bg-amber-"> <DotIcon size={12} /></div>
            <span className={` `}>{currentStatus.text}</span>
          </div>
        </div>

        {/* project type */}
        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold border border-black rounded">
            {currentProject}
          </span>
          {projectType === "hackathon project" && hackathon && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold border border-black rounded">
              {hackathon}
            </span>
          )}
        </div>
        <div className="flex bg-yellow-0 gap-x-6 ">
          <img src="https://i.pinimg.com/736x/6c/e5/24/6ce524664d1e7e37e14b4d7ff63d1796.jpg" alt="img" className="w-20 p-1 h-20 transition-transform scale-105 rounded-sm  border-2 border-black border-dashed" />
          <div className="">
            <h1 className="font-Michroma font-semibold">{name}</h1>
            {/* <h4 className="text-sm text-gray-700">{roles}</h4> */}
            <p className="text-sm text-gray-600">lorem ipsum ipsum here fdis ef ipsumipsumipsumipsumipsumipsum</p>
          </div>

        </div>
      </div>

      {/* skills required */}
      <div className="mt-4 flex justify-center">
        <div className="  p-4 text-black  bg-[#b2e2bb bg-white border-[0.2vmin] border-black rounded-[1vmin] w-84 h-40"
          style={{
            boxShadow: '0.6vmin 0.6vmin #f8e0fa, 0.2vmin 0.2vmin #000, 0.5vmin 0.5vmin #000, 1vmin 0.65vmin #000'
          }} >
          <h1>Skills Required</h1>
          <ul className="flex gap-1 mt-1 ">
            {skills.map((skill, index) => (
              <li className="border-gray-600 text-xs text-gray-500 px-1 border rounded-xs" key={index}>{skill}</li>
            ))}
          </ul>
          <div className="flex gap-x-2  mt-2">
            <Users size={16} />
            <div className="">Looking For </div>
          </div>
          <ul className="flex gap-1">
            {roles.map((role, index) => (
              <li className="border-gray-600 text-xs text-gray-500 px-1 border rounded-xs" key={index}>{role}</li>
            ))}
          </ul>
        </div>
      </div>


      {/* footer */}
      <div className="mt-4 flex justify-center items-center ">
        <button className="bg-black p-2  text-highlight w-64 font-Michroma ">Join Project</button>
      </div>

    </div>
  );
}
