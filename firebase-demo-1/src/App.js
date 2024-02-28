import './App.css';
import { Form, Input, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import React, { useEffect } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { firebaseConfig } from './Firebase'; // Import Firebase configuration

function App() {
  useEffect(() => {
    const firebaseApp = initializeApp(firebaseConfig);
    const auth = getAuth(firebaseApp);

    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // Do nothing here, let it be handled in onSignInSubmit
      }
    }, auth);

    recaptchaVerifier.render().then((widgetId) => {
      window.recaptchaWidgetId = widgetId;
    });
  }, []);

  const onSignInSubmit = (event) => {
    event.preventDefault();

    var phoneNumber = "+916374186549";
    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        // ...
      }).catch((error) => {
        console.log(error);
        // Error; SMS not sent
        // ...
      });
  }

  return (
    <div className="App">
      <Form className='input-form' onSubmitCapture={onSignInSubmit}>
        <div id="recaptcha-container"></div>
        <Form.Item className='form' name="phone" rules={[{ required: true, message: "Please input your Phone Number!" }]}>
          <Input type='phone' placeholder='Phone Number'
            prefix={<MailOutlined />} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Get OTP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
