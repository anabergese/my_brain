import React, { useEffect, useState } from 'react';
import "./index.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCleared, setIsCleared] = useState(false);


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
    "<p>Delate mi edad</p>",
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isCleared) {
        setCurrentIndex((prevIndex) => {
          if (prevIndex < lines.length - 1) {
            return prevIndex + 1;
          } else {
            setIsCleared(true);
            return prevIndex;
          }
        });
      } else {
        setCurrentIndex(0);
        setIsCleared(false);
      }
    }, 1000); // Change the delay (in milliseconds) as needed

    return () => clearInterval(interval);
  }, [isCleared]);

  return (
    <div className="App">
      <div className="line-container">
        {lines.map((line, index) => (
          <div
            key={index}
            className={`line ${index <= currentIndex ? 'visible' : 'hidden'}`}
            dangerouslySetInnerHTML={{ __html: line }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
