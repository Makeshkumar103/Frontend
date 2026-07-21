import React, { useState, useEffect, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { BsChatDotsFill, BsX, BsSendFill } from 'react-icons/bs';
import { responses } from '../../public/data/response.js';
import './chatbot.css';

const INITIAL_MESSAGE = {
  id: 1,
  text: "Hi! I'm your Exam Prep Assistant. Ask me about exam patterns, preparation tips, or mock tests.",
  sender: 'bot'
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isTyping, isOpen]);

  const handleOpen = () => {
    if (isClosing) return;
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const getBotResponse = (input) => {
    const lowerInput = input.toLowerCase();

    for (const item of responses) {
      if (item.keywords.some(word => lowerInput.includes(word))) {
        return item.reply;
      }
    }

    return "I'm not sure about that. Try asking about bootcamp registration, course access, or mock interviews.";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue.trim(),
      sender: 'user'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: getBotResponse(userMessage.text),
        sender: 'bot'
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }, 1200);
  };

  const handleReaction = (msgId, emoji) => {
    setMessages(prev =>
      prev.map(msg =>
        msg.id === msgId ? { ...msg, reaction: emoji } : msg
      )
    );
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className={`chat-window ${isClosing ? 'closing' : ''}`}>
          <div className="chat-header">
            <span>Exam Prep Assistant</span>
            <button className="chat-close-btn" onClick={handleClose}>
              <BsX />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chat-message message-${msg.sender}`}>
                {msg.text}

                {msg.sender === 'bot' && (
                  <div className="message-reactions">
                    <button className="emoji-btn" onClick={() => handleReaction(msg.id, '👍')}>👍</button>
                    <button className="emoji-btn" onClick={() => handleReaction(msg.id, '💡')}>💡</button>
                    {msg.reaction && <span style={{ marginLeft: '6px' }}>{msg.reaction}</span>}
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="chat-typing">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="chat-input-area">
            <Form onSubmit={handleSendMessage} className="chat-form">
              <Form.Control
                type="text"
                placeholder="Ask about exams or tips..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="chat-input shadow-none"
              />

              <Button type="submit" variant="primary" className="chat-send-btn shadow-none" disabled={!inputValue.trim()}>
                <BsSendFill />
              </Button>
            </Form>
          </div>
        </div>
      )}

      {!isOpen && !isClosing && (
        <button className="chatbot-button" onClick={handleOpen}>
          {/* <BsChatDotsFill /> */}
          ...
        </button>
      )}
    </div>
  );
};

export default Chatbot;
