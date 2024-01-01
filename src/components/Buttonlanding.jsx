import React from "react";

const Buttonlanding = ({text , style,style_button}) => { 
  return (
      <div className="bg-black  h-11 w-36 rounded-md " style={style}>
        <button className={` h-10 px-2 w-36 font-bold text-md hover:h-11 hover:right-1 rounded-md relative right-2 bottom-1 font-mono border-2 border-black`} style={style_button}>
          {text}
        </button>
      </div>

  );
};

export default Buttonlanding;
