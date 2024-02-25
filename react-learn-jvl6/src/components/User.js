import React from "react";
import { useParams } from "react-router-dom";

export default function User(){

    const {id} = useParams();

    return(
        <div>
            <h1>User Profile Page</h1>
            <p>User id <b>{id}</b></p>
        </div>
    )
}