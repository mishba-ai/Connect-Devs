
import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import discord from "../assets/discord.svg";
const Footerla = () => {
  return (
    <div className="px-14 pb-5">
      <div className="w-full h-[400px] bg-black rounded-3xl">
        <div className="w-full h-[400px] border-[3px] relative right-3 bottom-3 rounded-3xl border-black bg-white ">
          <div className="flex gap-x-52 p-10">
            <div className="">
              <img
                src="/connectdevsicon.png"
                alt="image"
                className="h-36 w-40"
              />
            </div>

            <div className="px-24 pt-8">
              <ul className="flex list-none gap-x-20 font-semibold text-xl  font-mono">
                <li>Products</li>
                <li>About Us</li>
                <li>Resources</li>
                <li>Get in Touch</li>
              </ul>

              <div className="flex gap-x-20 mt-4 text-gray-500 font-medium">
                <ul className="space-y-3 flex-col">
                  <li>Log In</li>
                  <li>Request Access</li>
                  <li>Partnership</li>
                </ul>
                <ul className="space-y-3 flex-col text-left">
                  <li>Contact Us</li>
                  <li>Features</li>
                </ul>
                <ul className="space-y-3 flex-col">
                  <li>Help Center</li>
                  <li>server status</li>
                  <li>Blog</li>
                </ul>
                <ul className="space-y-3 flex-col">
                  <li>Questions or feedback</li>
                  <li>we would love to hear from you</li>
                </ul>
              </div>
              <div className="flex gap-x-10 mt-5 absolute right-[0px] mx-48">
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
    </div>
  );
};

export default Footerla;
