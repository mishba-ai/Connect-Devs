import PropTypes from "prop-types";
const Featuresdiv = ({ style, image, heading, para, styleimg, styletext }) => {
  return (
    <div className="">
      <div 
        className={`w-[340px] h-[420px] rounded-xl   transition-all hover:translate-x-[-3px] hover:shadow-none shadow-[4px_4px_0px_rgb(255,255,255)] hover:translate-y-[-3px] `}
        style={style}
      >
        {" "}
        <div className="flex p-4">
          <img src={image} alt="image" className="w-84 h-72" style={styleimg} />{" "}
          <div
            className="flex flex-col justify-center items-center "
            style={styletext}
          >
            <h1 className="text-3xl  font-bold ">{heading}</h1>
            <p className="font-medium text-base mt-2">{para}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
Featuresdiv.propTypes = {
  style: PropTypes.object, // Optional prop with type `object`
  image: PropTypes.string.isRequired, // Require the `text` prop
  heading: PropTypes.string.isRequired, // Require the `text` prop
  para: PropTypes.string.isRequired, // Require the `text` prop
  styleimg: PropTypes.object, // Optional prop with type `object`
  styletext: PropTypes.object, // Optional prop with type `object`
};
export default Featuresdiv;
