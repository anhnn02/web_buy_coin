import React from 'react';
import { Route, Routes } from 'react-router-dom'
import './App.css';
import BuyCoin from './pages/client/BuyCoin';
import Login from './pages/client/Login';
import WebsiteLayout from './pages/layouts/WebsiteLayout';

function App() {
  return (
    <Routes>
      {/* Website */}
      <Route path="/" element={<WebsiteLayout />}>  
        <Route index element={<Login />} />
        <Route path="/nap-the" element={<BuyCoin />} />
      </Route>
   
      {/* <Route path="*" element={<Page404 />} /> */}
    </Routes>
  );
}

export default App;
