import { useState } from "react"
import Map from "./Map.tsx";

export default function TopHackers() {
    const [usersname, setUsername] = useState('hailey');
    const [about, setAbout] = useState('full stack developer | AI/ML')
    const [totalProjects, setTotalProjects] = useState('47')
    const [totalCollaborations, setTotalCollaborations] = useState('12')
    const [successRate, setsuccessRate] = useState('84%')
    return (
        <div className="w-84 max-h-  bg-gray-50 border-black rounded-sm shadow-[4px_4px_0px_rgb(0,0,0)] border-2 overflow-hidden">
            <div className="relative w-full h-44">
                {/* <Map style={'w-full absolute inset-0  h-44 z-10'} /> */}
   <div className="w-full absolute inset-0 h-44 z-10 bg-purple"></div>
                {/* profile  */}
                <div className="h-44 w-full absolute inset-0 flex flex-col justify-center items-center p-2 gap-y-2 bg-gradient-to-b from-white/75 via-white/60 to-white/75 z-20">

                    <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" className="w-16 h-16 object-cover rounded-full" />
                    <h1 className="font-Michroma font-bold">{usersname}</h1>
                    <h4 className="text-sm font-medium text-gray-500">{about}</h4>
                </div>

            </div>


            <div className="h-auto w-auto transition-transform scale-90  p-2 flex justify-between items-center  ">
                <div className="max-w-32  text-center text-sm h-auto  ">
                    <h1 className="font-Michroma text-xl">{totalProjects}</h1>
                    <h4 className="text-gray-400 font-Ubuntu">projects</h4>
                </div>
                <div className="max-w-32   text-center text-sm h-auto ">
                    <h1 className="font-Michroma text-xl">{totalCollaborations}</h1>
                    <h4 className="text-gray-400 font-Ubuntu">collaborations</h4>
                </div>
                <div className="max-w-32  text-center text-sm h-auto ">
                    <h1 className="font-Michroma text-xl">{successRate}</h1>
                    <h4 className="text-gray-400 font-Ubuntu">success Rate</h4>
                </div>

            </div>
            <div className="flex justify-center items-center mb-4">
                <button className="bg-highlight w-64 font-Michroma rounded-  shadow-[4px_4px_0px_rgb(0,0,0)] cursor-pointer text-black p-2 mt-3 "> connect now</button>
            </div>
        </div>
    )
}