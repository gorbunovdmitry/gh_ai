import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Chat.css';

export default function LandingPage() {
  const navigate = useNavigate();
  
  console.log('LandingPage rendered');

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
    <div style={{
      minHeight: '100vh',
      background: '#fafafa',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Roboto, Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '600px',
        width: '100%',
        textAlign: 'left'
      }}>
        <div style={{
          color: '#222',
          fontSize: '22px',
          lineHeight: '1.6',
          marginBottom: '40px',
          whiteSpace: 'pre-line',
          fontWeight: '500'
        }}>
          Приветствую тебя, участник штурма!
          {"\n\n"}
          Эти три ассистента помогут тебе нагенерить самые голововзрывающие идеи!
          {"\n\n"}
          Слушай ведущего и дерзай!
        </div>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '20px',
          maxWidth: '400px',
          margin: '0 auto'
        }}>
          <button 
            style={{
              padding: '20px 24px',
              border: 'none',
              borderRadius: '16px',
              background: '#EF3124',
              color: '#fff',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'Roboto, Arial, sans-serif',
              boxShadow: '0 4px 12px rgba(239, 49, 36, 0.3)'
            }}
            onClick={() => handleAssistantClick('stereotypes')}
          >
            Ассистент по стереотипам
          </button>
          
          <button 
            style={{
              padding: '20px 24px',
              border: 'none',
              borderRadius: '16px',
              background: '#EF3124',
              color: '#fff',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'Roboto, Arial, sans-serif',
              boxShadow: '0 4px 12px rgba(239, 49, 36, 0.3)'
            }}
            onClick={() => handleAssistantClick('inversion')}
          >
            Ассистент по инверсии
          </button>
          
          <button 
            style={{
              padding: '20px 24px',
              border: 'none',
              borderRadius: '16px',
              background: '#EF3124',
              color: '#fff',
              fontSize: '18px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'Roboto, Arial, sans-serif',
              boxShadow: '0 4px 12px rgba(239, 49, 36, 0.3)'
            }}
            onClick={() => handleAssistantClick('transfer')}
          >
            Ассистент по переносу
          </button>
        </div>
      </div>
    </div>
  );
} 