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
    <div className="landing-page">
      <div className="landing-container">
        {/* Header */}
        <div className="landing-header">
          <div className="loyalty-badge">
            <span>Лояльность</span>
          </div>
          <h1 className="main-title">
            Growth <span className="highlight">Штурм</span>
          </h1>
          <p className="subtitle">ИИ-помощник</p>
          <div className="help-badge">
            <span>BTBIT</span>
            <span>Помощь</span>
          </div>
        </div>

        {/* Assistant Cards */}
        <div className="assistants-container">
          {/* Стереотипы */}
          <div 
            className="assistant-card stereotypes"
            onClick={() => handleAssistantClick('stereotypes')}
          >
            <div className="card-content">
              <div className="assistant-info">
                <h2>СТЕРЕОТИПЫ</h2>
                <p>ЭТАП 1. ЧТО ХОРОШО, ЧТО ПЛОХО?</p>
              </div>
              <div className="assistant-emoji">
                <div className="emoji emoji-surprised">
                  <div className="emoji-face">
                    <div className="emoji-horns"></div>
                    <div className="emoji-eyes">
                      <div className="eye">
                        <div className="pupil"></div>
                      </div>
                      <div className="eye">
                        <div className="pupil"></div>
                      </div>
                    </div>
                    <div className="emoji-mouth surprised"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Инверсия */}
          <div 
            className="assistant-card inversion"
            onClick={() => handleAssistantClick('inversion')}
          >
            <div className="card-content">
              <div className="assistant-info">
                <h2>ИНВЕРСИЯ</h2>
                <p>ЭТАП 2. КАК НАКАЗАТЬ?</p>
              </div>
              <div className="assistant-emoji">
                <div className="emoji emoji-devil">
                  <div className="emoji-face">
                    <div className="emoji-horns devil"></div>
                    <div className="emoji-eyes">
                      <div className="eye red">
                        <div className="pupil red"></div>
                      </div>
                      <div className="eye red">
                        <div className="pupil red"></div>
                      </div>
                    </div>
                    <div className="emoji-mouth devil"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Перенос */}
          <div 
            className="assistant-card transfer"
            onClick={() => handleAssistantClick('transfer')}
          >
            <div className="card-content">
              <div className="assistant-info">
                <h2>ПЕРЕНОС</h2>
                <p>ЭТАП 3. ОТКУДА УКРАСТЬ?</p>
              </div>
              <div className="assistant-emoji">
                <div className="emoji emoji-calm">
                  <div className="emoji-face">
                    <div className="emoji-ears"></div>
                    <div className="emoji-eyes">
                      <div className="eye sleepy">
                        <div className="pupil"></div>
                      </div>
                      <div className="eye sleepy">
                        <div className="pupil"></div>
                      </div>
                    </div>
                    <div className="emoji-mouth calm"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage; 