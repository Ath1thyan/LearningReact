import './App.css';
import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';

export const AppContext = createContext(null);

function App() {

  const [username, setUsername] = useState("")

  return (
    <AppContext.Provider value={{username, setUsername}} >
      <Login setUsername={setUsername} /> <User username={username} />
    </AppContext.Provider>
  );
}

export default App;
