import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ChatPage from './ChatPage';
import './Chat.css';

function App() {
  console.log('App rendered, current pathname:', window.location.pathname);
  
  return (
    <BrowserRouter basename="/gh_ai">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/stereotypes" element={<ChatPage />} />
        <Route path="/inversion" element={<ChatPage />} />
        <Route path="/transfer" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 