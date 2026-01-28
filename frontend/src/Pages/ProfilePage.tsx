import { useState } from "react";
import React from "react";
import avatar1 from '../assets/avatar1.jpeg'
interface teamProps {
  name: string,
  image: string
}
const teamMembers = [
  {
    name: 'john',
    image: avatar1
  },
  {
    add: 'add',
  }
]

const skills = ['ai', 'mech engineering', 'technology']
const ProfilePage = () => {
  const [fullname, setFullname] = useState('')
  const [about, setAbout] = useState('')
  const [location, setLocation] = useState('')
  const [totalProjects, setTotalProjects] = useState('')
  const [totalConnections, setTotalConnection] = useState('') 
  
  return (
    <div className="w-full ">
      <section className="mt-10">
        <div className="flex justify-between">
          <div className="flex gap-y-1 flex-col  text-black  mb-4">
            {/* <div></div> */}
            <img
              src={avatar1}
              className="w-32 h-32 rounded-full shadow-[4px_4px_0px_rgb(0,0,0)]"
              alt="image"
            />
            <div className="flex-1 border ">
              <div className="">
                <div className="flex gap-x-2">
                  <h1 className="text-2xl font-bold">username lastname</h1>
                  <div className="border px-4 flex justify-center items-center rounded-xs border-black ">Developer</div>
                </div>
                <p className="text-gray-700">email@gmail.com</p>
              </div>

            </div>

          </div>

        </div>
        {/*  */}

        <div className=" w-full bg-ed flex justify-between">
          <div className="w- flex bg-yellow- flex-col gap-y-6">
            <div className="w-[530px] h-84 border-black border-2">
              <h1>looking for </h1>
              <div>
                
              </div>
            </div>
            <div className="w-[530px] h-84 border-black border-2"></div>
            <div className="w-[530px] h-84 border-black border-2"></div>
          </div>
          <div className="">
            {/* teammates */}
            <div className="">
              <h1 className="text-2xl ">Teammembers </h1>
              <ul className="flex gap-x-3 mt-2">
                {teamMembers.map((team, index) => {
                  return (<li key={index} className="w-12 h-12 rounded-full ">
                    <img src={team.image} alt="img" className="w-12 h-12 rounded-full" />

                  </li>)

                })}
                <button className="w-12 h-12 rounded-full border flex justify-center items-center">
                  <p className="text-2xl">+</p>

                </button>
              </ul>
            </div>
            <div className="w-400px mt-10 bg-amber-">
              <h1 className="text-3xl font">Projects</h1>
              <ul className="grid grid-cols-2 mt-4">
                <li className="w-64 transition-transform scale-95 h-44 border-black border-2 "></li>
                <li className="w-64 h-44 transition-transform scale-95 border-black border-2 "></li>
                <li className="w-64 h-44 transition-transform scale-95 border-black border-2 "></li>
                <li className="w-64 h-44 transition-transform scale-95 border-black border-2 "></li>


              </ul>
            </div>

            <div>
              <h1 className="text-3xl mt-8">skills</h1>
              <ul className="flex gap-x-2 mt-2">
                {skills.map((skill, index) => {
                  return (
                    <li key={index} className="border border-black px-3 py-1">
                      {skill}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
