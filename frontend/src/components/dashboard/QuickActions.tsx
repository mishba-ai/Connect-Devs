import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import cp from "../../assets/cp.png"
import { Link } from 'react-router-dom'

export default function QuickActions() {
    const Quickbtn = [
        {
            name: "create a project",
            link: ""
        },
        {
            name: "quick",
            link: ""
        },
        {
            name: "create a project",
            link: ""
        },
    ]
    return (
        <div className="w-[450px] h-90 border border-black flex rounded-[0.5rem] shadow-[0px_4px_0px_rgb(0,0,0)] transition-all ease-out duration-75 bg-transparent">
            <div className=" flex p-4 justify-between w-full h-full  rounded-[0.5rem] ">
                <img src={cp} alt="img" className="w-48 h-72 " />
                <div className='flex flex-col '> 
                    {Quickbtn.map((qb, index) => (
                        <button key={index} className="rounded-[0.5rem] p-2 flex justify-between items-center  bg-red-50 border shadow-[4px_4px_0px_rgb(0,0,0)] transition-all ease-out duration-75 border-black mt-4 w-54 h-14 ">
                            <p className='text-lg'>{qb.name}</p>
                            <Link to={qb.link}><ArrowUpRight /></Link>
                        </button>
                ))}                  
                  </div>

            </div>
        </div>
        )
}
