import React from "react";

interface ButtonlandingProps {
  text: string;
  style?: React.CSSProperties;
  style_button?: React.CSSProperties;
}

const Buttonlanding: React.FC<ButtonlandingProps> = ({ text, style, style_button }) => {
  return (
    <div className="" style={style}>
      <button className="px-2 py-2 w-56 rounded-md hover:shadow-none transition-all hover:translate-x-[3px] border-black shadow-[4px_4px_0px_rgb(255,255,255)] hover:border hover:translate-y-[3px] font-Lexend font-semibold border-2 bg-tiltbtn text-black hover:bg-green" style={style_button}>{text} </button>
    </div>
  );
};

export default Buttonlanding;