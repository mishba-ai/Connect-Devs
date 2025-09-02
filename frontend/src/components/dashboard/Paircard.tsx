import { DotIcon, Users, Clock, Star, Code, Zap, } from "lucide-react";
import { useState } from "react";
import project from "../../Pages/Project";

//  status
type Status = 'open' | 'urgent' | 'in progress'
type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced';
interface StatusConfigTypes {
  colorClass: string;
  bgColorClass: string;
  text: string;
}
interface DifficultyConfig {
  icon: string;
  color: string;
}
type ProjectType = 'hackathon project' | 'side project';

interface PairCardProps {
  projectTitle?: string;
  ownerName?: string;
  ownerImage?: string;
  description?: string;
  hackathonName?: string;
  initialStatus?: Status;
  initialProjectType?: ProjectType;
  initialSkills?: string[];
  initialRoles?: string[];
}
//paircard looking for collab
export default function Paircard({
  projectTitle = "AI Code Review Assistant",
  ownerName = "John Doe",
  ownerImage = "https://i.pinimg.com/736x/6c/e5/24/6ce524664d1e7e37e14b4d7ff63d1796.jpg",
  description = "Building an intelligent code review tool using machine learning to help developers write better code.",
  hackathonName = "TechHacks 2024",
  initialStatus = 'open',
  initialProjectType = 'hackathon project',
  initialSkills = ['React', 'TypeScript', 'TailwindCSS'],
  initialRoles = ['Frontend Developer', 'ML Engineer'] }: PairCardProps) {

  const [status, setStatus] = useState<Status>(initialStatus);
  const [projectTypes, setProjectTypes] = useState<ProjectType>('hackathon project')
  const [skills, setSkills] = useState<string[]>(initialSkills)
  const [roles, setRoles] = useState<string[]>(initialRoles);


  const statusConfig: Record<Status, StatusConfigTypes> = {
    'open': {
      colorClass: "text-[#10B981]",
      bgColorClass: "bg-[#D1FAE5]",
      text: "Open"
    },
    'urgent': {
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

  const difficultyConfig: Record<Difficulty, DifficultyConfig> = {
    Beginner: { icon: "🌱", color: "#10B981" },
    Intermediate: { icon: "⚡", color: "#F59E0B" },
    Advanced: { icon: "🔥", color: "#EF4444" }
  };
  const currentStatus = statusConfig[status];
  

  return (
    <div className="w-96 pb-4 h-auto bg-[#6637ee bg-white border opacity-75 borderblack- rounded-[0.5rem] hover:bord  hover:shadow-[4px_4px_0px_rgb(0,0,0)] transition-all ease-out duration-75 flex  flex-col ">

      {/* header section */}
      <div className="p-6  border-b-2 border-black bg-rd rounded-[0.5rem]">
        <div className="flex justify-between items-start mb-3">
          <h1>{projectTitle}</h1>
          {/* status */}
          <div className={`flex items-center font-Ubuntu rounded-xs px-1  justify-center border-black py- text-xs font-medium border ${currentStatus.colorClass} ${currentStatus.bgColorClass}`}>
            <div className="bg-amber-"> <DotIcon size={12} /></div>
            <span className={` `}>{currentStatus.text}</span>
          </div>
        </div>

        {/* project type */}
        <div className="flex gap-2 mb-3">
          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold border border-black rounded">
            {initialProjectType}
          </span>
          {projectTypes === "hackathon project" && hackathonName && (
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-bold border border-black rounded">
              {hackathonName}
            </span>
          )}
        </div>
        <div className="flex bg-yellow-0 gap-x-6 ">
          <img src="https://i.pinimg.com/736x/6c/e5/24/6ce524664d1e7e37e14b4d7ff63d1796.jpg" alt="img" className="w-20 p-1 h-20 transition-transform scale-105 rounded-sm  border-2 border-black border-dashed" />
          <div className="">
            <h1 className="font-Michroma font-semibold">{ownerName}</h1>
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
