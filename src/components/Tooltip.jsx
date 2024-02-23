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
        {isVisibile && <span className="invisible absolute -top-12 py-1 px-2  text-white bg-secondary  shadow-[2px_2px_0px_rgb(255,255,255)] w-20 font-Ubuntu  text-center border border-white group-hover:visible text-sm ">{text} <div className="triangle"></div></span>}
      </div>
      
  );
};


export default Tooltip;
