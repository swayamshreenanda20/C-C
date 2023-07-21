import React from 'react';
import ReactDOM from 'react-dom';
import './home.css';
import './landing.css';





import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import Landingpage from './pages/landing';

import Homepage from './pages/home';





function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Landingpage />} />
      
      <Route path="/homepage" element={<Homepage />} />
      
      </Routes>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));