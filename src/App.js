import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Episodes from './pages/Episodes';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Navbar /> {/* Place Navbar outside of Routes to show on all pages */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
