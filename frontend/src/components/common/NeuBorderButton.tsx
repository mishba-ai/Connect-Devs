import React from "react";

interface ButtonlandingProps {
  text: string;
  style?: React.CSSProperties;
  style_button?: React.CSSProperties;
}

const NeuBorderButton: React.FC<ButtonlandingProps> = ({ text, style, style_button }) => {
  return (
    <div className="" style={style}>
      <button className=' text-lg rounded-lg border-black border-2 bg-transparent p-2 px-3 hover:shadow-none transition-all hover:translate-x-[3px] shadow-[2px_2px_0px_rgb(0,0,0)] cursor-pointer' style={style_button}>{text} </button>
    </div>
  );
};

export default NeuBorderButton;