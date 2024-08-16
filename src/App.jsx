import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './assets/components/Navbar';
import ConnectForm from './assets/components/ConnectForm';
import Homepage from './assets/components/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage/>}/>
          <Route path="ConnectForm" element={<ConnectForm />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
