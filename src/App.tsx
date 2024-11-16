import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Stats from './components/Stats';
import Footer from './components/Footer';
import LoanApplication from './components/LoanApplication';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HowItWorks />
              <Benefits />
              <Stats />
            </>
          } />
          <Route path="/apply" element={<LoanApplication />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;