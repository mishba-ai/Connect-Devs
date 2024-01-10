import Headerlanding from "./components/Headerlanding";
import Buttonlanding from "./components/Buttonlanding";
import Featuresdiv from "./components/Featuresdiv";
import communityimg from "./assets/communityimg.png";
import meetl from "./assets/meetl.png";
import livecode2 from "./assets/livecode2.png";
import buildingl2 from "./assets/buildingl2.jfif";
import ppcoder from "./assets/ppcoder.png";
import friend2 from "./assets/friend2.png";
import Footerla from "./components/Footerla";
function App() {
  return (
    <div>
      <Headerlanding />

      <main className="mx-10 mb-4">
        <section className="mt-0 flex justify-between ">
          <div className="h-[390px] w-[800px]   mt-20 p-6">
            <h1 className="text-6xl font-mono font-semibold ">
              Instantly Team Up for{" "}
              <span
                className="stroke-[1px]  text-[#fec89a] font-bold "
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "black",
                  textShadow: "none",
                }}
              >
                {" "} 
                Projects & Hackathons
              </span>
              : Find Your Dream {" "}
              <span
                className="stroke-[1px]  text-[#efebce] font-bold "
                style={{
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "black",
                  textShadow: "none",
                }}
              >
                Collaborators{" "}
              </span>
              with Connect Devs.
            </h1>
            <p className="text-gray-400 font-mono mt-2">
              A platform to connect great talents around the globe,build yours
              now
            </p>

            <Buttonlanding
              text="SIGN UP"
              style={{ marginTop: "18px", position: "relative", left: "18px" }}
              style_button={{ backgroundColor: "#dde5b6" }}
            />
          </div>
          <img src={buildingl2} alt="team" className="w-[640px] h-[660px] " />
        </section>

        <section className="flex justify-between flex-wrap gap-y-12 relative left-2">
          <Featuresdiv
            style={{ backgroundColor: " #f9eae1" }}
            image={communityimg}
            heading={"Built-in-chat"}
            para={
              "Interact directly with team members through one-on-one or group chats within the platform."
            }
            styleimg={{position:'relative', right:'46px', width:'350px'}}
            styletext={{position:'relative', right:'52px'}}

          />
          <Featuresdiv
            style={{ backgroundColor: " #dde5b6" }}
            image={livecode2}
            heading={"coding co-pilot"}
            para={
              'Find the perfect teammates for your project or hackathon, instantly matched based on your skills, needs, and goals.'
            }
          />
          <Featuresdiv
            style={{ backgroundColor: " #efebce" }}
            image={meetl}
            heading={"Video conferencing"}
            para={
              "Hold virtual meetings and presentations seamlessly integrated with the platform."
            }
            styleimg={{position:'relative', right:'52px', width:'340px', height:'270px'}
          }
          styletext={{position:'relative', right:'52px'}}
          />
          <Featuresdiv style={{ backgroundColor: "#fec89a" }} image={ppcoder}
          heading={'Thriving Community'} 
          para={'Connect with like-minded developers. Find inspiration, build your network, and conquer any coding challenge together.'}/>
        </section>

        <section className="mt-10">
          <div>
            <img src={friend2} alt="image" className="w-[600px] h-[600px] transform -scale-x-100"/>
          </div>
        </section>

     
      </main>
      <Footerla />
    </div>
  );
}

export default App;
