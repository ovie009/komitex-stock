import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Signup from './pages/Signup';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route index path="/" element={<Home />}></Route>
          <Route path="signup" element={<Signup />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
