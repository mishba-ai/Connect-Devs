
import connectdevslogo from "../assets/connectdevslogo.png";
import Buttonlanding from "./Buttonlanding";
const Headerlanding = () => {
  return (
    <div className="flex justify-between w-full h-16 px-10 py-2 pt-2">
      <div>
        <img src={connectdevslogo} alt="logo" className="w-28 h-16" />
      </div>
      <div className="flex gap-x-6 mt-2">
        <h3 className="mt-2 font-bold text-xl">About</h3>
        <Buttonlanding text="GET STARTED" style_button={{backgroundColor:"#dde5b6"}}/>
      </div>
    </div>
  );
};

export default Headerlanding;
