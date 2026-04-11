import { useEffect, useState } from "react";
import api from "../api/axiosInstance.ts";
import { useAuth } from "../hooks/useAuth.ts";
import { PencilIcon, PlusSquareIcon, GithubIcon, LinkedinIcon, XIcon, GlobeIcon } from "lucide-react";
import type { Project ,userProfile} from "../types/index.ts";
import TagInput from "../components/TagInput.tsx";
import Socilalinks from "../components/Socilalinks.tsx";

const ProfilePage = () => {
  const [editProfile, setEditProfile] = useState(false)
  const [addBio, setAddBio] = useState(false)
  const [bio, setBio] = useState('')
  const [addProjects, setAddProjects] = useState<Project[]>([])
  const { user } = useAuth(); 
  const [addskills, setAddSkills] = useState(false)
  const [skills, setSkills] = useState<string[]>(user?.profile?.skills || [])
  const [github, setgithub] = useState('')
  const [linkedin, setLinkedin] = useState('')
  const [portfolio, setPortfolio] = useState('')
  const [saved, setSaved] = useState(false)
  const [displayBio, setDisplayBio] = useState(user?.profile?.bio || '')

  const editYourProfile = () => {
    setEditProfile(!editProfile)
  }

  const updateProfile = () => {
    api.patch('/user/update_user_profile', {
      bio, skills, github, linkedin, portfolio
    })
    setDisplayBio(bio)
    setAddBio(false)
    setSaved(true)
    setTimeout(() => {
      setSaved(false)
    }, 3000);
  }
  const toggleBio = () => {

    if (!addBio) {
      setBio(user?.profile?.bio || '')
    }
    setAddBio(prev => !prev)

  }
  const addSkill = () => {
    setAddSkills(!addskills)
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
                (<button className={``} onClick={toggleBio}>
                  <PencilIcon size={20} color="gray" className="hover:stroke-black cursor-pointer" />
                </button>)
              }
            </div>
            {!addBio && (
              <div className="w-[530px] h-auto p-4 bg-amber-20">{displayBio}</div>
            )}
            {addBio && editProfile && (
              <div className="">
                <textarea value={bio} onChange={(e) => setBio(e.target.value)} maxLength={500} id="" className="w-[530px] h-44 border-2 border-black p-2"></textarea>
              </div>
            )
            }
            <div className="">
              <div className="w-400px ">
                <h1 className="text-3xl font-Archivo font-semibold">Latest Projects</h1>
                {/* show latest top 4 projects */}
                <ul className="grid grid-cols-2 mt-4 m-3 gap-x-5">
                  {addProjects?.map((addpr, index) => {
                    return (
                      <li key={index} className=" w-64 transition-transform  scale-105 h-44 border-gray-500 border-2 relative">
                        <img src={addpr.project_thumbnail} className="absolute w-full h-full bg-cover " alt="img" />
                        <h1 className="text-center">{addpr.project_title}</h1>
                      </li>
                    )
                  })}
                </ul>
              </div>
              <div className=" mt-5">
                <h1 className="text-2xl font-semibold font-Archivo">Skills </h1>
                {editProfile && addskills && (
                  <TagInput value={skills} onChange={setSkills} />
                )}
                <div className="flex gap-2">
                  {editProfile && !addskills && (
                    <button onClick={addSkill} >
                      <PlusSquareIcon className="w-8 h-8 hover:stroke-black cursor-pointer stroke-1" color="gray" />
                    </button>
                  )}

                  <ul className="flex gap-x-2 mt-2 flex-wrap">
                    {skills.map((skill, index) => (
                      <li key={index} className="border border-black text-center px-3 h-8">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* social links */}
          <div className="gap-y-4 flex flex-col rounded-lg p-4 w-64 ">
           <Socilalinks/>
          </div>
        </div>
        {
          editProfile && (
            <div className="flex justify-end w-full">
              <button className="border border-black bg-amber-400 px-4 py-1 font-semibold font-Archivo cursor-pointer " onClick={updateProfile} >Save</button>
            </div>
          )
        }
        {saved && <p className="bg-green-400  text-sm absolute top-[50%] left-[50%] p-2 font-Archivo text-white ">Profile updated!</p>}
      </section>
    </div>
  );
};

export default ProfilePage;
