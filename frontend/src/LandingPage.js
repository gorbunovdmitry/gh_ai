import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Chat.css';

function LandingPage() {
  const navigate = useNavigate();
  
  console.log('LandingPage rendered');

  // Аналитика
  React.useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'GHShturm_landing_view');
    }
    if (window.ym) {
      window.ym(96171108, 'reachGoal', 'GHShturm_landing_view');
    }
  }, []);

  const handleAssistantClick = (assistantType) => {
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
      background: '#2a2a2a',
      padding: '20px',
      fontFamily: 'Roboto, Arial, sans-serif',
      position: 'relative'
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: '60px'
      }}>
        <div>
          <h1 style={{
            color: '#7ed321',
            fontSize: '48px',
            fontWeight: 'bold',
            margin: '0',
            lineHeight: '1'
          }}>
            Штурм
          </h1>
          <p style={{
            color: '#7ed321',
            fontSize: '18px',
            margin: '5px 0 0 0',
            fontWeight: '300'
          }}>
            ИИ-помощник
          </p>
        </div>
        
        <div style={{
          background: 'white',
          color: '#333',
          padding: '8px 16px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: 'bold'
        }}>
          <span style={{ color: 'red' }}>BTBIT</span> Помощь
        </div>
      </div>

      {/* Cards Container */}
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        
        {/* Стереотипы */}
        <div 
          onClick={() => handleAssistantClick('stereotypes')}
          style={{
            background: 'linear-gradient(135deg, #7ed321, #5ba816)',
            borderRadius: '20px',
            padding: '24px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 20px rgba(126, 211, 33, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 30px rgba(126, 211, 33, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(126, 211, 33, 0.3)';
          }}
        >
          <div>
            <h2 style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              СТЕРЕОТИПЫ
            </h2>
            <div style={{
              background: 'rgba(0,0,0,0.2)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '12px',
              fontSize: '14px',
              display: 'inline-block'
            }}>
              ЭТАП 1. ЧТО ХОРОШО, ЧТО ПЛОХО?
            </div>
          </div>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/gh_ai/img/Стереотипы.png" 
              alt="Стереотипы" 
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '😊';
                e.target.parentNode.style.fontSize = '30px';
              }}
            />
          </div>
        </div>

        {/* Инверсия */}
        <div 
          onClick={() => handleAssistantClick('inversion')}
          style={{
            background: 'linear-gradient(135deg, #7ed321, #5ba816)',
            borderRadius: '20px',
            padding: '24px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 20px rgba(126, 211, 33, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 30px rgba(126, 211, 33, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(126, 211, 33, 0.3)';
          }}
        >
          <div>
            <h2 style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              ИНВЕРСИЯ
            </h2>
            <div style={{
              background: 'rgba(0,0,0,0.2)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '12px',
              fontSize: '14px',
              display: 'inline-block'
            }}>
              ЭТАП 2. КАК НАКАЗАТЬ?
            </div>
          </div>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/gh_ai/img/Инверсия.png" 
              alt="Инверсия" 
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '😈';
                e.target.parentNode.style.fontSize = '30px';
              }}
            />
          </div>
        </div>

        {/* Перенос */}
        <div 
          onClick={() => handleAssistantClick('transfer')}
          style={{
            background: 'linear-gradient(135deg, #7ed321, #5ba816)',
            borderRadius: '20px',
            padding: '24px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 20px rgba(126, 211, 33, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 30px rgba(126, 211, 33, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(126, 211, 33, 0.3)';
          }}
        >
          <div>
            <h2 style={{
              color: 'white',
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              ПЕРЕНОС
            </h2>
            <div style={{
              background: 'rgba(0,0,0,0.2)',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '12px',
              fontSize: '14px',
              display: 'inline-block'
            }}>
              ЭТАП 3. ОТКУДА УКРАСТЬ?
            </div>
          </div>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img 
              src="/gh_ai/img/Перенос.png" 
              alt="Перенос" 
              style={{
                width: '50px',
                height: '50px',
                objectFit: 'contain'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '😌';
                e.target.parentNode.style.fontSize = '30px';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 