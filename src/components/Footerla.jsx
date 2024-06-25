
import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
import connectlogo from "../assets/connectlogo.png";
const Footerla = () => {
  return (
    <div className="px-14 mt-2 pb-3">
      
        <div className="w-full h-[300px] bg-transparent text-white ">
          <div className="flex gap-x-52 p-10">
            <div className="-mt-4">
              <img
                src={connectlogo}
                alt="image"
                className="h-36 w-40"
              />
            </div>

            <div className="px-24 pt-8">
              <ul className="flex list-none gap-x-20 font-semibold text-sm font-PressStart ">
                <li>Products</li>
                <li>About Us</li>
                <li>Resources</li>
                <li>Get in Touch</li>
              </ul>

              <div className="flex gap-x-28 mt-4 font-Ubuntu text-gray-500 font-medium">
                <ul className="space-y-3  flex-col">
                  <li>Log In</li>
                  <li>Request Access</li>
                  {/* <li>Partnership</li> */}
                </ul>
                <ul className="space-y-3 flex-col  text-left">
                  <li>Contact Us</li>
                  <li>Features</li>
                </ul>
                <ul className="space-y-3 flex-col">
                  <li>Blog</li>
                </ul>
                <ul className="space-y-3 flex-col">
                  <li>Questions or feedback</li>
                  <li>we would love to hear from you</li>
                </ul>
              </div>
              <div className="flex gap-x-10 mt-4 ml-[590px] ">
                <a href="">
                  {" "}
                  <img src={x} alt="ximage" />{" "}
                </a>
                <a href="">
                  <img src={linkedin} alt="inimage" />{" "}
                </a>
                <a href="">
                  {" "}
                  <img src={discord} alt="" />{" "}
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Footerla;
