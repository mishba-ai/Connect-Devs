import propTypes from 'prop-types'
function Cards({style}) {
  return (
    <div>
        <div className='w-[500px] h-72 bg-primary border-b-2 border-r-2 border-white border rounded-3xl' style={style}>
    
        </div>
    </div>
  )
}
Cards.propTypes = {
  style: propTypes.object.isRequired, // Require the `text` prop

};
export default Cards