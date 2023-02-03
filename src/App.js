import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdminContainer from './components/comon/Admin-container';
import AuthContainer from './components/comon/Auth-container';
import Dashboard from './views/admin/dashboard/Dashboard';
import Login from './views/auth/Login';
import SignIn from './views/auth/Signin';
// import Dashboard from './views/admin/dashboard/Dashboard';

function App() {
  const token = localStorage.getItem('token');
  return (
    <React.Fragment>
      {!token ?
        <Routes>
          <Route path="/" element={<AuthContainer />} >
            <Route path="*" element={<Navigate to="Login" />} />
            <Route index element={<Navigate to="Login" />} />
            <Route path="login" element={<Login />} />
            <Route path="signin" element={<SignIn />} />
          </Route>
        </Routes>
        :
        <Routes>
          <Route path="/" element={<AdminContainer />} >
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Route>
        </Routes>
      }
    </React.Fragment>
  );
}

export default App;
