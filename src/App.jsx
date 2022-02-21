import React from 'react';

import Profile from "./components/Profile"
import Login from "./components/Login"
import Theme from "./components/Theme"

import './App.css';

function App() {
  return (
    <main>
      <Profile />
			<Login />
			<Theme />
    </main>
  );
}

export default App;