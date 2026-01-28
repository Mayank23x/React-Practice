// import { useState } from 'react'
import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ColorCoding from "./Components/ColorCoding"; // example component

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/color-coding" element={<ColorCoding />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
