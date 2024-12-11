import React, { useEffect, useState } from 'react';
import { getLogs } from '../services/api';

const LogDisplay = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const { data } = await getLogs();
      setLogs(data);
    };

    fetchLogs();
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
