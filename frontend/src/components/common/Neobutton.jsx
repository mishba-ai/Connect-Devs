import { useState } from "react";
const Neobutton = ({ style, text, hoverStyle }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <button
        className="px-4 py-1 rounded-md hover:shadow-none transition-all hover:translate-x-[3px] shadow-[4px_4px_0px_rgb(255,255,255)] hover:border hover:translate-y-[3px] border-2"
        style={isHovered ? { ...style, ...hoverStyle } : style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {text}
      </button>
    </div>
  );
};

export default Neobutton;
