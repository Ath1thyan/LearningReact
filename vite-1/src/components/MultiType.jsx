import PropTypes from "prop-types";

const MultiType = (props) => {
  return (
    <div>
      {props.value}
    </div>
  )
}

MultiType.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]).isRequired,
}

export default MultiType
