import React, { useEffect, useState } from 'react';
import API from '../services/api';

const TicketGrid = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const { data } = await API.get('/tickets'); // Adjust this endpoint
      setTickets(data);
    };

    fetchTickets();
  }, []);

  return (
    <div className="ticket-grid">
      <h3>Ticket Grid</h3>
      <table>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{ticket.ticket_id}</td>
              <td>{ticket.status_of_ticket}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketGrid;
