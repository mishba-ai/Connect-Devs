import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Sidebarlinks from "../components/Sidebarlinks";

const project = () => {
  return (
    <div className="bg-background">
      <Header />
      <div className="flex mt-4 gap-x-16">
        <Sidebar
          links={<Sidebarlinks />}
          style={{ position: "sticky", top: "88px" }}
        />

        <div>
          <h1 className="text-2xl font-Averia font-semibold ">Explore Incredible Projects</h1>
          <p className="text-gray-500 font-semibold mt-4 font-mono text-base ">Empower yourself by finding groundbreaking projects and collaborating with skilled partners.
</p>
<div className="flex flex-col  mt-10">
<input className="p-7 w-[750px]  h-16 bg-primary rounded-3xl " placeholder="search" ></input></div>
        </div>
      </div>
    </div>
  );
};

export default project;
