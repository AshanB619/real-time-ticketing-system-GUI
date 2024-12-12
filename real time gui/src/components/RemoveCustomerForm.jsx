import React, { useState } from 'react';
import { removeCustomer } from '../services/api';

const RemoveCustomerForm = ({ onRemoveCustomerSubmit }) => {
  const [customerId, setCustomerId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await removeCustomer(customerId);
      alert(`Customer with ID ${customerId} removed!`);
      onRemoveCustomerSubmit(); // Notify App to hide the form
    } catch (error) {
      console.error('Error Details:', error);
      alert('Error removing customer');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Remove Customer</h3>
      <label>Customer ID:</label>
      <input
        type="number"
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        required
      />
      <button type="submit">Remove</button>
    </form>
  );
};

export default RemoveCustomerForm;
