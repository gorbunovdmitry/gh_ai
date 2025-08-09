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
          {/* Лояльность */}
          <div style={{
            color: 'white',
            fontSize: '14px',
            fontWeight: '400',
            margin: '0 0 8px 0',
            lineHeight: '1'
          }}>
            Лояльность
          </div>
          
          {/* Growth Штурм */}
          <h1 style={{
            color: 'white',
            fontSize: '48px',
            fontWeight: 'bold',
            margin: '0 0 8px 0',
            lineHeight: '1'
          }}>
            <span style={{ color: '#7ed321' }}>Growth</span> Штурм
          </h1>
          
          {/* ИИ-помощник */}
          <div style={{
            background: '#7ed321',
            color: '#2a2a2a',
            fontSize: '16px',
            fontWeight: '500',
            padding: '6px 12px',
            borderRadius: '16px',
            display: 'inline-block',
            margin: '0'
          }}>
            ИИ-помощник
          </div>
        </div>
        
        {/* BTBIT Помощь badge */}
        <div style={{
          background: 'white',
          color: '#333',
          padding: '8px 16px',
          borderRadius: '16px',
          fontSize: '14px',
          fontWeight: 'bold',
          position: 'relative'
        }}>
          <span style={{ color: 'red' }}>BTBIT</span> Помощь
          
          {/* "Бог в помощь" картинка */}
          <img 
            src="/gh_ai/img/god.png" 
            alt="Бог в помощь" 
            style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '60px',
              height: '60px',
              objectFit: 'contain'
            }}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
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
            background: '#4a5a3a',
            borderRadius: '16px',
            padding: '24px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
          }}
        >
          <div>
            <h2 style={{
              color: '#7ed321',
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              СТЕРЕОТИПЫ
            </h2>
            <div style={{
              background: '#000',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '16px',
              fontSize: '14px',
              display: 'inline-block'
            }}>
              ЭТАП 1. ЧТО ХОРОШО, ЧТО ПЛОХО?
            </div>
          </div>
          
          {/* Изображение с эффектом свечения */}
          <div style={{
            position: 'relative',
            width: '60px',
            height: '60px'
          }}>
            <img 
              src="/gh_ai/img/Стереотипы.png" 
              alt="Стереотипы" 
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(126, 211, 33, 0.5))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '😊';
                e.target.parentNode.style.fontSize = '30px';
                e.target.parentNode.style.textAlign = 'center';
                e.target.parentNode.style.lineHeight = '60px';
              }}
            />
          </div>
        </div>

        {/* Инверсия */}
        <div 
          onClick={() => handleAssistantClick('inversion')}
          style={{
            background: '#4a5a3a',
            borderRadius: '16px',
            padding: '24px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
          }}
        >
          <div>
            <h2 style={{
              color: '#7ed321',
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              ИНВЕРСИЯ
            </h2>
            <div style={{
              background: '#000',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '16px',
              fontSize: '14px',
              display: 'inline-block'
            }}>
              ЭТАП 2. КАК НАКАЗАТЬ?
            </div>
          </div>
          
          {/* Изображение с эффектом свечения */}
          <div style={{
            position: 'relative',
            width: '60px',
            height: '60px'
          }}>
            <img 
              src="/gh_ai/img/Инверсия.png" 
              alt="Инверсия" 
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(126, 211, 33, 0.5))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '😈';
                e.target.parentNode.style.fontSize = '30px';
                e.target.parentNode.style.textAlign = 'center';
                e.target.parentNode.style.lineHeight = '60px';
              }}
            />
          </div>
        </div>

        {/* Перенос */}
        <div 
          onClick={() => handleAssistantClick('transfer')}
          style={{
            background: '#4a5a3a',
            borderRadius: '16px',
            padding: '24px',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
          }}
        >
          <div>
            <h2 style={{
              color: '#7ed321',
              fontSize: '24px',
              fontWeight: 'bold',
              margin: '0 0 8px 0'
            }}>
              ПЕРЕНОС
            </h2>
            <div style={{
              background: '#000',
              color: 'white',
              padding: '8px 12px',
              borderRadius: '16px',
              fontSize: '14px',
              display: 'inline-block'
            }}>
              ЭТАП 3. ОТКУДА УКРАСТЬ?
            </div>
          </div>
          
          {/* Изображение с эффектом свечения */}
          <div style={{
            position: 'relative',
            width: '60px',
            height: '60px'
          }}>
            <img 
              src="/gh_ai/img/Перенос.png" 
              alt="Перенос" 
              style={{
                width: '60px',
                height: '60px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 0 10px rgba(126, 211, 33, 0.5))'
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentNode.innerHTML = '😌';
                e.target.parentNode.style.fontSize = '30px';
                e.target.parentNode.style.textAlign = 'center';
                e.target.parentNode.style.lineHeight = '60px';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 