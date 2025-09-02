import Cards from "../components/Cards.js";
import Paircard from "../components/dashboard/Paircard.js";
import ProjectSpotlight from "../components/dashboard/ProjectSpotlight.js";
import Map from "../components/dashboard/Map.js";
import TopHackers from "../components/dashboard/TopHackers.js";

const HomePage = () => {
  return (
    <div className="min-h-screen ">
      {/* Main Content Container */}
      <div className="">

        {/* Main Grid - Active Project & Map */}
        <div className="flex justify-between mt-10 gap-4  mb-16">
          <div className="space-y-6">
            <ProjectSpotlight />
          </div>
          <div className="">
            <Map style={'w-[550px] h-84 '} mapStyle={'black-primary-map'}/>
          </div>
        </div>

        {/* Project Discovery Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">
              Discover Projects
            </h2>
            <p className="text-gray-600 font-light">
              Find the perfect hackathon project to showcase your skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Paircard />
            <Paircard />
            <Paircard />
            {/* Add more project cards as needed */}
          </div>
        </section>

        {/* Top Contributors Section */}
        <section className="mb-16">
          <div className="mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-3 tracking-tight">
Top Hackers            </h2>
            <p className="text-gray-600 font-light">
              Connect with talented developers in the community
            </p>
          </div>

          <div className="gap-8">
            <div className=" flex  justify-between">
            <TopHackers/>
            <TopHackers/>
            <TopHackers/>

            </div>
           
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="text-center py-12 bg-black rounded-xs border border-gray-100 shadow-sm">
          <h3 className="text-xl font-Lexend text-white mb-4 tracking-tight">
            Ready to Start Building?
          </h3>
          <p className="text-white font-Michroma mb-6 max-w-md mx-auto">
            Join thousands of developers creating amazing projects together
          </p>
          <button className="px-8 py-3 bg-purple shadow-[4px_4px_0px_rgb(255,255,255)] text-white font-medium rounded-xs">
            Explore Projects
          </button>
        </section>

      </div>
    </div>
  );
};

export default HomePage;