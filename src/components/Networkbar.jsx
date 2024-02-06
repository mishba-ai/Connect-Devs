import Neobutton from "./Neobutton";
import Connections from "./Connections";

const Networkbar = () => {
  return (
    <div>
      {" "} 
      <div className="w-72 text-purple font-Encode text-xl font-thin p-6 h-screen bg-[#0f0f0f] absolute right-0">
        <div className="flex justify-around">
          <p className="font-Archivo text-xl font-extrabold ">Connections</p>
          <p className="text-sm mt-1 font-light font-Archivo">ViewAll</p>
        </div>

        <div className=" flex px-2 py-4 text-black mt-8 w-full justify-around bg-[#303030] rounded-md">
          <Neobutton 
            text="Activities"
            style={{
              backgroundColor: "#DEFF0A",
              fontSize: "1rem",
            }}
            hoverStyle={{
              backgroundColor: "#ceff1a",
            }}
          />
          <Neobutton
            text="Online"
            style={{
              backgroundColor: "#DEFF0A",
              fontSize: "1rem",
            }}
            hoverStyle={{
              backgroundColor: "#ceff1a",
            }}
          />
        </div>
        <div>
          <Connections />
        </div>
        <hr className="mt-5 border-highlight"></hr>
      </div>
    </div>
  );
};

export default Networkbar;
