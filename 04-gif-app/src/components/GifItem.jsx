import PropTypes from 'prop-types'

export const GifItem = ({url,title}) => {
    /* console.log(title); */
  return (
    <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
    
  )

}
GifItem.propTypes={
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  
}
