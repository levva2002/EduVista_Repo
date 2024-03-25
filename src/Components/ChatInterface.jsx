import React, { useState } from 'react';
import './ChatInterface.css';

function ChatInterface() {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput }),
      });

      const data = await response.json();
      const botMessage = data.response;
      setChatHistory([...chatHistory, { userMessage: userInput, botMessage }]);
      setUserInput('');
    } catch (error) {
      console.error('Error:', error);
      // Handle errors gracefully, e.g., display an error message to the user
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div id="chat-container">
        <h1>Coding Money Chatbot</h1>
        <div id="chat-history">
          {chatHistory.map((message, index) => (
            <React.Fragment key={index}>
              <div className="user-message">{message.userMessage}</div>
              <div className="bot-message">{message.botMessage}</div>
            </React.Fragment>
          ))}
        </div>
        <form id="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="user-input"
            placeholder="Enter your message"
            value={userInput}
            onChange={handleChange}
          />
          <button type="submit">Send</button>
        </form>
      </div>
      {isLoading && (
        <div id="loader">
          <img src="loader.gif" width="150px" alt="Loading..." />
        </div>
      )}
    </div>
  );
}

export default ChatInterface;
