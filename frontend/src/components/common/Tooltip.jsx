import { useState } from "react";
const Tooltip = ({ text, children }) => {
  const [isVisibile, setIsVisible] = useState(false);
  return (
    <div
      className="group relative flex flex-col "
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisibile && (
        <span className="invisible absolute -top-8 left-8 py-1 px-1  text-white bg-secondary  shadow-[2px_2px_0px_rgb(255,255,255)] w-20 font-Ubuntu  text-center border-2 border-white group-hover:visible text-xs ">
          {text} <div className="triangle"></div>
        </span>
      )}
    </div>
  );
};

export default Tooltip;



