import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
const project = () => {
  return (
    <div className="">
      <section className="flex gap-x-12 h-screen bg-background w-full">
        <Sidebar
          style={{
            // position: "sticky",
            // top: "0px",
            // height: "93vh",
            // borderRadius: "35px",
            // margin: "24px",

          }}
        />
        <div className="flex-col  mt-10">
          <div>
            <Header page="Project" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default project;
