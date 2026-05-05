import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";
import connectlogo from "/connectlogo.png";

const Footerla = () => {
  return (
    <footer className="px-10 mt-24 bg-[#121212] relative shadow-[0_-30px_0_0_#E0D8F0,0_-66px_0_0_#A8D1E7,0_-96px_0_0_#FFCCB3] rounded-t-3xl border-t-4 border-black pt-16 pb-8 font-Ubuntu ">
      <div className="max-w-7xl mx-auto text-white relative  ">        
        <div className="flex flex-wrap items-start justify-between gap-10">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <img src={connectlogo} alt="Connect Devs logo" className="h-20 w-auto mb-4" />
            <p className="text-slategrey text-sm max-w-[200px]">
              Empowering devs to find teammates and build the future.
            </p>
          </div>

          <div className="flex flex-1 justify-around gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-yellow text-lg font-PressStart">// Products</h4>
              <ul className="space-y-2 text-slategrey">
                <li className="hover:text-green cursor-pointer">Log In</li>
                <li className="hover:text-green cursor-pointer">Request Access</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-yellow text-lg font-PressStart">// About</h4>
              <ul className="space-y-2 text-slategrey">
                <li className="hover:text-green cursor-pointer">Contact Us</li>
                <li className="hover:text-green cursor-pointer">Features</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-yellow text-lg font-PressStart">// Resources</h4>
              <ul className="space-y-2 text-slategrey">
                <li className="hover:text-green cursor-pointer">Blog</li>
                <li className="hover:text-green cursor-pointer">API Docs</li>
              </ul>
            </div>
          </div>

          <div className="flex-shrink-0 flex gap-6 items-center  pt-2">
            <div  className="bg-peach p-2 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all">
              <FiTwitter size={24} color="black"/>
            </div>
            <div  className="bg-highlight p-2 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all">
               <FiLinkedin size={24} color="black"/>
            </div>
            <div  className="bg-lavendar p-2 border-2 border-black rounded-lg shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all">
               <FiGithub size={24} color="black"/>
            </div>
          </div>
        </div>

        <div className="uppercase text-center text-7xl md:text-9xl font-bold mt-20 text-green leading-none opacity-80 select-none">
          Let's build together
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex justify-between text-xs text-slategrey font-mono">
          <p>© 2026 Connect Devs</p>
        </div>
      </div>
    </footer>
  );
};

export default Footerla;