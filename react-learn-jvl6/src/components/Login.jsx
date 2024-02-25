import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){

    const navigate = useNavigate();

    function onSubmit() {
        console.log("submitting");
        navigate('/dashboard')
    }

    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={onSubmit} >Login</button>
        </div>
    )
}