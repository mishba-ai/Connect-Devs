import Sidebar from "../components/Sidebar.jsx";
import Sidebarlinks from "../components/Sidebarlinks.jsx";
import Cards from "../components/Cards.jsx";
import Header from "../components/Header.jsx";
const HomePage = () => {
  return (
    <div>
      <section className="flex gap-x-12 bg-background h-screen w-full">
        <div className="">
          <Sidebar
            links={<Sidebarlinks />}
            style={{
              position: "sticky",
              top: "0px",
              backgroundColor: "",
              height: "93vh",
              borderRadius: "35px",
              margin: "24px",
            }}
          />
        </div>
        <div className="flex-col  mt-10">
          <div>
            <Header page="Dashboard" />
          </div>
          <div className="mt-6 gap-x-8 flex">
            <Cards style={{ width: "600px", height: "350px" }} />
            <Cards style={{ width: "150px", height: "150px" }} />
          </div>
        </div>
        <div className="w-72 h-screen bg-[#0f0f0f] absolute right-0">gvfd</div>
      </section>
    </div>
  );
};

export default HomePage;
