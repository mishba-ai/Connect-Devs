import { useState } from "react";
import React from "react";
import avatar1 from '../assets/avatar1.jpeg'
import api from "../api/axiosInstance";
import { useAuth } from "../hooks/useAuth";
import { PencilIcon, PlusSquareIcon, PlusCircleIcon } from "lucide-react";

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
  const [editProfile, setEditProfile] = useState(false)
  const [addTeamMembers, setAddTeammembers] = useState(false)
  const [pinnedProjects, setPinnecProjects] = useState(false)
  const [addSkills, setAddSkills] = useState(false)
  const [addBio, setAddBio] = useState(false)
  const { user } = useAuth();

  // when click on edit btn then edit buttons would be visible on bio , teammembers , skills
  const editYourProfile = () => {
    setEditProfile(!editProfile)
  }
  const updateBio = () => {
    setAddBio(!addBio)
  }


  return (
    <div className="w-full ">
      <section className="mt-10 ">
        <div className="flex justify-between ">
          <div className="flex gap-y-1 flex-col  text-black  mb-4 w-full">
            {/* <div></div> */}
            <div className="flex justify-between w-full">
              <img
                src={user?.profile_picture}
                 referrerPolicy="no-referrer"
                className="w-32 h-32 rounded-full shadow-[4px_4px_0px_rgb(0,0,0)]"
                alt="profile"
              />
              <div className="p-2">
                <button className="px-5 py-1 bg-purple shadow-[4px_4px_0px_rgb(0,0,0)] text-white cursor-pointer font-Archivo rounded-xs" onClick={editYourProfile}>
                  {editProfile ? 'view your profile' : 'Edit your Profile'}</button>
              </div>
            </div>
            <div className="flex-1  ">
              <div className="">
                <div className="flex gap-x-12 mt-4 ">
                  <h1 className="text-2xl font-bold">{user?.full_name}</h1>
                  <div className="border px-4  flex justify-center items-center rounded-xs border-black ">Developer</div>
                </div>
                <p className="text-gray-700">{user?.email}</p>

              </div>
            </div>
          </div>
        </div>
        {/*  */}

        <div className=" w-full bg-ed flex justify-between">
          <div className="w- flex bg-yellow- flex-col gap-y-2">
            <div className="flex gap-x-2 align-baseline">
              <h1 className="text-2xl font-semibold font-Archivo">Bio</h1>

              {editProfile &&
                (<button className={``} onClick={updateBio}>
                  <PencilIcon size={20} color="gray" className="hover:stroke-black cursor-pointer" />
                </button>)
              }

            </div>

            {!addBio && (
              <div className="w-[530px] h-64 p-4">{user?.bio}</div>
            )}
            {addBio && (
              <div>
                <textarea name="" maxLength={500} id="" className="w-[530px] h-44 border-2 border-black p-2"></textarea>
                <div className="flex justify-end gap-x-4">
                  <button className="px-3 py-1 border-2 border-black hover:shadow-[4px_4px_0px_rgb(0,0,0)] cursor-pointer" onClick={() => setAddBio(!addBio)}>Cancel</button>
                  <button className="px-3 py-1 bg-yellow border-2 border-black shadow-[4px_4px_0px_rgb(0,0,0)] cursor-pointer hover:shadow-none">Save</button>
                </div>
              </div>
            )
            }

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
                {editProfile && (
                  <button className="w-12 h-12 flex justify-center items-center">
                    <p className="text-2xl"><PlusCircleIcon className="w-12 h-12 hover:stroke-black cursor-pointer stroke-1" color="gray" /></p>
                  </button>
                )}
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

            <div className=" ">
              <h1 className="text-3xl mt-8">Skills</h1>
              <ul className="flex gap-x-2 mt-2 ">
                {skills.map((skill, index) => {
                  return (
                    <li key={index} className="border border-black text-center px-3 h-8">
                      {skill}
                    </li>
                  )
                })}
                {editProfile && (
                  <button className="w-8 h-8 p-0 m-0 flex justify-center items-center">
                    <PlusSquareIcon className="w-8 h-8 hover:stroke-black cursor-pointer stroke-1" color="gray" />
                  </button>
                )}
              </ul>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
