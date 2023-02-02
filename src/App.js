import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import AdminContainer from './components/comon/Admin-container';
import Dashboard from './views/admin/dashboard/Dashboard';
// import Dashboard from './views/admin/dashboard/Dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AdminContainer />} >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
