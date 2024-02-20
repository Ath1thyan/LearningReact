import { useState } from 'react';

function MyForm() {

    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");

    const [inputs, setInputs] = useState({});

    // console.log("Current State", name);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted');
        // console.log("Current State", name, age, email);
        console.log("Current State", inputs);
    }

    function handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        setInputs( (previousState) => { return {...previousState, [name] : value}})
    }


    return <form onSubmit={handleSubmit} >
        {/* <label>Name : <input type="text" onChange={(e) => {setName (e.target.value)}} /></label> <br/> */}


        <label>Name : <input type="text" name='name' onChange={handleChange} /></label> <br/>
        <label>Age : <input type="text" name='age' onChange={handleChange} /></label>
        <br/>
        <label>Email : <input type="text" name='email' onChange={handleChange} /></label>
        <br/>


        {/* <label>Name : <input type="text" onChange={(e) => {setInputs( (p) => { return { ...p, name : e.target.value}})}} /></label> <br/>
        <label>Age : <input type="text" onChange={(e) => {setInputs( (p) => { return { ...p, age : e.target.value}})}} /></label>
        <br/>
        <label>Email : <input type="text" onChange={(e) => {setInputs( pre => { return { ...pre, email : e.target.value}})}} /></label>
        <br/> */}

        <input type='submit' value='Submit Form' />
        
    </form>
}

export default MyForm;