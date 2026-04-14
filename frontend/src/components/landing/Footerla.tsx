import { X } from "lucide-react";
import linkedin from "../../assets/linkedin.svg";
import connectlogo from "/connectlogo.png";

const Footerla = () => {
  return (
    <div className="px-14 mt-2 pb-3">
      <div className="w-full bg-transparent text-white  py-8">
        <div className="flex items-start gap-16">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={connectlogo} alt="Connect Devs logo" className="h-28 w-32" />
          </div>

          {/* Nav columns */}
          <div className="flex-1">
            <ul className="flex list-none gap-x-16 font-semibold text-sm font-PressStart mb-6">
              <li>Products</li>
              <li>About Us</li>
              <li>Resources</li>
              <li>Get in Touch</li>
            </ul>

            <div className="flex gap-x-16 font-Ubuntu text-gray-500 font-medium text-sm">
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
              <X size={20} />
            </a>
            <a href="" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Footerla;