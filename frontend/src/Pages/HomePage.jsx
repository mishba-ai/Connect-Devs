import Cards from "../components/Cards.jsx";
import Paircard from "../components/dashboard/Paircard.jsx";
import ActiveProjectCard from "../components/dashboard/ActiveProjectCard.jsx";
import Map from "../components/dashboard/Map.jsx";
const HomePage = () => {
  return (
    <div className="flex flex- w-full h-full ">
      {/* Main Content - Scrollable */}
      <div className="w-full  pr-4 ">
        <div className="flex flex-col p-4 w-full">
          <div className="mt-6  flex gap-x-12 ">
            <ActiveProjectCard />
            {/* <Cards style={{ width: "300px", height: "350px" }} /> */}
            <Map />
          </div>

          <section className="flex flex-col gap-y-6 mt-2">
            <div>
              <h1 className="text-3xl mt-3 text-black font-Ubuntu">
                Need teammate{" "}
              </h1>
            </div>
            <div className="flex gap-x-5">
              <Paircard />
            </div>
          </section>

          <section className="mb-2 gap-y-6 flex flex-col mt-2">
            <div>
              <h1 className="text-3xl mt-3 text-black font-Ubuntu">
                Top Hackers
              </h1>
            </div>

            <div className="flex justify-between mb-6">
              <Cards
                style={{
                  width: "300px",
                  height: "300px",
                  background: "#FFD966",
                }}
              />
              <Cards
                style={{
                  width: "300px",
                  height: "300px",
                  background: "#FFD966",
                }}
              />
              <Cards
                style={{
                  width: "300px",
                  height: "300px",
                  background: "#f2a3d8",
                }}
              />
            </div>
          </section>

          {/* Add some extra content to demonstrate scrolling */}
          <div className="h-96 bg-blue-300 mt-4 rounded-lg flex items-center justify-center">
            <p className="text-2xl">Extra content to show scrolling</p>
          </div>
        </div>
      </div>

      {/* Networkbar - Fixed position */}
      {/* <div className="w-72 shrink-0">
        <div className="fixed top-0 right-0 w-72 h-screen">
          <Networkbar />
        </div>
      </div> */}
    </div>
  );
};

export default HomePage;
