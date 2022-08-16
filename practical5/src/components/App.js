import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;