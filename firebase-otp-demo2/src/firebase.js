import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBE-Bl4WyS9j6n9XXWhvbcrkkZ8sA0gczA",
    authDomain: "otp-demo-d518a.firebaseapp.com",
    projectId: "otp-demo-d518a",
    storageBucket: "otp-demo-d518a.appspot.com",
    messagingSenderId: "672243018767",
    appId: "1:672243018767:web:87e578849de96953ca877a",
    measurementId: "G-FML7H8F91W"
}

firebase.initializeApp(config)

export default firebase