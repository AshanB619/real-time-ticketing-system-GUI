import React, { useState } from 'react';
import ConfigurationForm from './components/ConfigurationForm.jsx';
import ControlPanel from './components/ControlPanel.jsx';
import TicketGrid from './components/TicketGrid.jsx';
import LogDisplay from './components/LogDisplay.jsx';
import AddCustomerForm from './components/AddCustomerForm.jsx';
import AddVendorForm from './components/AddVendorForm.jsx';
import RemoveCustomerForm from './components/RemoveCustomerForm.jsx';
import RemoveVendorForm from './components/RemoveVendorForm.jsx'; // Import new components
import './App.css';

const App = () => {
  // State variables to manage form visibility
  const [isConfigSubmitted, setIsConfigSubmitted] = useState(false);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showVendorForm, setShowVendorForm] = useState(false);
  const [showRemoveCustomerForm, setShowRemoveCustomerForm] = useState(false);
  const [showRemoveVendorForm, setShowRemoveVendorForm] = useState(false);

  // Function to handle configuration submission
  const handleConfigSubmit = () => {
    setIsConfigSubmitted(true);
  };

  // Functions to handle Add/Remove Customer/Vendor button clicks
  const handleAddCustomerClick = () => {
    resetForms();
    setShowCustomerForm(true);
  };

  const handleAddVendorClick = () => {
    resetForms();
    setShowVendorForm(true);
  };

  const handleRemoveCustomerClick = () => {
    resetForms();
    setShowRemoveCustomerForm(true);
  };

  const handleRemoveVendorClick = () => {
    resetForms();
    setShowRemoveVendorForm(true);
  };

  // Reset all form visibility states
  const resetForms = () => {
    setShowCustomerForm(false);
    setShowVendorForm(false);
    setShowRemoveCustomerForm(false);
    setShowRemoveVendorForm(false);
  };

  return (
    <div className="App">
      <h1>Real-Time Event Ticketing System</h1>
      <div className="layout">
        <div className="left-panel">
          {!isConfigSubmitted ? (
            <ConfigurationForm onConfigSubmit={handleConfigSubmit} />
          ) : showCustomerForm ? (
            <AddCustomerForm onCustomerFormSubmit={resetForms} />
          ) : showVendorForm ? (
            <AddVendorForm onVendorFormSubmit={resetForms} />
          ) : showRemoveCustomerForm ? (
            <RemoveCustomerForm onRemoveCustomerSubmit={resetForms} />
          ) : showRemoveVendorForm ? (
            <RemoveVendorForm onRemoveVendorSubmit={resetForms} />
          ) : null}

          <LogDisplay />
        </div>
        <div className="right-panel">
          <ControlPanel
            onAddCustomerClick={handleAddCustomerClick}
            onAddVendorClick={handleAddVendorClick}
            onRemoveCustomerClick={handleRemoveCustomerClick}
            onRemoveVendorClick={handleRemoveVendorClick}
          />
          <TicketGrid />
        </div>
      </div>
    </div>
  );
};

export default App;
