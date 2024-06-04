import PropTypes from "prop-types";

const FunctionSample = (props) => {
    const {handleClick} = props;
  return (
    <div>
      <p>Funcyion Component</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  )
}

FunctionSample.propTypes = {
    handleClick: PropTypes.func.isRequired,
}

export default FunctionSample;
