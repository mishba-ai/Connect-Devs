import { DotIcon, Users, Clock, Star, Code, Zap, } from "lucide-react";
import type { Status, StatusConfigTypes, PairCardProps } from "../../types/index.ts"

export default function Paircard({ project_thumbnail, owner, looking_for, project_title, tags, category_tags, skilled_tags, description }: PairCardProps) {

  const statusConfig: Record<Status, StatusConfigTypes> = {
    'Open': {
      colorClass: "text-[#10B981]",
      bgColorClass: "bg-[#D1FAE5]",
      text: "Open"
    },
    'closed': {
      colorClass: "text-[#EF4444]",
      bgColorClass: "bg-[#FEE2E2]",
      text: "Closed"
    },
    'In progress': {
      colorClass: "text-[#F59E0B]",
      bgColorClass: "bg-[#FEF3C7]",
      text: "In Progress"
    },
    'On Hold': {
      colorClass: "text-[#6B7280]",
      bgColorClass: "bg-[#F3F4F6]",
      text: "On Hold"
    }
  }

  const currentStatus = statusConfig[(tags ?? 'Open') as Status]

  return (
    <div className="w-96 pb-4 h-auto bg-[#6637ee bg-transparent border-black border opacity-75 borderblack- rounded-[0.5rem] hover:bord  hover:shadow-[4px_4px_0px_rgb(0,0,0)] transition-all ease-out duration-75 flex  flex-col ">
      {/* header section */}
      <div className="p-6  border-b-2 border-black bg-rd rounded-[0.5rem]">
        <div className="flex justify-between items-start mb-3">
          <h1>{project_title}</h1>
          {/* status */}
          <div className={`flex items-center font-Ubuntu rounded-xs px-1  justify-center border-black py- text-xs font-medium border ${currentStatus?.colorClass} ${currentStatus?.bgColorClass}`}>
            <div className="bg-amber-"> <DotIcon size={12} /></div>
            <span className={` `}>{tags}</span>
          </div>
        </div>

        {/* category */}
        <div className="flex gap-2 mb-3">
          <ul className="flex gap-x-1">
            {(category_tags ?? []).map((ctg) => (
              <li key={ctg.id} className="px-3 py-1 flex gap-x-1 bg-purple-100 text-purple-800 text-xs font-bold border border-black rounded">{ctg.name}</li>
            ))}
          </ul>

        </div>
        <div className="flex bg-yellow-0 gap-x-6 ">
          <img src={project_thumbnail} alt="img" className="w-20 p-1 h-20 transition-transform scale-105 rounded-sm  border-2 border-black border-dashed" />
          <div className="">
            <h1 className="font-Michroma font-semibold">{owner}</h1>
            {/* <h4 className="text-sm text-gray-700">{roles}</h4> */}
            <p className="text-sm text-gray-600">{description}</p>
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
            {(skilled_tags ?? []).map((skill) => (
              <li className="border-gray-600 text-xs text-gray-500 px-1 border rounded-xs" key={skill.id}>{skill.name}</li>
            ))}
          </ul>
          <div className="flex gap-x-2  mt-2">
            <Users size={16} />
            <div className="">Looking For </div>
          </div>
          <ul className="flex gap-1">
            {(looking_for ?? []).map((role) => (
              <li className="border-gray-600 text-xs text-gray-500 px-1 border rounded-xs" key={role.id}>{role.name}</li>
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
