import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EventList from './components/EventList';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

function App() {
  return (
      <Router>
          <nav>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/eventlist">Find Events!</Link>
              <Link to="/register">Register</Link>
              <Link to="/login">Log In</Link>
              <h1>Local Event Finder</h1>
          </nav>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/eventlist" element={<EventList />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </Router>
  );
}

export default App;
