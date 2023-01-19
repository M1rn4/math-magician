import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './functionBased/components/NavBar';
import Calculator from './functionBased/components/Calculator';
import Home from './functionBased/components/Home';
import Quote from './functionBased/components/Quote';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<Quote />} />
    </Routes>
  </>
);

export default App;
