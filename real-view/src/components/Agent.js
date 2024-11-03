import React from 'react';
import '../css/directory.css'; 

const Agent = (agent) => {
  return (
    <div className="agent-box">
      <div className="image-placeholder">
        <img src={agent.image} alt={`Agent ${agent.name}`} />
      </div>
      <p><strong>Name:</strong> {agent.name}</p>
      <p><strong>Contact:</strong> {agent.contact}</p>
    </div>
  );
};

export default Agent;
