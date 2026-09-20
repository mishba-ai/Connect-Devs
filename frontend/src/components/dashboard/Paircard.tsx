import { DotIcon, Users, Clock, Star, Code, Zap, } from "lucide-react";
import type { Status, StatusConfigTypes, PairCardProps } from "../../types/index.ts"
import { randomColors } from "../../constant.ts";
import { useEffect, useState } from "react";


export default function Paircard({ project_thumbnail, owner, looking_for, project_title, tags, category_tags, skilled_tags, description,id }: PairCardProps) {

  const statusConfig: Record<Status, StatusConfigTypes> = {
    'open': {
      colorClass: "text-[#10B981]",
      bgColorClass: "bg-[#D1FAE5]",
      text: "Open"
    },
    'closed': {
      colorClass: "text-[#EF4444]",
      bgColorClass: "bg-[#FEE2E2]",
      text: "Closed"
    },
    'in_progress': {
      colorClass: "text-[#F59E0B]",
      bgColorClass: "bg-[#FEF3C7]",
      text: "In Progress"
    },
    'on_hold': {
      colorClass: "text-[#6B7280]",
      bgColorClass: "bg-[#F3F4F6]",
      text: "On Hold"
    }
  }
 const [projCardColor] =useState<string>(()=> randomColors(id))
  const currentStatus = statusConfig[(tags ?? 'open') as Status]
  
  return (
    <div className={`w-82 relative   pb-2 h-auto  border-black border-2 shadow-[4px_4px_0px_rgb(0,0,0)] transition-transform scale-90 ease-out duration-75 flex   flex-col`} style={{ backgroundColor: projCardColor }}>
      {/* header section */}
      <div className="p-4 bg-rd ">
        <div className="flex justify-between  items-start mb-3">
          <img src={project_thumbnail}   alt="Project Thumbnail" className="w-12 p-1 h-12 transition-transform scale-105 rounded-sm  border-2 border-black border-dashed"   onError={(e) => console.log("Thumbnail failed:", project_thumbnail)}/>
          {/* status */}
          {/* <div className={`flex items-center font-Ubuntu rounded-xs px-1  justify-center border-black py- text-xs font-medium border ${currentStatus?.colorClass} ${currentStatus?.bgColorClass}`}>
            <div className="bg-amber-"> <DotIcon size={12} /></div>
            <span className={` `}>{tags}</span>
          </div> */}
          <ul className="flex gap-x-1">
            {(category_tags ?? []).map((ctg) => (
              <li key={ctg.id} className="px-3 py-1 flex gap-x-1 bg-purple-100 text-purple-800 text-xs font-bold border border-black rounded">{ctg.name}</li>
            ))}
          </ul>
        </div>

        {/* category */}
        <div className=" gap-1 mb-2">
          <h1 className="font-SpaceGrotesk text-xl font-semibold">{project_title}</h1>
          
        </div>

        <div className="flex gap-x-6 ">
         
          <div className="">
            <h1 className="font-Michroma font-semibold">{owner}</h1>
            {/* <h4 className="text-sm text-gray-700">{roles}</h4> */}
            <p className="text-sm text-gray-600 font-Lexend">{description}</p>
          </div>

        </div>
      </div>

      {/* skills required */}
      <div className="mt-4 font-Lexend flex justify-center">
        <div className="p- text-black w-64 h-40"
           >
          <h1 className="">Skills Required</h1>
          <ul className="flex gap-1 mt-1 ">
            {(skilled_tags ?? []).map((skill) => (
              <li className="border-gray-600 text-xs text-gray-500 px-1 border rounded-xs" key={skill.id}>{skill.name}</li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-x-2  mt-2">
            <Users size={16} />
            <div className="">Looking For </div>
          </div>
          <ul className="flex flex-wrap gap-1">
            {(looking_for ?? []).map((role) => (
              <li className="border-gray-600 text-xs text-gray-500 px-1 border rounded-" key={role.id}>{role.name}</li>
            ))}
          </ul>
        </div>
      </div>


      {/* footer */}
<div className="flex justify-center items-center mt-auto pt-">
  <button className="bg-black p-1 text-white text-xl w-64 font-Michroma">
    Join Project
  </button>
</div>

    </div>
  );
}
