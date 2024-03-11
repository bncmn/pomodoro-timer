import React from 'react';
import './sidebar.css';
import { TiArrowBackOutline, TiArrowForwardOutline } from 'react-icons/ti';

const Sidebar = ({ minutes, seconds, isWorkPhase, workPhaseCount, isActive, toggleTimer, resetTimer }) => {
  return (
    <div className="sidebar">
      <div className="timer">
        <h1>
          {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
        </h1>
        <p className="phase">{isWorkPhase ? 'Work Phase' : 'Break Phase'}</p>
        <p className="count">Work Phase Count: {workPhaseCount}</p>
      </div>
      <div className="controls">
        <button className="control-btn" onClick={toggleTimer}>
          {isActive ? <TiArrowBackOutline /> : <TiArrowForwardOutline />}
        </button>
        <button className="control-btn" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
