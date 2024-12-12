import React, { useEffect, useState } from 'react';
import { getLogs } from '../services/api';

const LogDisplay = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const { data } = await getLogs();
        setLogs(data); // Update the logs
      } catch (error) {
        console.error('Error fetching logs:', error);
      }
    };

    fetchLogs();

    // Poll for new logs every 5 seconds
    const interval = setInterval(fetchLogs, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="logs">
      <h3>Logs</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default LogDisplay;
