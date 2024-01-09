import PropTypes from 'prop-types';

const Buttonlanding = ({text , style,style_button}) => { 
  return (
      <div className="bg-black  h-11 w-36 rounded-md " style={style}>
        <button className={` h-10 px-2 w-36 font-bold text-md hover:h-11 hover:right-1 rounded-md relative right-2 bottom-1 font-mono border-2 border-black`} style={style_button}>
          {text}
        </button>
      </div>

  );
};
Buttonlanding.propTypes = {
  text: PropTypes.string.isRequired, // Require the `text` prop
  style: PropTypes.object, // Optional prop with type `object`
  style_button: PropTypes.object, // Optional prop with type `object`
};

export default Buttonlanding;
