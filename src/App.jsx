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
function App() {
  return (
    <div className="bg-black  w-full">
      <Headerlanding />

      <main className=" pb-4 overflow-hidden">
        <section className="mt-0 mx-0 px-2 text-white  overflow-hidden h-screen w-full ">
          <div className="flex -mt-44 justify-between">
            <div className="mx-16">
              <div className="w-44 h-[680px] animate-pulse rotate-[42deg] bg-transparent border-tiltbtn border-2 border-b-0 rounded-t-full"></div>
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
            <h1 className="text-6xl font-Ubuntu text-gray-300  font-medium">
              <span className="text-cyan font-PressStart text-5xl">
                &lt;&gt;
              </span>
              INSTANTLY TEAM UP FOR{" "}
              <span
                className="stroke-[1px]  text-green font-semibold "
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "",
                  textShadow: "none",
                }}
              >
                {" "}
                PROJECTS & HACKATHONS
              </span>
              :FIND YOUR DREAM{" "}
              <span
                className="stroke-[1px] text-green font-semibold "
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "",
                  textShadow: "none",
                }}
              >
                COLLABORATORS{" "}
              </span>
              WITH CONNECT DEVS.
              <span className="text-cyan font-PressStart  text-5xl">
                &lt;/&gt;
              </span>
            </h1>
            <p className="text-gray-400 font-mono mt-4">
              A platform to connect great talents around the globe,build yours
              now
            </p>
            <div className="ml-4 mt-8">
              <Buttonlanding
                text="START HACK!!"
                style_button={{ padding: "10px" }}
              />
            </div>{" "}
          </div>
        </section>
        <section className="relative mt-4 font-medium ">
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
        </section>

        <section className="flex flex-col gap-4 mt-4 justify-center  items-center ">
          {" "}
          <div className="flex space-x-7 ">
            <div className="w-72 h-24 bg-transparent rounded-xl text-4xl font-bold font-PressStart text-center justify-center flex items-center text-green">
              <h1>Features</h1>
            </div>
            <div className="w-72 h-28 rounded-xl bg-lime-200"></div>
          </div>
          <div className="flex space-x-4">
            <div className="w-72 h-28 rounded-xl bg-lime-200"></div>
            <div className="w-72 h-28 rounded-xl bg-lime-200"></div>
            <div className="w-72 h-28 rounded-xl bg-lime-200"></div>
          </div>
          <div className="flex space-x-4">
            <div className="w-64 h-56 rounded-xl bg-lime-200"></div>
            <div className="flex flex-col space-y-4">
              <div className="w-72 h-28 rounded-md  bg-purple"></div>
              <div className="w-72 h-28 rounded-md bg-purple ml-16"></div>
            </div>
          </div>
        </section>
      </main>
      <Footerla />
    </div>
  );
}

export default App;
