import React from 'react';
import {
  startSimulation,
  stopSimulation,
  addLog, // Import the new API function
} from '../services/api';

const ControlPanel = ({
  onAddCustomerClick,
  onAddVendorClick,
  onRemoveCustomerClick,
  onRemoveVendorClick,
}) => {
  const handleStartSimulation = async () => {
    try {
      await startSimulation();
      await addLog('Simulation started successfully'); // Add log message
      alert('Simulation started!');
    } catch (error) {
      console.error('Error starting simulation:', error);
      alert('Error starting simulation');
    }
  };

  const handleStopSimulation = async () => {
    try {
      await stopSimulation();
      await addLog('Simulation stopped successfully'); // Add log message
      alert('Simulation stopped!');
    } catch (error) {
      console.error('Error stopping simulation:', error);
      alert('Error stopping simulation');
    }
  };

  return (
    <div className="control-panel">
      <button onClick={handleStartSimulation}>Start</button>
      <button onClick={handleStopSimulation}>Stop</button>
      <button onClick={onAddCustomerClick}>Add Customer</button>
      <button onClick={onAddVendorClick}>Add Vendor</button>
      <button onClick={onRemoveCustomerClick}>Remove Customer</button>
      <button onClick={onRemoveVendorClick}>Remove Vendor</button>
    </div>
  );
};

export default ControlPanel;
