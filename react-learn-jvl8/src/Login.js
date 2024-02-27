import { useState } from 'react'

export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function signInHandler() {
        setMessage('Loading...')
        if(userName === 'athi' && password === 'athi'){
            setTimeout( () => {
                setMessage('success')
            }, 3000)
        }
        else{
             setTimeout( () => {
                setMessage('error')
            }, 3000)
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" placeholder='Username' onChange={ (e) => setUserName(e.target.value) } />
            <br/>
            <input type="password" placeholder='Password' onChange={ (e) => setPassword(e.target.value) } />
            <br/>
            <button onClick={signInHandler} >Login</button>
            {message && <p>{message}</p>}
        </div>
    )
}