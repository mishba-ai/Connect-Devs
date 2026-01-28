
import Paircard from "../components/dashboard/Paircard";
import ProjectCard from "../components/project/ProjectCard";
const project = () => {
  return (
      <section className="mt-10">
          <div className="flex items-center h-24 justify-center px-1 mr-24   ">
            <input
              className="py-4 px-6 text-purple text-bas w-full bg-transparent border-2 text-xl border-black rounded-sm hover:shadow-none transition-all hover:translate-x-[3px] shadow-[4px_4px_0px_rgb(0,0,0)] hover:border hover:translate-y-[3px]"
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
