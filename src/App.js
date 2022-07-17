import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/admin/Dashboard';
import ListBuyCoin from './pages/admin/ListBuyCoin';
import BuyCoin from './pages/client/BuyCoin';
import Login from './pages/client/Login';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import Page404 from './pages/Page404';

function App() {
  return (
    <Routes>
      {/* Website */}
      <Route path="/" element={<WebsiteLayout />}>  
        <Route index element={<Login />} />
        <Route path="/nap-the" element={<BuyCoin />} />
      </Route>
      <Route path="admin/" element={<AdminLayout />}>  
        <Route index element={<Navigate to="dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="danh-sach-nap-the" element={<ListBuyCoin />} />
      </Route>
   
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
