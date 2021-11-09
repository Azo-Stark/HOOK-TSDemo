import { AuthenicateApp } from 'authenicated-app';
import { useAuth } from 'context/auth-context';
import React from 'react';
import { UnauthenticatedApp } from 'unauthenticated-app';
// import logo from './logo.svg';
import './App.css';

function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      {user ? <AuthenicateApp/> : <UnauthenticatedApp/>}
    </div>
  );
}

export default App;
