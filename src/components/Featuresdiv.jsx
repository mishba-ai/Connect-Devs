import PropTypes from 'prop-types';
const Featuresdiv = ({ style, image, heading, para, styleimg, styletext }) => {
  return (
    <div className="">
      <div className="w-[675px] h-[300px] bg-black rounded-2xl ">
        <div
          className={`w-[680px] h-[300px] rounded-xl relative right-3 bottom-2 border-[3px] border-black `}
          style={style}
        >
          {" "}
          <div className="flex p-4">
            <img
              src={image}
              alt="image"
              className="w-84 h-72"
              style={styleimg}
            />{" "}
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