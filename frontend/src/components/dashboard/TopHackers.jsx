import { useState } from "react"

export default function TopHackers() {

    const [usersname, setUsername] = useState('hailey');
    const [about, setAbout] = useState('full stack developer | AI/ML')
    const [totalProjects, setTotalProjects] = useState('47')
    const [totalCollaborations,setTotalCollaborations] =useState('12')
    const [successRate,setsuccessRate]=useState('84%')
    return (
        <div className="w-84 max-h-72 bg-gray-50 border-black rounded-xs shadow-[4px_4px_0px_rgb(0,0,0)] border-2 ">

            <div className="h-1/3 bg-red-200 flex flex-col justify-center items-center p-2 gap-y-2">
                <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" className="w-16 h-16 rounded-full" />
                <h1 className="font-Michroma font-medium">{usersname}</h1>
                <h4 className="text-sm text-gray-500 ">{about}</h4>
            </div>
            <div className="h-auto w- transition-transform scale-90 bg-blue-500 p-2 flex justify-between items-center  ">
                <div className="max-w-32  text-center text-sm h-auto bg-red-300 ">
                    <h1 className="font-Michroma text-xl">{totalProjects}</h1>
                    <h4 className="text-gray-400 font-Ubuntu">projects</h4>
                </div>
                 <div className="max-w-32  bg-red-500 text-center text-sm h-auto ">
                    <h1 className="font-Michroma text-xl">{totalCollaborations}</h1>
                    <h4 className="text-gray-400 font-Ubuntu">collaborations</h4>
                </div>
                <div className="max-w-32 bg-red-500 text-center text-sm h-auto ">
                    <h1 className="font-Michroma text-xl">{successRate}</h1>
                    <h4 className="text-gray-400 font-Ubuntu">success Rate</h4>
                </div>
               
                <div>
                    <button></button>
                    <button></button>
                </div>
            </div>

        </div>
    )

}