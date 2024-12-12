import React, { useState } from 'react';
import { addVendor } from '../services/api';

const AddVendorForm = ({ onVendorFormSubmit }) => {
  const [formData, setFormData] = useState({
    vendor_Name: '',
    total_Ticket_By_Vendor: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addVendor(formData);
      alert('Vendor added!');
      onVendorFormSubmit(); // Notify App component to hide the form
    } catch (error) {
      console.error('Error Details:', error);
      alert('Error adding vendor');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'total_Ticket_By_Vendor' ? parseInt(value, 10) : value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Vendor</h3>

      <label>Vendor Name:</label>
      <input
        type="text"
        name="vendor_Name"
        value={formData.vendor_Name}
        onChange={handleChange}
        required
      />

      <label>Total Tickets to Provide:</label>
      <input
        type="number"
        name="total_Ticket_By_Vendor"
        value={formData.total_Ticket_By_Vendor}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddVendorForm;
