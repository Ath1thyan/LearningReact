import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import UserCard from './components/UserCard.jsx'
// import './index.css'
import './css/QrCode.css'
import QrCode from './components/QrCode'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <UserCard /> */}
    <QrCode />
  </React.StrictMode>,
)
