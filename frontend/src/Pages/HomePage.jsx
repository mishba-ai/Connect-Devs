import Cards from "../components/Cards.jsx";
import Networkbar from "../components/Networkbar.jsx";
import Paircard from "../components/paircard.jsx";
import ActiveProjectCard from "../components/ActiveProjectCard.jsx";

//https://claude.ai/public/artifacts/a75bf90f-3f64-4b7b-9371-8c63c01f20ee
//https://claude.ai/public/artifacts/2edb3b0e-177c-43b2-bf86-03d61f421db2

const HomePage = () => {
  return (
    <div className="flex flex- w-full h-full ">
      {/* Main Content - Scrollable */}
      <div className="w-full  pr-4 ">
        <div className="flex flex-col p-4 w-full">
          <div className="mt-6 gap-x-2 flex justify-between">
            <ActiveProjectCard />
            <Cards style={{ width: "300px", height: "350px" }} />
          </div>

          <section className="flex flex-col gap-y-6 mt-2">
            <div>
              <h1 className="text-3xl mt-3 text-tiltbtn font-Ubuntu">
                Pair Request
              </h1>
            </div>
            <div className="flex gap-x-5">
              <Paircard />
            </div>
          </section>

          <section className="mb-2 gap-y-6 flex flex-col mt-2">
            <div>
              <h1 className="text-3xl mt-3 text-tiltbtn font-Ubuntu">
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
      <div className="w-72 flex-shrink-0">
        <div className="fixed top-0 right-0 w-72 h-screen">
          <Networkbar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
