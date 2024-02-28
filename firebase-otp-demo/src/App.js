import { Component } from 'react';
import './App.css';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { app } from './firebase';

export default class App extends Component {
  setUpRecaptcha = () => {
    const auth = getAuth(); // Get authentication instance
    // Initialize RecaptchaVerifier
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
      'size': 'normal',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.onSignInSubmit(); // Call onSignInSubmit when reCAPTCHA is solved
      }
    });
  }
  
  
  onSignInSubmit = async (e) => {
    if (e) {
      e.preventDefault(); // Prevent form submission if event is available
    }
    this.setUpRecaptcha(); // Set up RecaptchaVerifier
    
    const phoneNumber = "+911234567899";
    const appVerifier = window.recaptchaVerifier; // Get the RecaptchaVerifier instance from window object
  
    try {
      const auth = getAuth(app); // Get authentication instance
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier); // Sign in with phone number
      window.confirmationResult = confirmationResult; // Store confirmation result in window object
    
      // Prompt the user to enter the OTP
      const code = window.prompt("Enter OTP");
      if (code) {
        await confirmationResult.confirm(code); // Confirm OTP
        console.log("User signed in successfully");
      } else {
        console.log("User did not enter OTP");
      }
    } catch (error) {
      console.error("Error signing in:", error); // Log error if sign-in fails
      // Handle error here, such as displaying an error message to the user
    }
  }
  
  

  render () {
    return (
      <div className="App">
        <div className='container'>
          <div className='row'>
            <div className='input-form'>
              <form onSubmit={(e) => this.onSignInSubmit(e)} >
                <div id='recaptcha-container'></div>
                <input type='phone' placeholder='Phone Number'></input> <br/>
                <button type='submit' >Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
