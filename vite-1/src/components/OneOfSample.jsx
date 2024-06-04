import PropTypes from "prop-types"
const OneSample = (props) => {
    const { color } = props
  return (
    <div style={{ backgroundColor: color, padding: "20px", color: "white" }}>
      <p>{color}</p>
    </div>
  )
}

OneSample.propTypes = {
  color: PropTypes.oneOf(["red", "blue", "green"]).isRequired,
};

export default OneSample
