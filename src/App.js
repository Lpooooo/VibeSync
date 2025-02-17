import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Authentification from './Pages/Authentification';
import CreerUtilisateur from './Pages/CreerUtilisateur';
import AddPhoto from './Pages/AddPhoto';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/Authentification" replace />} />
          <Route path="/Authentification" element={<Authentification />} />
          <Route path="/CreerUtilisateur" element={<CreerUtilisateur />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AddPhoto" element={<AddPhoto />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;