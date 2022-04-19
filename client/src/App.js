import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sector from './components/pages/Sector';
import Country from './components/pages/Country';
import Currency from './components/pages/Currency';
import Commodity from './components/pages/Commodity';
import Cap from './components/pages/Cap';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Sector/>}/>
          <Route path="/Country" element={<Country/>}/>
          <Route path="/Currency" element={<Currency/>}/>
          <Route path="/Commodity" element={<Commodity/>}/>
          <Route path="/Cap" element={<Cap/>}/>
        </Routes>
      </Router>
    );
    }
}

export default App;
