import Headerlanding from "./components/Headerlanding";
import Footerla from "./components/Footerla";
import Buttonlanding from "./components/Buttonlanding";
import girl1 from "./assets/girl1.jfif";
import girl2 from "./assets/girl2.jfif";
import girl3 from "./assets/girl3.jfif";
import girl4 from "./assets/girl4.jfif";
import girl5 from "./assets/girl5.jfif";
import boy1 from "./assets/boy1.jfif";
import boy2 from "./assets/boy2.jfif";
import boy3 from "./assets/boy3.jfif";
import boy4 from "./assets/boy4.jfif";
import boy5 from "./assets/boy5.jfif";
import teamicon from "./assets/teamicon.svg";
import ratings from "./assets/ratings.svg";
import forum from "./assets/forumicon.svg";
import tools from "./assets/tools.svg";
import easysearch from "./assets/easysearch.svg";
function App() {
  return (
    <div className="bg-[#191919]  w-full">
      <Headerlanding />

      <main className=" pb-4 overflow-hidden">
        <section className="mt-0 mx-0 px-2 text-white  overflow-hidden h-screen w-full ">
          <div className="flex -mt-44 justify-between">
            <div className="mx-16">
              <div className="w-44 h-[680px] animate-pulse  rotate-[42deg] bg-transparent border-tiltbtn border-2 border-b-0 rounded-t-full"></div>
              <div className="w-44 h-[620px] -mt-80 animate-pulse -rotate-[47deg] bg-transparent border-cyan border-2 border-t-0 rounded-b-full"></div>{" "}
            </div>
            <div className="mx-16">
              <div className="w-44 h-[680px] animate-pulse  -rotate-[42deg] bg-transparent border-cyan border-2 border-b-0 rounded-t-full"></div>
              <div className="w-44 h-[620px] animate-pulse  -mt-80 rotate-[47deg] bg-transparent border-tiltbtn border-2 border-t-0 rounded-b-full"></div>
            </div>
          </div>

          {/* connect icon */}
          <div className="flex justify-between">
            <div className=" bottom-56 absolute flex ">
              <div className="  ">
                <img
                  src={girl1}
                  className="top-48 left-36 relative  rounded-full w-12 h-12"
                ></img>
                <img
                  src={girl2}
                  className="-top-10 left-40 relative  rounded-full w-12 h-12"
                ></img>
                <img
                  src={boy1}
                  className="top-64 left-80 relative  rounded-full w-12 h-12"
                ></img>
                <img
                  src={girl3}
                  className="top-44 left-24 relative  rounded-full w-12 h-12"
                ></img>
                <img
                  src={boy2}
                  className="-top-80 left-80 relative  rounded-full w-12 h-12"
                ></img>
              </div>
              <div className="">
                <img
                  src={girl4}
                  className="top-48 left-[1370px] relative   rounded-full w-12 h-12"
                ></img>
                <img
                  src={boy5}
                  className="-top-16 left-[1300px] relative  rounded-full w-12 h-12"
                ></img>
                <img
                  src={girl5}
                  className="-top-56 left-[1070px] relative  rounded-full w-12 h-12"
                ></img>
                <img
                  src={boy3}
                  className="top-64 left-[1040px] relative  rounded-full w-12 h-12"
                ></img>
                <img
                  src={boy4}
                  className="top-20 left-[1200px] relative  rounded-full w-12 h-12"
                ></img>
              </div>
            </div>
          </div>
          {/* hero heading */}

          <div
            className=" absolute top-[35%] flex flex-col left-[50%] text-center  w-[900px] "
            style={{ transform: "translate(-50%, 0)" }}
          >
            <h1 className="text-4xl font-Ubuntu text-gray-300  font-medium">
              <span className="text-cyan font-Archivo text-5xl">&lt;&gt;</span>
              INSTANTLY TEAM UP FOR{" "}
              <span
                className=" text-green font-medium "
                style={{
                  WebkitTextStrokeWidth: "px",
                  WebkitTextStrokeColor: "",
                  textShadow: "none",
                }}
              >
                {" "}
                PROJECTS & HACKATHONS
              </span>
              :FIND YOUR DREAM{" "}
              <span
                className="text-green font-medium "
                style={{
                  WebkitTextStrokeWidth: "px",
                  WebkitTextStrokeColor: "",
                  textShadow: "none",
                }}
              >
                COLLABORATORS{" "}
              </span>
              WITH CONNECT DEVS.
              <span className="text-cyan font-Archivo  text-5xl">
                &lt;/&gt;
              </span>
            </h1>
            <p className="text-gray-400 font-mono mt-4">
              A platform to connect great talents around the globe,build yours
              now
            </p>
            <div className="ml-4 mt-8 ">
              <Buttonlanding
                text="START HACK!!"
                style_button={{ padding: "10px" }}
              />
            </div>{" "}
          </div>
        </section>
        {/* <section className="relative mt-4 font-medium ">
          <div className="overflow-x-hidden text-cyan  tracking-tighter leading-none whitespace-nowrap flex  text-5xl flex-nowrap relative font-Ubuntu  ">
            <div className="uppercase animate-marquee flex whitespace-nowrap flex-nowrap">
              <span className="block mr-7"> squad up! code up! level up! </span>
              <span className="block mr-7"> squad up! code up! level up! </span>
              <span className="block mr-7"> squad up! code up! level up! </span>
              <span className="block mr-7"> squad up! code up! level up! </span>
            </div>
          </div>
          <div className="overflow-hidden text-yellow   tracking-tighter text-5xl  font-Ubuntu leading-none whitespace-nowrap flex flex-nowrap">
            <div className="uppercase flex animate-marquee2 whitespace-nowrap flex-nowrap">
              <span className="block mr-7">Build Epic shit!</span>
              <span className="block mr-7">Build Epic shit!</span>
              <span className="block mr-7">Build Epic shit!</span>
              <span className="block mr-7">Build Epic shit!</span>
            </div>
          </div>
        </section> */}

        {/*feature section  */}

        <section className="w-screen h-screen px-12 flex mt-10 gap-16">
          <div className="w-[45%]">
            <h1 className="text-[#3f3e3e] text-4xl font-Ubuntu font-semibold mt-4">
              Hackathons? Projects? Get Your Team Onboard & Brighten Things Up!
            </h1>

            <div className="mt-8 ">
              <ul className=" flex-wrap w-full flex gap-x-2 gap-y-3  font-Michroma  text-white">
                <li className="w-[45%] h-44 bg-tiltbtn text-purple p-10 rounded-xl ">
                  <div className="flex">
                    <img src={teamicon} alt="team" className="w-12 h-12" />
                    <h1 className="text-xl">Collaboration</h1>
                  </div>
                  <p className="text-sm font-Ubuntu mt-2">
                    {" "}
                    Find your perfect match!
                  </p>
                </li>
                <li
                  className="w-[45%] h-44 hover:bg-tiltbtn 
                  bg-[#323031] rounded-xl hover:text-purple p-10"
                >
                  <div className="flex">
                    <img
                      src={ratings}
                      alt=""
                      className="hover:text-purple h-12 w-12"
                    />{" "}
                    <h1>Feedback & Ratings</h1>
                  </div>
                  <p className="text-sm font-Ubuntu mt-2">
                    {" "}
                    Get valuable insights and build trust.
                  </p>
                </li>
                <li className="w-[45%] h-44 hover:bg-tiltbtn bg-[#323031] rounded-xl hover:text-purple p-10">
                  <div className="flex">
                    <img src={forum} alt="" className="w-12  h-12" />{" "}
                    <h1>Community Forums</h1>
                  </div>{" "}
                  <p className="text-sm font-Ubuntu mt-2">
                    Engage with the developer community.{" "}
                  </p>
                </li>
                <li className="w-[45%] h-44 hover:bg-tiltbtn bg-[#323031] rounded-xl hover:text-purple p-10">
                  <div className="flex">
                    {" "}
                    <img src={tools} alt="" className="w-12 h-12" />
                    <h1>Collaboration Tools</h1>
                  </div>
                  <p className="text-sm font-Ubuntu mt-2">
                    {" "}
                    Streamline your teamwork.
                  </p>
                </li>
                <li className="w-[92%] h-44 hover:bg-tiltbtn hover:text-purple bg-[#323031] rounded-xl  p-10 ">
                  <div className="flex ">
                    <img src={easysearch} alt="" className="w-12 h-12" />
                  
                    <h1>Easy Search</h1>
                  </div>
                  <p className="text-sm font-Ubuntu mt-2">
                    Find the right partner, fast. Utilize advanced search
                    filters to quickly identify potential collaborators based on
                    skills, experience, and interests
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/2 ">
            <ul className="flex flex-wrap gap-x-10  justify-center items-center ">
              <li
                className="w-72 h-72 border-2 border-green transform-gpu rounded-bl-[50%] rounded-tl-[50%] rounded-br-[50%]  mt-10"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/564x/3a/62/1e/3a621e147ff47f5830acdf06ee4c1b3b.jpg")`,
                }}
              ></li>
              <li
                className="w-72 h-72 border-2 border-green transform-gpu  relative  -top-8 rounded-t-[50%] rounded-tr-[] rounded-br-[50%] rounded-bl-[0%] mt-10"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/564x/d2/70/f5/d270f57ef778b98f5cc129225dcb17a1.jpg")`,
                }}
              ></li>
              <li
                className="w-72 h-72 border-2 border-green transform-gpu  rounded-bl-[50%] rounded-tl-[50%] rounded-br-[50%] mt-10"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/736x/58/a2/f1/58a2f1569332c0754dc50ec230766615.jpg")`,
                }}
              ></li>
              <li
                className="w-72 h-72 border-2 border-green transform-gpu  relative -top-10 rounded-t-[50%] rounded-tr-[] rounded-br-[50%] rounded-bl-[0%] mt-10"
                style={{
                  backgroundImage: `url("https://i.pinimg.com/564x/75/94/d9/7594d994ceca06befc20a4b1695054a5.jpg")`,
                }}
              ></li>
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
