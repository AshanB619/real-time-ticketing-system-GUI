import React from 'react';
import { addCustomer, removeCustomer, addVendor, removeVendor, startSimulation, stopSimulation } from '../services/api';

const ControlPanel = () => {
  const handleAddCustomer = async () => {
    const customer = { customer_Name: 'Customer A', total_Ticket_By_Customer: 10, vip_cus: true };
    await addCustomer(customer);
    alert('Customer added!');
  };

  const handleRemoveCustomer = async () => {
    await removeCustomer(1);
    alert('Customer removed!');
  };

  const handleAddVendor = async () => {
    const vendor = { vendor_Name: 'Vendor A', total_Ticket_By_Vendor: 10 };
    await addVendor(vendor);
    alert('Vendor added!');
  };

  const handleRemoveVendor = async () => {
    await removeVendor(1);
    alert('Vendor removed!');
  };

  const handleStartSimulation = async () => {
    await startSimulation();
    alert('Simulation started!');
  };

  const handleStopSimulation = async () => {
    await stopSimulation();
    alert('Simulation stopped!');
  };

  return (
    <div className="control-panel">
      <button onClick={handleStartSimulation}>Start</button>
      <button onClick={handleStopSimulation}>Stop</button>
      <button onClick={handleAddCustomer}>Add Customer</button>
      <button onClick={handleRemoveCustomer}>Remove Customer</button>
      <button onClick={handleAddVendor}>Add Vendor</button>
      <button onClick={handleRemoveVendor}>Remove Vendor</button>
    </div>
  );
};

export default ControlPanel;
