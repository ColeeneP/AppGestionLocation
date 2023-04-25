import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import Tenants from './pages/Tenants';
import Property from './pages/Property';
import AddTenant from './scenes/AddTenant';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/property" element={<Property />} />
        <Route path="/createTenant" element={<AddTenant />} />
      </Routes>
    <App /> 
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
