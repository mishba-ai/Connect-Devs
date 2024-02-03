import PropTypes from "prop-types";

const Header = ({ page ,style }) => {
  return (
    <div className="py-2 sticky top-0 px-3 pr-12 text-white flex justify-between bg-trasparen  h-14 w-full bg" style={{style}}>
      <div>
        {" "}
        <strong className="text-4xl text-green font-Encode font-extrabold">{page}</strong>{" "}
      </div>
      <div className="flex gap-x-6">
        <div className="p-2 border">
          <button>dark</button>
        </div>
        <img
          src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
          alt="img"
          className="rounded-full w-10 h-10"
        />
      </div>
    </div>
  );
};
Header.propTypes = {
  page: PropTypes.string.isRequired, // Require the `text` prop
  style: PropTypes.object.isRequired
};
export default Header;
