import location from "../assets/location.svg";
import x from "../assets/x.svg";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import website from "../assets/website.svg";
import forward from "../assets/forward.svg";
const ProfilePage = () => {
 
  

  return (
    <div className="w-full">
      <section className="">
        <div className="">
          <div className="flex gap-y-6 flex-col justify-center text-black items-center mb-4">
            <img
              src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
              className="w-32 h-32 rounded-full"
              alt="pfp"
            />

            <h1 className="text-xl font-PressStart ">Lorem Ipsum</h1>

            <p className="font-Ubuntu text-lg ">
              Computer science student| learning JS| aspiring Full-Stack web
              developer
            </p>

            <div className="flex gap-x-2">
              <span>
                <img src={location} alt="location" className="w-8 h-8" />
              </span>
              <span className="font-Ubuntu text-xl">LOCATION</span>
            </div>

            <div className="flex flex-col  font-PressStart">
              <div className="flex gap-x-12">
                <h1 className=" ">Projects</h1>
                <div className=" h-6  border-l-green border-l mt-6"></div>
                <h1 className="">Connections</h1>
              </div>

              <div className="flex justify-between text-center text-xl font-PressStart">
                <p>400</p>
                <p>141.k</p>
              </div>
            </div>

            <div className="">
              <button className="font-Ubuntu text-xl p-2 font-semibold  w-56 bg-green text-black  transition-all hover:translate-x-[3px] hover:shadow-[4px_4px_0px_rgb(255,255,255)] hover:border-2 hover:translate-y-[3px] hover:border-black">
                Edit Your Profile
              </button>
            </div>

            <div className="flex justify-between w-full mt-4 ">
              <div className="w-[800px] h-[450px] bg-[#fff] shadow-[4px_4px_0px_rgb(0,0,0)] border-2 border-black p-4">
                <div className="text-lg font-PressStart">About</div>
                <hr className="border-green mt-2" />
                <div className="gap-y-2 mt-2 font-Ubuntu flex flex-col">
                  <p className="text-lg">Tech stacks</p>
                  <ul className="flex font-Ubuntu gap-x-3 ">
                    <li className="p-2 w-28 rounded-full border-green border text-center">
                      Javascript
                    </li>
                    <li className="p-2 w-20 rounded-full border-green border text-center">
                      Python
                    </li>
                    <li className="p-2 w-20 rounded-full border-green border text-center">
                      React
                    </li>
                    <li className="p-2 w-20 rounded-full border-green border text-center">
                      Git
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[450px] h-[400px] bg-[#fff] shadow-[4px_4px_0px_rgb(0,0,0)] border-2 border-black mr-10 p-4">
                <h1 className="text-lg font-PressStart">Socials</h1>
                <ul className="gap-y-5 font-Ubuntu  text-2xl  p-1  flex flex-col mt-4">
                  <li className="bg-[#252525] hover:bg-[#393939]  p-4 w-full h-16 rounded-xl">
                    <a href="" className="flex justify-between ">
                      <img src={x} alt="" className="h-9 w-9" />
                      <p className="">X</p>
                      <img src={forward} alt="" />
                    </a>
                  </li>
                  <li className="bg-[#252525] hover:bg-[#393939]  p-4 w-full h-16 rounded-xl">
                    <a href="" className="flex justify-between ">
                      <img src={github} alt="" className="h-9 w-9" />
                      <p className="">GitHub</p>
                      <img src={forward} alt="" />
                    </a>
                  </li>
                  <li className="bg-[#252525]  hover:bg-[#393939] p-4 w-full h-16 rounded-xl">
                    <a href="" className="flex justify-between ">
                      <img src={linkedin} alt="" className="h-9 w-9" />
                      <p className="">Linkedin</p>
                      <img src={forward} alt="" />
                    </a>
                  </li>
                  <li className="bg-[#252525] hover:bg-[#393939]  p-4 w-full h-16 rounded-xl">
                    <a href="" className="flex justify-between items-center">
                      <img src={website} alt="" className="h-9 w-9" />
                      <p className="">Website</p>
                      <img src={forward} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfilePage;
