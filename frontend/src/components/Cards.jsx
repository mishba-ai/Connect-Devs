import propTypes from 'prop-types'
function Cards({style}) {
  return (
    <div>
        <div className='w-[500px] h-72 bg-secondary border-white border  ' style={style}>
    
        </div>
    </div>
  )
}
Cards.propTypes = {
  style: propTypes.object.isRequired, // Require the `text` prop

};
export default Cards