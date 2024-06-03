import propTypes from 'prop-types'

const LearnComponents = (props) => {
  return (
    <div className="student">
    <table>
        <tr>
            <th>Name</th>
            <td>{props.name}</td>
        </tr>
        <tr>
            <th>Age</th>
            <td>{props.age}</td>
        </tr>
        <tr>
            <th>Gender</th>
            <td>{props.gender ? "Male" : "Female"}</td>
        </tr>
    </table>
    </div>
  )
}

LearnComponents.propTypes ={
    name: propTypes.string.isRequired,
    age: propTypes.number,
    gender: propTypes.bool.isRequired,
}

LearnComponents.defaultProps = {
    gender: "na",
    age: 0,
    name: "na"
}

export default LearnComponents
