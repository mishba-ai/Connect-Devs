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

            <img src={webs} alt="team" className="w-[640px] h-[660px] " />
          </div>{" "}
          <div className="overflow-x-hidden -pt-24 text-4xl flex relative font-PressStart  text-white">
            <div className="animate-marquee whitespace-nowrap">
              <span className=" mx-2 ">SQUAD UP!</span>
              <span className=" mx-2 ">CODE UP!</span>
              <span className=" mx-2">LEVEL UP!</span>
              <span className=" mx-">Build Something Epic !</span>
              <span className="mx-2">Click, Connect, Create! </span>
            </div>

            <div className="animate-marquee2 whitespace-nowrap">
              <span className=" mx-2 ">SQUAD UP!</span>
              <span className=" mx-2 ">CODE UP!</span>
              <span className=" mx-2">LEVEL UP!</span>
              <span className=" mx-">Build Something Epic !</span>
              <span className="mx-2">Click, Connect, Create! </span>
            </div>
          </div>
        </section>

        <section className="flex gap-x-5 mt-10  justify-center  flex-wrap">
          <Featuresdiv
            style={{ backgroundColor: "#FFB2EF" }}
            image={communityimg}
            // heading={"Built-in-chat"}
            // para={
            //   "Interact directly with team members through one-on-one or group chats within the platform."
            // }
            styleimg={{ position: "relative", right: "46px", width: "350px" }}
            styletext={{ position: "relative", right: "52px" }}
          />
          <Featuresdiv
            style={{ backgroundColor: " #c5e063" }}
            image={""}
            // heading={"coding co-pilot"}
            // para={
            //   "Find the perfect teammates for your project or hackathon, instantly matched based on your skills, needs, and goals."
            // }
          />
          <Featuresdiv
            style={{ backgroundColor: "#ffb703" }}
            image={meetl}
            // heading={"Video conferencing"}
            // para={
            //   "Hold virtual meetings and presentations seamlessly integrated with the platform."
            // }
            styleimg={{
              position: "relative",
              right: "52px",
              width: "340px",
              height: "270px",
            }}
            styletext={{ position: "relative", right: "52px" }}
          />
          <Featuresdiv
            style={{ backgroundColor: "#6637ee" }}
            image={""}
            // heading={"Thriving Community"}
            // para={
            //   "Connect with like-minded developers. Find inspiration, build your network, and conquer any coding challenge together."
            // }
          />
        </section>

        <section className="mt-10">
          <div>
            <img
              src={""}
              alt="image"
              className="w-[600px] h-[600px] transform -scale-x-100"
            />
          </div>
        </section>
      </main>
      <Footerla />
    </div>
  );
}

export default App;
