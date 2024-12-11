import React, { useState } from 'react';
import { setSystemDetails } from '../services/api';

const ConfigurationForm = () => {
  const [formData, setFormData] = useState({
    Total_Number_of_Tickets: 0,
    Tickets_Release_rate: 0,
    Customer_Retrieval_Rate: 0,
    Maximum_Ticket_Capacity: 0,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setSystemDetails(formData);
      alert('System Configuration Updated!');
    } catch (error) {
      console.error(error);
      alert('Error updating system configuration');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>System Configuration</h3>
      <label>Total Tickets:</label>
      <input type="number" name="Total_Number_of_Tickets" onChange={handleChange} />
      <label>Release Rate:</label>
      <input type="number" name="Tickets_Release_rate" onChange={handleChange} />
      <label>Retrieval Rate:</label>
      <input type="number" name="Customer_Retrieval_Rate" onChange={handleChange} />
      <label>Maximum Capacity:</label>
      <input type="number" name="Maximum_Ticket_Capacity" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConfigurationForm;
