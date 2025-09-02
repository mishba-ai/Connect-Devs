// import connectlogo from "../assets/connectlogo.png";
import connecthlogo from "../../assets/connecthlogo.png";
import Buttonlanding from "./Buttonlanding";
// import cdlogo from "../assets/cdlogo.png";

const Headerlanding = () => {
  return (
    <div className="flex justify-between w-full h-16 px-10 py-2">
      <div className="-mt-2">
        <img src={connecthlogo} alt="logo" className=" h-20" />
      </div>
      <div className="flex gap-x-6 mt-2">
        <h3 className="mt-2 font-semibold text-lg text-white font-PressStart">About</h3>
        <Buttonlanding
          text="SIGN UP"
          style_button={{ width: "135px", rotate: "0px" }}
        />
      </div>
    </div>
  );
};

export default Headerlanding;
