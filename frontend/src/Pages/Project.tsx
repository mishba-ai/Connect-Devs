import { useEffect, useState } from "react";
import Paircard from "../components/dashboard/Paircard.tsx";
import api from "../api/axiosInstance.ts";
import type { PairCardProps } from "../types/index.ts";

const project = () => {

  const [projects, setProjects] = useState<PairCardProps[]>([])
  
  const get_project_lists = async () => {
    try {
      const response = await api.get('api/get_projects_lists/')
      console.log(response.data)
      setProjects(response.data)
    } catch (error: any) {
      console.error(error.response.data);
    }
  }

  useEffect(() => {
    get_project_lists()
  }, [])

  return (
    <section className="mt-4">
      <div className="flex items-center h-24 justify-center px-1 mr-24   ">
        <input
          className="py-4 px-6 text-purple text-bas w-full bg-transparent border-2 text-xl border-black rounded-sm hover:shadow-none transition-all hover:translate-x-[3px] shadow-[4px_4px_0px_rgb(0,0,0)] hover:border hover:translate-y-[3px]"
          placeholder="search"
        ></input>
      </div>
      <div className="mt-14 mx- mb-2 flex flex-wrap gap-8">

        {projects?.map(p => {
          if (!p || !p.id) {
            console.warn('Bad item:', p)
            return null
          }
          return <Paircard key={p.id} {...p} />
        })}
      </div>
    </section>
  );
};

export default project;
