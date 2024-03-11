import React, { useState, useEffect } from 'react';
import Sidebar from './sidebar';
import backgroundImage from './static_image.png';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isWorkPhase, setIsWorkPhase] = useState(true); // Track if it's work phase or break phase
  const [workPhaseCount, setWorkPhaseCount] = useState(0); // Counter for work phase completion

  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(intervalId);
            setIsActive(false);
            // Switch between work and break phases
            setIsWorkPhase(!isWorkPhase);
            // Increment work phase count if work phase ends
            if (isWorkPhase) {
              setWorkPhaseCount(workPhaseCount + 1);
              setMinutes(5); // Time for break phase
            } else {
              setMinutes(25); // Time for work phase
            }
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [minutes, seconds, isWorkPhase, isActive, workPhaseCount]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setIsWorkPhase(true);
    setMinutes(25);
    setSeconds(0);
    setWorkPhaseCount(0);
  };

  return (
    <div className="App">
      <Sidebar
        minutes={minutes}
        seconds={seconds}
        isWorkPhase={isWorkPhase}
        workPhaseCount={workPhaseCount}
        isActive={isActive} // Pass isActive as a prop
        toggleTimer={toggleTimer}
        resetTimer={resetTimer}
      />
      <div className="image-container">
        <img src={backgroundImage} alt="Background"/>
      </div>
    </div>
  );
}

export default App;
