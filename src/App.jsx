import Headerlanding from "./components/Headerlanding";
import Featuresdiv from "./components/Featuresdiv";
import communityimg from "./assets/communityimg.png";
import meetl from "./assets/meetl.png";
import webs from "./assets/webs.png";
import Footerla from "./components/Footerla";
import Buttonlanding from "./components/Buttonlanding";
function App() {
  return (
    <div className="bg-black  w-full">
      <Headerlanding />

      <main className=" pb-4">
        <section className="mt-16 px-2 text-white   h-screen w-full ">
          <div className="flex justify-between">
            <div className=" mt- w-[670px] p-6">
              <h1 className="text-6xl font-RobotoMono text-gray-300  font-semibold">
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
              <p className="text-gray-400 font-mono mt-2">
                A platform to connect great talents around the globe,build yours
                now
              </p>
              <div className="ml-4 mt-4">
                <Buttonlanding
                  text="START HACK!!"
                  style_button={{ padding: "10px" }}
                />
              </div>{" "}
            </div>

            {/* <img src={webs} alt="team" className="w-[640px] h-[660px] " /> */}
          </div>{" "}
        </section>
        <section className="relative -mt-10 text-gray-400 ">
          <div className="overflow-x-hidden tracking-tighter leading-none whitespace-nowrap flex  text-5xl flex-nowrap relative font-Ubuntu font-semibold ">
            <div className="uppercase animate-marquee flex whitespace-nowrap flex-nowrap">
              <span className="block mr-7" > squad up! code up! level up! </span>
              <span className="block mr-7"> squad up! code up! level up! </span>
              <span className="block mr-7"> squad up! code up! level up! </span>
              <span className="block mr-7"> squad up! code up! level up! </span> 
            </div>
          </div>
          <div className="overflow-hidden font-semibold tracking-tighter text-5xl  font-Ubuntu leading-none whitespace-nowrap flex flex-nowrap">
            <div className="uppercase flex animate-marquee2 whitespace-nowrap flex-nowrap">
              <span className="block mr-7">Build Epic shit!</span>
              <span className="block mr-7">Build Epic shit!</span>
              <span className="block mr-7">Build Epic shit!</span>
              <span className="block mr-7">Build Epic shit!</span>
            </div>
          </div>
        </section>
        
        <section className="flex gap-x-5 mt-6  mx-24 pt-4 r bg-[#4ae7ff] justify-center h-screen max-w-[1345px ] rounded-[26px] skew-y-3 text-black wrapper xl:pl-[111px] xl:pr-7 z-3"> 
         
         <h1></h1>

        </section>

        <section className="mt-10">
          {/* <div>
            <img
              src={""}
              alt="image"
              className="w-[600px] h-[600px] transform -scale-x-100"
            />
          </div> */}
        </section>
      </main>
      <Footerla />
    </div>
  );
}

export default App;
