import connectlogo from "../../assets/connectlogo.png";
// import DarkLight from "./DarkLight";
import { Link } from "react-router-dom";
const Header = ({ page, style }) => {
  return (
    <div
      className="py-2  sticky top-0 px-3 pr-  text-black flex justify-between bg-trasparent h-8 w-full "
      style={{ style }}
    >
      <div>
        {" "}
        <strong className="text-4xl text-black font-Encode font-extrabold">
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
  );
};

export default Header;
