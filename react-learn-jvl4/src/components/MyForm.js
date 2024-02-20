import { useState } from 'react';

function MyForm() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    // console.log("Current State", name);

    function handleSubmit(e) {
        e.preventDefault();
        console.log('Form submitted');
        console.log("Current State", name, age, email);
    }


    return <form onSubmit={handleSubmit} >
        <label>Name : <input type="text" onChange={(e) => {setName (e.target.value)}} /></label> <br/>
        <label>Age : <input type="text" onChange={(e) => {setAge (e.target.value)}} /></label>
        <br/>
        <label>Email : <input type="text" onChange={(e) => {setEmail (e.target.value)}} /></label>
        <br/>
        <input type='submit' value='Submit Form' />
        
    </form>
}

export default MyForm;