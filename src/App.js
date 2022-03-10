import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import CheeseIndex from './components/CheeseIndex';
import CheeseShow from './components/CheeseShow';
import Register from './components/Register';
import Login from './components/Login';
import CheeseNew from './components/CheeseNew';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cheeses" element={<CheeseIndex />} />
        <Route path="/cheeses/:cheeseId" element={<CheeseShow />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/new-cheese" element={<CheeseNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
