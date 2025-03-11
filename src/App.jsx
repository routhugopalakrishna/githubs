import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Applemainpage from './Applemainpage';
import Amazon from './Amazon';

function App() {
  return (
    
      <Routes>
        <Route path="/" element={<Applemainpage />} />
        <Route path="/Amazon" element={<Amazon />} />
      </Routes>
  
  );
}

export default App;
