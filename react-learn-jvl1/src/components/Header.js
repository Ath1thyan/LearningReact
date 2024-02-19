function Header() {
    const myStyle = {
        color : "red", 
        backgroundColor : "lightblue",
        padding : "10px",
        textAlign : "center",
        fontFamily : "Sans-Serif"
    };
    return (
        <div>
            {/* <h1 style={{color : "red", backgroundColor : "lightblue"}} >Hello styling</h1> */}
            <h1 style={myStyle} >Hello styling</h1>
            <p>Add a style</p>
        </div>
    )
}

export default Header;