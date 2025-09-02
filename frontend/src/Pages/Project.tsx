
import Paircard from "../components/dashboard/Paircard";
import ProjectCard from "../components/project/ProjectCard";
const project = () => {
  return (
      <section className="mt-10">
          <div className="flex items-center h-24 justify-center px-10 mr-24   ">
            <input
              className="py-4 px-6 text-purple text-base w-full bg-transparent border-2 border-black rounded-3xl hover:shadow-none transition-all hover:translate-x-[3px] shadow-[4px_4px_0px_rgb(0,0,0)] hover:border hover:translate-y-[3px]"
              placeholder="search"
            ></input>
          </div>
          <div className="mt-14 mx- mb-2 flex flex-wrap gap-8">
            <Paircard/>
            <Paircard/>
            <Paircard/>
            <Paircard/>
            <Paircard/>
            <Paircard/>
            <Paircard/>
            <Paircard/>
            <Paircard/>

          </div>
      </section>
  );
};

export default project;
