import React from "react";
import connectlogo from "../../assets/connectlogo.png";
// import DarkLight from "./DarkLight";
import { Link } from "react-router-dom";

interface HeaderTypes {
  page: string,
  style?: React.CSSProperties
}
const Header: React.FC<HeaderTypes> = ({ page, style }) => {
  return (
    <div
      className="h-18 bg-red-"
    >
      <div className=" px-20 sticky top-0   text-black flex  justify-between bg-trasparent  w-full  " style={style}>
        <div className=" ">
          {" "}
          <strong className="text-4xl font-Michroma md:text-4xl font-light text-gray-900  tracking-tight">
            {page}
          </strong>{" "}
        </div>
        <div className="flex gap-x-6">
          {/* <DarkLight /> */}
          {/* <Link to="/Profile">
          <img
            src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
            alt="img"
            className="rounded-full w-10 h-10"
          />{" "}
        </Link> */}
          <img src={connectlogo} alt="" className="h-20 w-20 -mt-4" />
        </div>
      </div>
      <hr className="mt- border-black flex flex-1 border-[1.3px]" />
    </div>
  );
};

export default Header;