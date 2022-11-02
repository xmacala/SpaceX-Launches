import React, {useState, useEffect} from 'react'
import './App.css'
import Route1 from './Pages/Route1';
import Route2 from './Pages/Route2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

export default function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Route1 />} ></Route>
        <Route path='/informations' element={<Route2 />} ></Route>
      </Routes>
    </Router>
  );
}
