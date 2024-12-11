import React from 'react';
import ConfigurationForm from './components/ConfigurationForm.jsx';
import ControlPanel from './components/ControlPanel.jsx';
import TicketGrid from './components/TicketGrid.jsx';
import LogDisplay from './components/LogDisplay.jsx';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Real-Time Event Ticketing System</h1>
      <div className="layout">
        <div className="left-panel">
          <ConfigurationForm />
          <LogDisplay />
        </div>
        <div className="right-panel">
          <ControlPanel />
          <TicketGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
