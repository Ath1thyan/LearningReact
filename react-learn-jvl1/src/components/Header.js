import './css/Header.css';
import styles from './css/Header.module.css';

function Header() {
    // const myStyle = {
    //     color : "red", 
    //     backgroundColor : "lightblue",
    //     padding : "10px",
    //     textAlign : "center",
    //     fontFamily : "Sans-Serif"
    // };
    return (
        <div>
            {/* <h1 style={{color : "red", backgroundColor : "lightblue"}} >Hello styling</h1> */}
            {/* <h1 style={myStyle} >Hello styling</h1> */}
            <h1 className={styles.bigBlue}>Hello Styling</h1>
            <p>Add a style</p>
        </div>
    )
}

export default Header;