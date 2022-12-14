import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login-components/Login';
import Signup from './components/Login-components/Signup';
import PhoneSignUp from './components/Login-components/PhoneSignUp';
import ProtectedRoute from './components/Login-components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext';

function App() {
  return (
    <UserAuthContextProvider>
      <Routes>
        <Route
          path='/home'
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/phonesignup' element={<PhoneSignUp />} />
      </Routes>
    </UserAuthContextProvider>
  );
}

export default App;
