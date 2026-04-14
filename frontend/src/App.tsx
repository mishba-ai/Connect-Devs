import Headerlanding from "./components/landing/Headerlanding.tsx";
import Footerla from "./components/landing/Footerla.tsx";
import Buttonlanding from "./components/landing/Buttonlanding.tsx";
import { FormInput, MessageCircleHeart, UserRoundSearch, UserCog, Lightbulb } from "lucide-react";
import { useAuth } from "./hooks/useAuth.ts";
import { Navigate } from "react-router-dom";

const LEFT_AVATARS = [
  { src: "/girl1.png", cls: "top-48 left-36" },
  { src: "/girl2.png", cls: "-top-10 left-40" },
  { src: "/boy1.png",  cls: "top-64 left-80" },
  { src: "/girl3.png", cls: "top-44 left-24" },
  { src: "/boy2.png",  cls: "-top-80 left-80" },
];

const RIGHT_AVATARS = [
  { src: "/girl4.png", cls: "top-48 left-[1370px]" },
  { src: "/boy5.png",  cls: "-top-16 left-[1300px]" },
  { src: "/girl5.png", cls: "-top-56 left-[1070px]" },
  { src: "/boy3.png",  cls: "top-64 left-[1040px]" },
  { src: "/boy4.png",  cls: "top-20 left-[1200px]" },
];

const FEATURES = [
  { icon: <Lightbulb />,         title: "Collaboration",       desc: "Find your perfect match!",                                                                                         wide: false },
  { icon: <MessageCircleHeart />, title: "Feedback & Ratings",  desc: "Get valuable insights and build trust.",                                                                           wide: false },
  { icon: <FormInput />,          title: "Community Forums",    desc: "Engage with the developer community.",                                                                             wide: false },
  { icon: <UserCog />,            title: "Collaboration Tools", desc: "Streamline your teamwork.",                                                                                        wide: false },
  { icon: <UserRoundSearch />,    title: "Easy Search",         desc: "Find the right partner fast. Use advanced filters to identify collaborators by skills, experience, and interests.", wide: true  },
];

const SHOWCASE_IMAGES = [
  { url: "/avt1.png", cls: "rounded-bl-[50%] rounded-tl-[50%] rounded-br-[50%] mt-10" },
  { url: "/avt2.png", cls: "relative -top-8 rounded-t-[50%] rounded-br-[50%] mt-10" },
  { url: "/avt3.png", cls: "rounded-bl-[50%] rounded-tl-[50%] rounded-br-[50%] mt-10" },
  { url: "/avt4.png", cls: "relative -top-10 rounded-t-[50%] rounded-br-[50%] mt-10" },
];

const Avatar = ({ src, cls }: { src: string; cls: string }) => (
  <img src={src} className={`relative rounded-full w-12 h-12 ${cls}`} alt="" />
);

const FeatureCard = ({ icon, title, desc, wide }: typeof FEATURES[0]) => (
  <li className={`${wide ? "w-[92%]" : "w-[45%]"} h-44 hover:bg-tiltbtn bg-[#323031] first:bg-tiltbtn hover:text-purple first:text-purple rounded-xl p-10`}>
    <div className="flex gap-1">{icon}<h1 className={wide ? "" : "text-xl"}>{title}</h1></div>
    <p className="text-sm font-Ubuntu mt-2">{desc}</p>
  </li>
);

function App() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/Home" replace />;

  return (
    <div className="bg-[#191919] w-full">
      <Headerlanding />

      <main className="pb-4 overflow-hidden">
        <section className="mt-0 mx-0 px-2 text-white overflow-hidden h-screen w-full">

          <div className="flex -mt-44 justify-between">
            {[
              ["rotate-42 border-tiltbtn border-b-0 rounded-t-full", "-rotate-47 border-cyan border-t-0 rounded-b-full -mt-80"],
              ["-rotate-42 border-cyan border-b-0 rounded-t-full", "rotate-47 border-tiltbtn border-t-0 rounded-b-full -mt-80"],
            ].map((pair, i) => (
              <div key={i} className="mx-16">
                <div className={`w-44 h-[680px] animate-pulse bg-transparent border-2 ${pair[0]}`} />
                <div className={`w-44 h-[620px] animate-pulse bg-transparent border-2 ${pair[1]}`} />
              </div>
            ))}
          </div>

          {/* Avatars */}
          <div className="flex justify-between">
            <div className="bottom-56 absolute flex">
              <div>{LEFT_AVATARS.map(a => <Avatar key={a.src} {...a} />)}</div>
              <div>{RIGHT_AVATARS.map(a => <Avatar key={a.src} {...a} />)}</div>
            </div>
          </div>

          <div
            className="absolute top-[35%] flex flex-col left-[50%] text-center w-[900px]"
            style={{ transform: "translate(-50%, 0)" }}
          >
            <h1 className="text-4xl font-Ubuntu text-gray-300 font-medium">
              <span className="text-cyan font-Archivo text-5xl">&lt;&gt;</span>
              INSTANTLY TEAM UP FOR{" "}
              <span className="text-green font-medium">PROJECTS & HACKATHONS</span>
              :FIND YOUR DREAM{" "}
              <span className="text-green font-medium">COLLABORATORS </span>
              WITH CONNECT DEVS.
              <span className="text-cyan font-Archivo text-5xl">&lt;/&gt;</span>
            </h1>
            <p className="text-gray-400 font-mono mt-4">
              A platform to connect great talents around the globe, build yours now
            </p>
            <div className="ml-4 mt-8">
              <Buttonlanding text="START HACK!!" style_button={{ padding: "10px" }} />
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section className="w-screen h-screen px-12 flex mt-10 gap-16 ">
          <div className="w-[45%]">
            <h1 className="text-[#a3e6bd] text-4xl font-Ubuntu font-semibold mt-4">
              Hackathons? Projects? Get Your Team Onboard & Brighten Things Up!
            </h1>
            <ul className="mt-8 flex-wrap w-full flex gap-x-2 gap-y-3 font-Michroma text-white ">
              {FEATURES.map(f => <FeatureCard key={f.title} {...f} />)}
            </ul>
          </div>

          <div className="w-1/2">
            <ul className="flex flex-wrap gap-x-10 justify-center items-center">
              {SHOWCASE_IMAGES.map(({ url, cls }) => (
                <li
                  key={url}
                  className={`w-72 h-72 border-4 overflow-hidden border-green transform-gpu bg-cover  ${cls}`}
                >
                  <img src={url} alt="" className={`object-cover w-full h-full `} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        <hr className="border-green mx-28 mt-20" />
      </main>

      <Footerla />
    </div>
  );
}

export default App;