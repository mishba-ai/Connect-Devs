import React from "react";

interface cardsTypes{
  style:React.CSSProperties
}
function Cards({ style }:cardsTypes) {
  return (
    <div>
      <div
        className="w-[500px] border-2  border-black  rounded-xs  shadow-[4px_4px_0px_rgb(0,0,0)]   h-72 bg-purple"
        style={style}
      >
      </div>
    </div>
  );
}

export default Cards;