import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { signInWithPhoneNumber } from "firebase/auth";

import firebaseConfig from './firebase.config'; // Import Firebase configuration
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); // Get Firebase auth instance

const App = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [user, setUser] = useState(null);

  function onCaptchVerify() {
    console.log("Verifying Captcha...");
    try {
      const containerId = "recaptcha-container";
      const appVerifier = new app.auth.RecaptchaVerifier(containerId, {
        size: "invisible",
      });
      console.log("RecaptchaVerifier initialized:", appVerifier);
      onSignup(appVerifier); // Pass appVerifier to onSignup
    } catch (error) {
      console.error("Error initializing RecaptchaVerifier:", error);
    }
  }
  

  function onSignup(appVerifier) {
    console.log("Signing up...");
    const formatPh = "+" + ph;
  
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        console.log("OTP sent successfully!");
        window.confirmationResult = confirmationResult;
        alert("OTP sent successfully!");
      })
      .catch((error) => {
        console.log("Error during sign-up:", error);
      });
  }
  
  

  function onOTPVerify() {
    console.log("Verifying OTP...");
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log("OTP verified successfully:", res);
        setUser(res.user);
      })
      .catch((err) => {
        console.log("Error verifying OTP:", err);
      });
  }

  console.log("Rendering...");

  return (
    <div>
      <div id="recaptcha-container"></div>

      {user ? (
        <h2>👍 Login Success</h2>
      ) : (
        <div>
          <h1>Welcome</h1>
        </div>
      )}

      <label htmlFor="ph" className="font-bold text-xl text-white text-center">
        Verify your phone number
      </label>
      <PhoneInput country={"in"} value={ph} onChange={setPh} /> <br/><br/>
      <button onClick={onSignup}>Send OTP</button><br/><br/>

      <label htmlFor="otp" className="font-bold text-xl text-white text-center"/>
      <input type="text" placeholder="One Time Password" value={otp} onChange={e => setOtp(e.target.value)} /> <br/>
      <button onClick={onOTPVerify}>Verify OTP</button>
    </div>
  );
}

export default App;


// Inside onCaptchVerify function
// function onCaptchVerify() {
//   console.log("Verifying Captcha...");
//   if (!window.recaptchaVerifier) {
//       console.log("RecaptchaVerifier is not initialized. Initializing...");
//       try {
//           const appVerifier = new app.auth.RecaptchaVerifier(
//               "recaptcha-container",
//               {
//                   size: "normal",
//                   callback: (response) => {
//                       onSignup();
//                   },
//                   "expired-callback": () => {},
//                   // appVerificationDisabledForTesting: false // Add this option if needed
//               },
//               auth
//           );
//           window.recaptchaVerifier = appVerifier;
//           console.log("RecaptchaVerifier initialized:", window.recaptchaVerifier);
//       } catch (error) {
//           console.error("Error initializing RecaptchaVerifier:", error);
//       }
//   } else {
//       console.log("RecaptchaVerifier is already initialized.");
//   }
// }

// Inside the onCaptchVerify function
// Inside the onCaptchVerify function
