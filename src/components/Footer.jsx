import React from "react";

const footer = () => {
  return (
    <div className="px-14 mb-5">
      <div className="w-full h-[400px] bg-black rounded-[40px]">
        <div className="w-full h-[400px] border-[3px] relative right-3 bottom-3 rounded-[40px] border-black bg-white ">
          <div className="flex gap-x-52 p-10">
            <div className="">
              <img
                src="/connectdevsicon.png"
                alt="image"
                className="h-36 w-40"
              />
            </div>
            <div className="px-24 pt-8">
              <ul className="flex list-none gap-x-16 font-semibold text-xl  font-mono">
                <li>Products</li>
                <li>About Us</li>
                <li>Resources</li>
                <li>Get in Touch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
