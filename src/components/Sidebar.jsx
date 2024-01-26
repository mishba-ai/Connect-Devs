import PropTypes from 'prop-types';

function Sidebar({ links , style}) {
  return (
    <div className=''>
        <div className='h-[607px] w-24 bg-primary border border-white  ' style={style}>
            {links}
        </div>

    </div>
  )
}
Sidebar.propTypes = {
  links: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  style: PropTypes.object, // Optional prop with type `object`
};
export default Sidebar