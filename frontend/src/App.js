import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ChatPage from './ChatPage';
import './Chat.css';

function App() {
  return (
    <BrowserRouter>
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