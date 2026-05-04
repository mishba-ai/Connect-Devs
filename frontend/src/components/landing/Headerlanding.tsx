import connecthlogo from "/connecthlogo.png";
import GoogleLoginbtn from "./GoogleLoginbtn.tsx";

export const Headerlanding = () => {
  return (
    <div className="flex justify-between w-full h-16 px-10 py-2 m-0">
      <div className="-mt-2">
        <img src={connecthlogo} alt="logo" className=" h-20" />
      </div>
      <div className="flex gap-x-6 mt-2">
        <GoogleLoginbtn/>
        <h3 className="mt-2 font-semibold text-lg text-white font-PressStart">About</h3>
      </div>
    </div>
  );
};

export default Headerlanding;