import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
// import Buttons from './components/Buttons';
import Hobbies from './components/Hobbies';
import Quotes from './components/Quotes';
// import CheeseShow from './components/CheeseShow';
import Register from './components/Register';
import Login from './components/Login';
// import CheeseNew from './components/CheeseNew';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/quotes" element={<Quotes />} />
        {/* <Route path="/cheeses/:cheeseId" element={<CheeseShow />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/new-cheese" element={<CheeseNew />} /> */}
        {/* <Route path="/buttons" element={<Buttons />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
