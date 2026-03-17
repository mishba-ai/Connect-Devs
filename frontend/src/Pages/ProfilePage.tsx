import { useEffect, useState } from "react";
import React from "react";
import avatar1 from '../assets/avatar1.jpeg'
import api from "../api/axiosInstance";
import { useAuth } from "../hooks/useAuth";
import { PencilIcon, PlusSquareIcon, GithubIcon, LinkedinIcon, XIcon, GlobeIcon } from "lucide-react";
import type { Project } from "../types/project";


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

const ProfilePage = () => {
  const [editProfile, setEditProfile] = useState(false)
  const [addBio, setAddBio] = useState(false)
  const [bio, setBio] = useState('')
  const [addProjects, setAddProjects] = useState<Project[]>([])
  const { user } = useAuth();

  const [skills,setSkills] = useState<string[]>(user?.skills || [])

  const editYourProfile = () => {
    setEditProfile(!editProfile)
  }
  const updateBio = () => {
    if (!addBio) {
      setBio(user?.bio || '')
    }
    setAddBio(!addBio)
  }

  useEffect(() => {
    api.get('api/latest_proj/').then(r => setAddProjects(r.data))
  }, [])

  return (
    <div className="w-full ">
      <section className="mt-10 ">
        <div className="flex justify-between ">
          <div className="flex gap-y-1 flex-col  text-black  mb-4 w-full">
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
              <div className="w-[530px] h-auto p-4 bg-amber-20">{user?.bio}</div>
            )}
            {addBio && (
              <div className="bg-red-300">
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} maxLength={500} id="" className="w-[530px] h-44 border-2 border-black p-2"></textarea>
                <div className="flex justify-end gap-x-4">
                  <button className="px-3 py-1 border-2 border-black hover:shadow-[4px_4px_0px_rgb(0,0,0)] cursor-pointer" onClick={() => setAddBio(!addBio)}>Cancel</button>
                  <button className="px-3 py-1 bg-yellow border-2 border-black shadow-[4px_4px_0px_rgb(0,0,0)] cursor-pointer hover:shadow-none">Save</button>
                </div>
              </div>
            )
            }
            <div className="">
              <div className="w-400px  bg-amber-">
                <h1 className="text-3xl font-Archivo font-semibold">Latest Projects</h1>
                {/* show latest top 4 projects */}
                <ul className="grid grid-cols-2 mt-4">
                  {addProjects?.map((addpr, index) => {
                    return (<li key={index} className="w-64 transition-transform scale-95 h-44 border-gray-500 border-2 relative">
                      <img src={addpr.project_thumbnail} className="absolute w-full h-full bg-cover " alt="" />
                      <h1 className="text-center">{addpr.project_title}</h1>
                    </li>)
                  })}
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
          {/* social links */}
          <div className="gap-y-4 flex flex-col rounded-lg p-4 w-64">
            <div>
              <fieldset className="border border-gray-600 rounded-lg px-3 pb-3">
                <legend className="text-xs text-gray-400 uppercase tracking-widest px-2">
                  GitHub
                </legend>
                <div className="flex items-center gap-2">
                  <GithubIcon size={20} className=" shrink-0" />
                  <input
                    type="text"
                    placeholder="GitHub username"
                    className="bg-transparent text-gray-400 placeholder-gray-500 outline-none w-full text-sm"
                  />
                </div>
              </fieldset>
            </div>

            <div>
              <fieldset className="border px-3 pb-3 rounded-lg border-gray-600">
                <legend className=" text-xs text-gray-400 uppercase tracking-widest px-2">Linkedin</legend>
                <div className="flex gap-2 items-center" >
                  <LinkedinIcon size={20} />
                  <input type="url" placeholder="Linkedin URL" className="bg-transparent text-gray-400 placeholder-gray-500 outline-none w-full text-sm" />
                </div>
              </fieldset>
            </div>

            <div>
              <fieldset className="border px-3 pb-3 rounded-lg border-gray-600">
                <legend className=" text-xs text-gray-400 uppercase tracking-widest px-2">X</legend>
                <div className="flex gap-2 items-center" >
                  <XIcon size={20} />
                  <input type="text" placeholder="X Username" className="bg-transparent text-gray-400 placeholder-gray-500 outline-none w-full text-sm" />
                </div>
              </fieldset>
            </div>

            <div>
              <fieldset className="border px-3 pb-3 rounded-lg border-gray-600">
                <legend className=" text-xs text-gray-400 uppercase tracking-widest px-2">Website</legend>
                <div className="flex gap-2 items-center" >
                  <GlobeIcon size={20} />
                  <input type="text" placeholder="Website URL" className="bg-transparent text-gray-400 placeholder-gray-500 outline-none w-full text-sm" />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
