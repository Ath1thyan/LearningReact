import React from 'react';

function Result({secretNum, term}) {

    let res;

    if(term) {
        if (term > secretNum){
            res = "higher";
        }
        else if (term < secretNum){
            res = "lower";
        } 
        else if (term == secretNum) {
            res = "correct"
        }
        else{
            res = "Enter valid input"
        }
    }

    return <h3>your guess is : {res}</h3>
}

export default Result;