import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Toggle Button */}
      <button
        onClick={toggleChatbot}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: isOpen ? '400px' : '20px',
          zIndex: 1001,
          backgroundColor: '#4A90E2',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
        }}
        title={isOpen ? 'Close Chatbot' : 'Open Chatbot'}
      >
        💬
      </button>

      {/* Chatbot Iframe */}
      {isOpen && (
        <div
          className="chatbot-container"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/PCspeqbkIpZ3huEqayEgE"
            width="370"
            height="500"
            style={{
              border: 'none',
              borderRadius: '10px',
              boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
            }}
            title="E-Commerce Chatbot"
            allow="clipboard-write"
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
