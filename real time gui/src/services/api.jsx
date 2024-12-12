import axios from 'axios';

// Base API setup
const API = axios.create({ baseURL: 'http://localhost:8080' });

// Customer API
export const addCustomer = (data) => API.post('/customer/add/customers', data);
export const removeCustomer = (id) => API.delete(`/customer/remove/customer/${id}`);

// Vendor API
export const addVendor = (data) => API.post('/vendor/add/vendors', data);
export const removeVendor = (id) => API.delete(`/vendor/remove/vendors/${id}`);

// Simulation API
export const startSimulation = () => API.post('/simulation/config/start/simulation');
export const stopSimulation = () => API.post('/simulation/config/stop/simulation');

// System Configuration API
export const setSystemDetails = (data) => API.post('/system/config/set/details', data);

// Logs API
export const getLogs = () => API.get('/log/show'); // Fetch logs
export const addLog = (message) => API.post('/log/add', message); // Add a new log

export default API;
