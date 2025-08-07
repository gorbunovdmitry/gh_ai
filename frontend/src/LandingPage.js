import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chat.css';

export default function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Аналитика для главной страницы
    if (window.gtag) {
      window.gtag('event', 'GHShturm_landing_view');
    }
    if (window.ym) {
      window.ym(96171108, 'reachGoal', 'GHShturm_landing_view');
    }
  }, []);

  const handleAssistantClick = (assistantType) => {
    // Аналитика для клика по ассистенту
    if (window.gtag) {
      window.gtag('event', `GHShturm_${assistantType}_click`);
    }
    if (window.ym) {
      window.ym(96171108, 'reachGoal', `GHShturm_${assistantType}_click`);
    }
    
    navigate(`/${assistantType}`);
  };

  return (
    <div className="landing-container">
      <div className="landing-content">
        <div className="landing-message">
          Приветствую тебя, участник штурма!
          {"\n\n"}
          Эти три ассистента помогут тебе нагенерить самые голововзрывающие идеи!
          {"\n\n"}
          Слушай ведущего и дерзай!
        </div>
        
        <div className="assistants-grid">
          <button 
            className="assistant-button"
            onClick={() => handleAssistantClick('stereotypes')}
          >
            Ассистент по стереотипам
          </button>
          
          <button 
            className="assistant-button"
            onClick={() => handleAssistantClick('inversion')}
          >
            Ассистент по инверсии
          </button>
          
          <button 
            className="assistant-button"
            onClick={() => handleAssistantClick('transfer')}
          >
            Ассистент по переносу
          </button>
        </div>
      </div>
    </div>
  );
} 