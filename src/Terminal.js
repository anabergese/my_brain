import React, { useEffect, useState } from 'react';
import lines from './Lines';

function Terminal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [terminalContent, setTerminalContent] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const message = lines[currentIndex];

      if (currentIndex === lines.length) {
        clearInterval(intervalId);
        return;
      }

      if (currentCharIndex === 0 && message === "<p>Clean</p>") {
        setTerminalContent('');
      }

      if (currentCharIndex < message.length) {
        setTerminalContent((prevContent) => prevContent + message.charAt(currentCharIndex));
        setCurrentCharIndex((prevCharIndex) => prevCharIndex + 1);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setCurrentCharIndex(0);
        setTerminalContent((prevContent) => prevContent + '<br>');
      }
    }, 50);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, currentCharIndex]);

  return (
    
    <div className="v102_34">
      <span className="v102_35"><div id="terminal" dangerouslySetInnerHTML={{ __html: terminalContent }}></div></span>
      <div className="v102_36">
        <div className="v102_37"></div>
        <span className="v102_38">violeta@MacBook — terminal</span>
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
