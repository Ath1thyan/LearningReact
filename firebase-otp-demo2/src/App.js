import React, {Component} from "react";
// import firebase from "./firebase";
// import firebase from "firebase/app";
import "firebase/auth";
import "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBE-Bl4WyS9j6n9XXWhvbcrkkZ8sA0gczA",
    authDomain: "otp-demo-d518a.firebaseapp.com",
    projectId: "otp-demo-d518a",
    storageBucket: "otp-demo-d518a.appspot.com",
    messagingSenderId: "672243018767",
    appId: "1:672243018767:web:87e578849de96953ca877a",
    measurementId: "G-FML7H8F91W"
};

const app = initializeApp(firebaseConfig);


export class App extends Component {

  handleClick = () => {
    let recaptcha = new app.auth.RecaptchaVerifier('recaptcha');
    let num = '+916374186549';
    app.auth().signInWithPhoneNumber(num, recaptcha)
      .then(function(e){
        let code = prompt('Enter otp');
        if (code == null) return;
        return e.confirm(code).then(function(result){
          console.log(result.user, 'user');
          document.querySelector('label').textContent = result.user.phoneNumber + "num is verified"
        }).catch((error)=>{
          console.log(error);
        })
      })
  }

  render(){
    return (
      <div>
        <label></label>
        <button onClick={this.handleClick} >button</button>
      </div>
    )
  }
}

export default App;
