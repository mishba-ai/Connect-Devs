import Headerlanding from "./components/landing/Headerlanding.tsx";
import Footerla from "./components/landing/Footerla.tsx";
import Buttonlanding from "./components/landing/Buttonlanding.tsx";
import { useAuth } from "./hooks/useAuth.ts";
import { Navigate } from "react-router-dom";
import collaborate from './assets/collaborate.png'
import feedback from './assets/Feedback.png'
import search from './assets/search.png'
import dev_comm from './assets/dev_comm.png'


function App() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/Home" replace />;

  return (
    <div className="bg-[#121212] w-full leading-none m-0 p-0 flex flex-col ">
      <Headerlanding />
      <main className=" overflow-hidden flex flex-col gap-y-24 p-0 m-0">
        <section className="mt-0 mx-0 px-2 text-white overflow-hidden h-screen w-full">
          <div className="flex -mt-44 justify-between">
            {[
              ["rotate-42 border-lavendar border-b-0 rounded-t-full", "-rotate-47 border-yellow border-t-0 rounded-b-full -mt-80"],
              ["-rotate-42 border-yellow border-b-0 rounded-t-full", "rotate-47 border-lavendar border-t-0 rounded-b-full -mt-80"],
            ].map((pair, i) => (
              <div key={i} className="mx-16">
                <div className={`w-44 h-[680px] animate-pulse bg-transparent border-2 ${pair[0]}`} />
                <div className={`w-44 h-[620px] animate-pulse bg-transparent border-2 ${pair[1]}`} />
              </div>
            ))}
          </div>

          <div
            className="absolute top-[35%] flex flex-col left-[50%] text-center w-[900px]"
            style={{ transform: "translate(-50%, 0)" }}
          >
            <h1 className="text-4xl font-Ubuntu text-gray-300 font-medium">
              <span className="text-highlight font-Archivo text-5xl">&lt;&gt;</span>
              INSTANTLY TEAM UP FOR{" "}
              <span className="text-peach font-medium">PROJECTS & HACKATHONS</span>
              :FIND YOUR DREAM{" "}
              <span className="text-pink font-medium">COLLABORATORS </span>
              WITH CONNECT DEVS.
              <span className="text-highlight font-Archivo text-5xl">&lt;/&gt;</span>
            </h1>
            <p className="text-neutral-400 font-SpaceGrotesk mt-4">
              A platform to connect great talents around the globe, build yours now
            </p>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="w-screen gap-y-24 bg-red- flex flex-col justify-center items-center mt-14 px-30 text-white ">
          <div className="flex justify-around w-full h-screen bg-green- items-center ">
            <img src={collaborate} alt="" />
            <div className="w-[50%] ">

              <h1 className="uppercase text-6xl text-[#C5B4E3] font-Anton whitespace-nowrap">Collaboration</h1>
              <p className="font-SpaceGrotesk text-lg mt-2 text-neutral-400">Find your perfect match!</p>
            </div>
          </div>

          <div className="flex justify-around w-full h-screen bg-green- items-center ">
            <div className="w-[50%]">
              <h1 className="uppercase text-6xl text-[#F9B2A8] font-Anton whitespace-nowrap">Feedback & Ratings</h1>
              <p className="font-SpaceGrotesk text-lg mt-2 text-neutral-400">Get valuable insights and build trust.</p>
            </div>
            <img src={feedback} alt="" className="w-96 " />

          </div>

          <div className="flex justify-around w-full h-screen bg-green- items-center ">
            <img src={dev_comm} alt="" />
            <div className="w-[50%]">
              <h1 className="uppercase text-6xl text-[#F9D371] font-Anton whitespace-nowrap">Community Forums</h1>
              <p className="font-SpaceGrotesk text-lg mt-2 text-neutral-400">Engage with the developer community.</p>
            </div>
          </div>

          <div className="flex justify-around w-full h-screen bg-green- items-center ">
            <div className="w-[50%]">
              <h1 className="uppercase text-6xl text-[#B4E197] font-Anton whitespace-nowrap">easy search</h1>
              <p className="font-SpaceGrotesk text-lg mt-2 text-neutral-400">Find the right partner fast. Use advanced filters to identify collaborators by skills, experience, and interests.</p>
            </div>
            <img src={search} alt="" className="w-96" />
          </div>


        </section>
      </main>

      <Footerla />
    </div>
  );
}

export default App;