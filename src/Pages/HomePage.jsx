import Sidebar from "../components/Sidebar.jsx";
import Cards from "../components/Cards.jsx";
import Header from "../components/Header.jsx";
import Networkbar from "../components/Networkbar.jsx";
const HomePage = () => {
  return (
    <div>
      <section className="flex gap-x-12 bg-background h-screen w-full">
        <div className="">
          <Sidebar style={{}} />
        </div> 
        <div className="flex-col w-[1000px]  mt-10">
          <div className="">
            <Header page="Dashboard" />
          </div>
          <div className="mt-6 gap-x-8 flex">
            <Cards style={{ width: "600px", height: "350px" }} />
            <Cards style={{ width: "150px", height: "150px" }} />
          </div>
        </div>
        <Networkbar />
      </section>
    </div>
  );
};

export default HomePage;
