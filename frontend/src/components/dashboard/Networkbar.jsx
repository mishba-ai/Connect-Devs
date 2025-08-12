import Neobutton from "./Neobutton";
import Connections from "./Connections";
import Map from "./Map";

const Networkbar = () => {
  return (
    <div className="w-72 text-purple font-Encode text-xl font-thin p-6 h-screen bg-[#0f0f0f] right-0 sticky top-0">
      <div className="flex justify-around">
        <p className="font-Archivo text-xl font-extrabold ">Connections</p>
        <p className="text-sm mt-1 font-light font-Archivo">ViewAll</p>
      </div>

      <div className=" flex px-2 py-4 text-black mt-8 w-full justify-around bg-[#303030] rounded-md">
        <Neobutton
          text="Activities"
          style={{
            backgroundColor: "#ceff1a",
            fontSize: "1rem",
          }}
          hoverStyle={{
            backgroundColor: "#ceff1a",
          }}
        />
        <Neobutton
          text="Online"
          style={{
            backgroundColor: "#ceff1a",
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

      <Map /> 
    </div>
  );
};

export default Networkbar;
