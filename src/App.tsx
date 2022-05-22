import React from 'react';
import './App.css';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

import Index from './pages/Index';
import RgbaToHex from './pages/rgba2hex';
import ReviewForCollegeClass from './pages/ReviewForCollegeClass';
import Know from './pages/know';
import RefDemo from './pages/RefDemo';
import Login from './pages/Login';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Index />} />
          <Route path='/app/reviewForCollegeClass' element={<ReviewForCollegeClass />} />
          <Route path='/app/rgba2hex' element={<RgbaToHex />} />
          <Route path='/app/know' element={<Know />} />
          <Route path='/app/ref' element={<RefDemo />} />
          <Route path='/app/login' element={<Login />} />
          <Route path='*' element={<NoMatchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function NoMatchPage() {
  return (
    <div>
      <h2>No such Page, please check your url.</h2>
      <Link to='/'>back to home page</Link>
    </div>
  )
}