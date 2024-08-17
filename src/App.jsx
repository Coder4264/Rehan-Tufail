import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import ConnectForm from './assets/components/ConnectForm';
import Homepage from './assets/components/Homepage';
import Projects from './assets/components/Projects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage/>}/>
          <Route path="ConnectForm" element={<ConnectForm />} />
          <Route path="Projects" element={<Projects />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
