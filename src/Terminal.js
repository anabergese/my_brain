import React, { useEffect, useState } from 'react';
import lines from './Lines';

function Terminal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [terminalContent, setTerminalContent] = useState('');
  const [userResponse, setUserResponse] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (userResponse !== null) {
        // Handle user response
        if (userResponse.toLowerCase() === 'y') {
          const responseMessages = [
            "<p> > I am happy to hear that you want to know more about me.</p>",
            "<p> > To do that, just call me at 617904495</p>"
          ];
          const messageIndex = currentIndex - lines.length; // Calculate the index within responseMessages
          if (messageIndex < responseMessages.length) {
            setTerminalContent((prevContent) => prevContent + responseMessages[messageIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
        } else if (userResponse.toLowerCase() === 'n') {
          const responseMessages = [
            "<p> > I hope your lack of interest is momentary. Bye bye!</p>"
          ];
          const messageIndex = currentIndex - lines.length; // Calculate the index within responseMessages
          if (messageIndex < responseMessages.length) {
            setTerminalContent((prevContent) => prevContent + responseMessages[messageIndex]);
            setCurrentIndex((prevIndex) => prevIndex + 1);
          }
        }
      } else {
        const message = lines[currentIndex];

        if (currentIndex === lines.length) {
          clearInterval(intervalId);
          return;
        }

        if (currentCharIndex === 0 && message === "<p> > Clean</p>") {
          setTerminalContent('');
        }

        if (currentCharIndex < message.length) {
          setTerminalContent((prevContent) => prevContent + message.charAt(currentCharIndex));
          setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
        } else {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setCurrentCharIndex(0);
          setTerminalContent((prevContent) => prevContent + '<br>');
      // Check for the desired HTML and show input when necessary
      if (message === "<p> > Would you like to know more about me? [Y/n]</p>") {
        const inputElement = document.getElementById('user-input');
        if (inputElement) {
          inputElement.style.display = 'block';
          inputElement.focus();
        }
      }
    }
  }
}, 5);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, currentCharIndex, userResponse]);

  const handleUserInput = (e) => {
    if (e.key === 'Enter') {
      setUserResponse(e.target.value);
      
      // Hide the input element after user input
      const inputElement = document.getElementById('user-input');
      if (inputElement) {
        inputElement.style.display = 'none';
      }
    }
  };
  

  return (
    <div className="v102_34">
    <span className="v102_35">
      <div id="terminal" dangerouslySetInnerHTML={{ __html: terminalContent }}></div>
      <input
        type="text"
        id="user-input"
        style={{ display: 'none' }}
        placeholder=""
        onKeyPress={handleUserInput}
      />
    </span>
    <div className="v102_36">
      <div className="v102_37"></div>
      <span className="v102_38">violeta@MacBrain — terminal</span>
      <div className="v102_39">
        <div className="v102_40"></div>
        <div className="v102_41"></div>
        <div className="v102_42"></div>
      </div>
     
    </div>
  </div>

  );
}

export default Terminal;
