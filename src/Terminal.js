import React, { useEffect, useState } from 'react';

const lines = [
  "<p>Access point to Violeta's brain.</p>",
  "<p>INTRUDER ALERT</p>",
  "<p>Initiating intruder SCAN</p>",
  "<p>User12315: IP 15765465, browser 2345686, country 123456787</p>",
  "<p>Checking autorization...</p>",
  "<p>ACCESS GRANTED</p>",
  "<p>Hola, bienvenidx a mi cerebro.</p>",
  "<p>Nada interesante.</p>",
  "<p>Solo un bucle de pensamientos random.</p>",
  "<p>Solo detenidos por la inercia de la verguenza</p>",
  "<p>Pero displayed por la fuerza de los encuentros</p>",
  "<p>Interfacing with human biology, incoming thought...</p>",
  "<p>Clean</p>",
  "<p>Interfacing with human biology, incoming thought..</p>",
  "<p>Los catalanes son tacaños</p>",
  "<p>const thought = Los catalanes son tacaños</p>",
  "<p>function isPrejudice(thought)</p>",
  "<p>Alert, prejudice detected!</p>",
  "<p>function deletePrejudice(thought)</p>",
  "<p>Prejudice deleted</p>",
  "<p>Interfacing with human biology, incoming thought...</p>",
  "<p>Clean</p>",
  "<p>Interfacing with human biology, incoming thought...</p>",
  "<p>Intentar hacer una poesía con código is weird</p>",
  "<p>Planificar el flujo de este programa con lapiz y papel</p>",
  "<p>Delata mi edad</p>",
  "<p>Interfacing with human biology, incoming thought...</p>",
  "<p>Clean</p>",
  "<p>Interfacing with human biology, incoming thought...</p>",
  "<p>Hacer cagar el Tió de Navidad es la mejor tradición navideña que conozco.</p>",
  "<p>const thought = Hacer cagar el Tió de Navidad es la mejor tradición navideña que conozco.</p>",
  "<p>function isPrejudice(thought)</p>",
  "<p>Prejudice not found</p>",
  "<p>Nothing to fix</p>",
  "<p>Clean</p>",
  "<p>Interfacing with human biology, incoming thought...</p>",
  "<p>Esto prodía hacerlo infinito.</p>",
  "<p>Pero para qué aburrir.</p>",
  "<p>SYSTEM SHUTDOWN IN PROGRESS</p>",
  "<p>SYSTEM CLOSED</p>",
  "<p>...</p>",
  "<p>Clean</p>",
  "<p>...</p>",
  "<p>Would you like to know more about me? [Y/n]</p>",
  "<p>Y detected</p>",
  "<p>I am happy to hear that you want to know more about me.</p>",
  "<p>To do that, just call me at 617904495</p>"
];

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
    }, 60);

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
