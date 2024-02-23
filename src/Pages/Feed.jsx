import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import forum from "../assets/forum.svg";
import pitch from "../assets/pitch.png";
import idea from "../assets/idea.png";
import projectt from "../assets/projectt.png";
const Feed = () => {
  return (  
    <div className="">
      <section className="flex gap-x-12  h-screen w-full  bg-background">
        <Sidebar style={{}} />
        <div className="flex-col  w-full mt-10">
          <div>
            <Header page="Feed" />
          </div> 
          <div className="font-Ubuntu text-white ">
            <div className="flex justify-center px-10 mt-2  items-center w-full"><input placeholder="search Discussions" className="w-full h-14 text-lg rounded-full border-green border-2 bg-transparent p-2 px-3 hover:shadow-none transition-all hover:translate-x-[3px] shadow-[4px_4px_0px_rgb(153,255,82)] hover:border hover:translate-y-[3px] "/></div>
            <div className="mt-10 mx-4 flex gap-x-4">
              <img src={forum} alt="" className="h-12 w-12" />
              <h1 className="text-3xl text-tiltbtn font-Ubuntu">Forums</h1>
            </div>

            <div className="flex ml-8  mr-36 flex-col justify-center items-center mt-4">
              <ul className="flex   flex-col  w-full gap-y-">
                <li className=" h-20 cursor-pointer hover:bg-secondary flex p-2">
                  <div><img src={idea} alt="" className="h-16  w-20 "/></div>
                  <h2 className="text-xl font-semibold">
                    Pitch Pit : Pitch Your Side Project Idea
                  </h2>
                  <span></span>
                </li>
                <hr className="  w-full border-green"/>
                <li className="flex cursor-pointer gap-x-2 p-2 hover:bg-secondary h-20">
                <div><img src={pitch} alt="" className="h-16  w-20 "/></div>
                  <h2 className="">
                    Idea Dojo: Hone your next hackathon project from concept to
                    reality.
                  </h2>
                </li>
                <hr className="  w-full   border-green"/>
                <li className=" h-20 hover:bg-secondary flex cursor-pointer  p-2">
                  <div> 
                    <img src={projectt} alt="" className="h-20 w-20"/>
                  </div> 
                  <h2 className="">
                    Side Project Sprint: Share progress, get feedback, and
                    accelerate your personal projects.
                  </h2>
                </li>
                <hr className=" w-full border-green"/>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feed;
