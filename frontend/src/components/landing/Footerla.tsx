import { X } from "lucide-react";
import linkedin from "../../assets/linkedin.svg";
import connectlogo from "/connectlogo.png";

const Footerla = () => {
  return (
    <div className="px-10 mt-14  ">
      <div className="w-full bg-transparent text-white  py-8">
        <div className="flex items-start gap-16">

          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={connectlogo} alt="Connect Devs logo" className="h-64 w-72" />
          </div>

          {/* Nav columns */}
          <div className="flex-1">
            <ul className="flex list-none gap-x-24 font-semibold text-xl font-PressStart mb-6">
              <li>Products</li>
              <li>About Us</li>
              <li>Resources</li>
              <li>Get in Touch</li>
            </ul>

            <div className="flex gap-x-24 font-Ubuntu text-gray-500 font-medium text-xl">
              <ul className="space-y-3">
                <li>Log In</li>
                <li>Request Access</li>
              </ul>
              <ul className="space-y-3">
                <li>Contact Us</li>
                <li>Features</li>
              </ul>
              <ul className="space-y-3">
                <li>Blog</li>
              </ul>
              <ul className="space-y-3">
                <li>Questions or feedback?</li>
                <li>We'd love to hear from you</li>
              </ul>
            </div>
          </div>

          {/* Social icons  */}
          <div className="flex-shrink-0 flex gap-4 pt-1">
            <a href="" aria-label="X / Twitter">
              <X size={32} />
            </a>
            <a href="" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" className="w-10 h-10" />
            </a>
          </div>

        </div>
        <div className="uppercase text-center whitespace- transition-transform scale- text-9xl font-bold mt-12  flex justify-center items-center text-green leading-none ">
          Let's build together
        </div>
      </div>
    </div>
  );
};

export default Footerla;