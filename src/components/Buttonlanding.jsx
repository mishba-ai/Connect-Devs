import PropTypes from 'prop-types';

const Buttonlanding = ({text , style,style_button}) => { 
  return (
      <div className="" style={style}>
       <button className="px-2 py-2 w-56 rounded-md hover:shadow-none transition-all hover:translate-x-[3px] border-black shadow-[4px_4px_0px_rgb(255,255,255)] hover:border hover:translate-y-[3px] font-Lexend font-semibold border-2 bg-tiltbtn text-black hover:bg-green"style={style_button}>{text} </button>
      </div>

  );
};
Buttonlanding.propTypes = {
  text: PropTypes.string.isRequired, // Require the `text` prop
  style: PropTypes.object, // Optional prop with type `object`
  style_button: PropTypes.object, // Optional prop with type `object`
};

export default Buttonlanding;