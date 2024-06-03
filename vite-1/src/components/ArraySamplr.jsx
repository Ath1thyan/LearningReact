import PropTypes from "prop-types"
const ArraySamplr = (props) => {
    const { items } = props
  return (
    <div>
      <h2>Items list</h2>

      <ul>
        {items.map((item) => {
          return <li key={item.id}>{item.name}</li>
        })}
      </ul>
    </div>
  )
}

ArraySamplr.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default ArraySamplr
