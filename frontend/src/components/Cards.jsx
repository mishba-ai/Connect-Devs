import propTypes from "prop-types";
function Cards({ style }) {
  return (
    <div>
      <div
        className="w-[500px] border-2  border-black  rounded-sm  shadow-[4px_4px_0px_rgb(0,0,0)]   h-72 bg-purple"
        style={style}
      >
      </div>
    </div>
  );
}
Cards.propTypes = {
  style: propTypes.object.isRequired, // Require the `text` prop
};
export default Cards;
