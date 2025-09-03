import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroPage from './components/HeroPage';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import FunModeRoom from './components/FunModeRoom';
import StudyModeRoom from './components/StudyModeRoom';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/room/fun/:roomId?" element={<FunModeRoom />} />
          <Route path="/room/study/:roomId?" element={<StudyModeRoom />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;