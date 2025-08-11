
import ProjectCard from "../components/ProjectCard";
const project = () => {
  return (
    <div className="">
      <section className="">
        
        <div className="">
         
          <div className="flex items-center justify-center px-10 mr-24  mt-5 ">
            <input
              className="py-4 px-6 text-highlight text-base w-full bg-transparent border rounded-3xl hover:shadow-none transition-all hover:translate-x-[3px] shadow-[4px_4px_0px_rgb(255,255,255)] hover:border hover:translate-y-[3px]"
              placeholder="search"
            ></input>
          </div>

          <div className="mt-14 mx-7 mb-2 flex flex-wrap gap-8">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </section>
    </div>
  );
};

export default project;
