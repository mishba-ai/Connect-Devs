import propTypes from 'prop-types'
function Cards({style}) {
  return (
    <div>
        <div className='w-[500px] h-72 bg-secondary border-white border-2 rounded-[8px] hover:shadow-none transition-all hover:translate-x-[3px] shadow-[4px_4px_0px_rgb(255,255,255)] hover:translate-y-[3px] ' style={style}>
    
        </div>
    </div>
  )
}
Cards.propTypes = {
  style: propTypes.object.isRequired, // Require the `text` prop

};
export default Cards