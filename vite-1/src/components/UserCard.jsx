import PropTypes from "prop-types";

const userData = [
    {
        name: "Athi",
        city: "Coimbatore",
        designation: "CEO",
        skills: ["UI / UX", "HTML", "CSS", "JS", "React", "Node", "Express", "MonngoDB"],
        online: true,
        profile: "images/1.jpg"
    },
    {
        name: "Athi2",
        city: "Coimbatore2",
        designation: "CTO",
        skills: ["UI / UX", "HTML", "CSS", "JS", "React", "Node", "Express", "MonngoDB"],
        online: true,
        profile: "images/2.jpg"
    },
    {
        name: "Athi3",
        city: "Coimbatore3",
        designation: "CFO",
        skills: ["UI / UX", "HTML", "CSS", "JS", "React", "Node", "Express", "MonngoDB"],
        online: false,
        profile: "images/3.jpg"
    },
];

function User(props){

    return (
        <div className="card-container">
            <span className={props.online ? "pro online" : "pro offline"}>
            {props.online ? "Online" : "Offline"}
            </span>
            <img src={props.profile} className="img" alt="user" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.designation}</p>
            <div className="buttons">
                <button className="primary">Message</button>
                <button className="primary outline">Follow</button>
            </div>
            <div className="skills">
                <h6>Skills</h6>
                <ul>
                    {props.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

const UserCard = () => {
    return (
        <>
            {userData.map((user, index) => {
                return <User key={index}
                name={user.name}
                city={user.city}
                designation={user.designation}
                skills={user.skills}
                online={user.online}
                profile={user.profile}
                />
            })}
        </>
    )
//   return <User name="Athi" city="Coimbatore" designation="CEO" skills={["UI / UX", "HTML", "CSS", "JS", "React", "Node", "Express", "MonngoDB"]} online={true} profile="images/2.jpg" />;
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    online: PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
}

export default UserCard
