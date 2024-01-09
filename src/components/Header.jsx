import React from "react";
import userplus from "../assets/userplus.svg";
import expandarrow from "../assets/expandarrow.svg";
const Header = () => {
  return (
    <div className="py-1 px-4 flex justify-between bg-[#EEF3F0]">
      <div>
        <img
          src="../../connectdevsicon.png"
          alt="image"
          className="h-16 w-20"
        />
      </div>
      <div className="flex gap-x-10 ">

        <button className="rounded-full">
          <img src={userplus} alt="image" className="h-8 w-8 bg-transparent rounded-full p-2 border-[#e4ebe6] border-2" />
        </button>

        <button className="flex gap-x-3 items-center">
          {" "}
          <img
            src="https://img.freepik.com/premium-vector/young-muslim-woman-wearing-hijab-taking-photo-with-camera-aesthetic-profile_513640-464.jpg?w=2000"
            alt="pfp"
            className="h-9 w-9 rounded-full border-black border-2"
          />
          <img src={expandarrow} alt="image" className="h-4 w-4 m-2" />
        </button>
      </div>
    </div>
  );
};

export default Header;
