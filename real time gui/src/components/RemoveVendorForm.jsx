import React, { useState } from 'react';
import { removeVendor } from '../services/api';

const RemoveVendorForm = ({ onRemoveVendorSubmit }) => {
  const [vendorId, setVendorId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await removeVendor(vendorId);
      alert(`Vendor with ID ${vendorId} removed!`);
      onRemoveVendorSubmit(); // Notify App to hide the form
    } catch (error) {
      console.error('Error Details:', error);
      alert('Error removing vendor');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Remove Vendor</h3>
      <label>Vendor ID:</label>
      <input
        type="number"
        value={vendorId}
        onChange={(e) => setVendorId(e.target.value)}
        required
      />
      <button type="submit">Remove</button>
    </form>
  );
};

export default RemoveVendorForm;
