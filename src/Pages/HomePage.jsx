import Sidebar from "../components/Sidebar.jsx";
import Cards from "../components/Cards.jsx";
import Header from "../components/Header.jsx";
import Networkbar from "../components/Networkbar.jsx";
import Paircard from "../components/paircard.jsx";
const HomePage = () => {
  return (
    <div className="">
      <section className="flex gap-x-12 bg-background  w-full">
        <div className="">
          <Sidebar style={{}} />
        </div>
        <div className="flex-col w-[1000px]  mt-10">
          <div className="">
            <Header page="Dashboard" />
          </div>

          <div className="flex flex-col gap-y-4">
            <div className="mt-6 gap-x-8 flex">
              <Cards style={{ width: "350px", height: "350px" }} />
              <Cards style={{ width: "600px", height: "350px" }} />
            </div>

            <section className="flex flex-col gap-y-6 mt-2">
              <div>
                <h1 className="text-3xl text-tiltbtn font-Ubuntu">
                  Pair Request
                </h1>
              </div>
              <div className="flex  gap-x-5 overflow-x-scroll overflow-y-hidden">
             <Paircard/>
              </div>
            </section>

            <section className="mb-2 gap-y-6 flex flex-col mt-2">
              <div>
                <h1 className="text-3xl text-tiltbtn font-Ubuntu">
                  Top Hackers
                </h1>
              </div>

              <div className="flex gap-x-5 overflow-x-scroll overflow-y-hidden">
                <Cards style={{ width: "350px", height: "450px" }} />
                <Cards style={{ width: "350px", height: "450px" }} />
                <Cards style={{ width: "350px", height: "450px" }} />
                <Cards style={{ width: "350px", height: "450px" }} />
              </div>
            </section>
          </div>
        </div>

        <Networkbar />
      </section>
    </div>
  );
};

export default HomePage;
