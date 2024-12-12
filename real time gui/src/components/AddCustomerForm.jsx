import React, { useState } from 'react';
import { addCustomer } from '../services/api';

const AddCustomerForm = ({ onCustomerFormSubmit }) => {
  const [formData, setFormData] = useState({
    customer_Name: '',
    total_Ticket_By_Customer: 0,
    vip_cus: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCustomer(formData);
      alert('Customer added!');
      onCustomerFormSubmit(); // Notify App component to hide the form
    } catch (error) {
      console.error('Error Details:', error);
      alert('Error adding customer');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseInt(value, 10) : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Customer</h3>

      <label>Customer Name:</label>
      <input
        type="text"
        name="customer_Name"
        value={formData.customer_Name}
        onChange={handleChange}
        required
      />

      <label>Total Tickets to Buy:</label>
      <input
        type="number"
        name="total_Ticket_By_Customer"
        value={formData.total_Ticket_By_Customer}
        onChange={handleChange}
        required
      />

      <label>
        VIP Customer:
        <input
          type="checkbox"
          name="vip_cus"
          checked={formData.vip_cus}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddCustomerForm;
