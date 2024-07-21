// App.tsx
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust path as necessary

import Home from './pages/Home';
import Anime from './pages/Anime';
import About from './pages/About';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex-grow overflow-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/anime" element={<Anime />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign_up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

