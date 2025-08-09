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
      fontFamily: 'Inter, Arial, sans-serif',
      position: 'relative'
    }}>
      {/* Header с черным фоном */}
      <div style={{
        background: '#000',
        padding: '50px 20px 30px 20px',
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div>
            {/* Лояльность - меньше размер */}
            <div style={{
              color: 'white',
              fontSize: '12px',
              fontWeight: '400',
              margin: '0 0 4px 0',
              lineHeight: '1'
            }}>
              Лояльность
            </div>
            
            {/* Growth Штурм - с неразрывным пробелом */}
            <h1 style={{
              color: 'white',
              fontSize: '42px',
              fontWeight: 'bold',
              margin: '0 0 8px 0',
              lineHeight: '1'
            }}>
              Growth&nbsp;Штурм
            </h1>
            
            {/* ИИ-ПОМОЩНИК - верхний регистр с пробелами */}
            <div style={{
              background: '#28301D',
              color: '#7ED016',
              fontSize: '12px',
              fontWeight: '600',
              padding: '4px 8px',
              borderRadius: '16px',
              display: 'inline-block',
              margin: '0'
            }}>
              &nbsp;ИИ-ПОМОЩНИК&nbsp;
            </div>
          </div>
          
          {/* Картинка god - увеличена в 2 раза и чуть ниже */}
          <img 
            src="/gh_ai/img/god.png" 
            alt="Бог в помощь" 
            style={{
              width: '160px',
              height: '160px',
              objectFit: 'contain',
              marginLeft: '40px',
              marginTop: '20px'
            }}
            onError={(e) => {
              console.log('Ошибка загрузки изображения god.png');
              e.target.style.display = 'none';
            }}
          />
        </div>
      </div>

      {/* Cards Container с серым фоном */}
      <div style={{
        background: '#2a2a2a',
        padding: '40px 20px',
        minHeight: 'calc(100vh - 200px)'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          
          {/* Стереотипы - уменьшена высота на 20px */}
          <div 
            onClick={() => handleAssistantClick('stereotypes')}
            style={{
              background: '#28301D',
              borderRadius: '16px',
              padding: '14px 10px',
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
            <div style={{ paddingLeft: '14px' }}>
              <h2 style={{
                color: '#7ED016',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 0 8px 0',
                fontFamily: 'Inter, Arial, sans-serif'
              }}>
                СТЕРЕОТИПЫ
              </h2>
              <div style={{
                background: '#000',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '16px',
                fontSize: '10px',
                fontWeight: 'bold',
                display: 'inline-block',
                fontFamily: 'Inter, Arial, sans-serif'
              }}>
                ЭТАП 1. ЧТО ХОРОШО, ЧТО ПЛОХО?
              </div>
            </div>
            
            {/* Изображение с эффектом свечения - больше размер */}
            <div style={{
              position: 'relative',
              width: '100px',
              height: '100px',
              paddingRight: '14px'
            }}>
              <img 
                src="/gh_ai/img/Стереотипы.png" 
                alt="Стереотипы" 
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 10px rgba(126, 208, 22, 0.5))'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '😊';
                  e.target.parentNode.style.fontSize = '50px';
                  e.target.parentNode.style.textAlign = 'center';
                  e.target.parentNode.style.lineHeight = '100px';
                }}
              />
            </div>
          </div>

          {/* Инверсия - уменьшена высота на 20px */}
          <div 
            onClick={() => handleAssistantClick('inversion')}
            style={{
              background: '#28301D',
              borderRadius: '16px',
              padding: '14px 10px',
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
            <div style={{ paddingLeft: '14px' }}>
              <h2 style={{
                color: '#7ED016',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 0 8px 0',
                fontFamily: 'Inter, Arial, sans-serif'
              }}>
                ИНВЕРСИЯ
              </h2>
              <div style={{
                background: '#000',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '16px',
                fontSize: '10px',
                fontWeight: 'bold',
                display: 'inline-block',
                fontFamily: 'Inter, Arial, sans-serif'
              }}>
                ЭТАП 2. КАК НАКАЗАТЬ?
              </div>
            </div>
            
            {/* Изображение с эффектом свечения - больше размер */}
            <div style={{
              position: 'relative',
              width: '100px',
              height: '100px',
              paddingRight: '14px'
            }}>
              <img 
                src="/gh_ai/img/Инверсия.png" 
                alt="Инверсия" 
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 10px rgba(126, 208, 22, 0.5))'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '😈';
                  e.target.parentNode.style.fontSize = '50px';
                  e.target.parentNode.style.textAlign = 'center';
                  e.target.parentNode.style.lineHeight = '100px';
                }}
              />
            </div>
          </div>

          {/* Перенос - уменьшена высота на 20px */}
          <div 
            onClick={() => handleAssistantClick('transfer')}
            style={{
              background: '#28301D',
              borderRadius: '16px',
              padding: '14px 10px',
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
            <div style={{ paddingLeft: '14px' }}>
              <h2 style={{
                color: '#7ED016',
                fontSize: '24px',
                fontWeight: 'bold',
                margin: '0 0 8px 0',
                fontFamily: 'Inter, Arial, sans-serif'
              }}>
                ПЕРЕНОС
              </h2>
              <div style={{
                background: '#000',
                color: 'white',
                padding: '8px 12px',
                borderRadius: '16px',
                fontSize: '10px',
                fontWeight: 'bold',
                display: 'inline-block',
                fontFamily: 'Inter, Arial, sans-serif'
              }}>
                ЭТАП 3. ОТКУДА УКРАСТЬ?
              </div>
            </div>
            
            {/* Изображение с эффектом свечения - больше размер */}
            <div style={{
              position: 'relative',
              width: '100px',
              height: '100px',
              paddingRight: '14px'
            }}>
              <img 
                src="/gh_ai/img/Перенос.png" 
                alt="Перенос" 
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 0 10px rgba(126, 208, 22, 0.5))'
                }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.innerHTML = '😌';
                  e.target.parentNode.style.fontSize = '50px';
                  e.target.parentNode.style.textAlign = 'center';
                  e.target.parentNode.style.lineHeight = '100px';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 