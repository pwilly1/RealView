import React from 'react';
import '../css/directory.css'; 

const Agent = ({ image, name, contact, email }) => {
  return (
    <div className="agent-card">
      <div className="agent-image">
        <img src={image} alt={`Agent ${name}`} />
        <div className="agent-overlay">
          <div className="agent-social">
            <a href={`tel:${contact}`} aria-label={`Call ${name}`}>
              <i className="fas fa-phone"></i>
            </a>
            <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="agent-info">
        <h3 className="agent-name">{name}</h3>
        <p className="agent-contact">
          <i className="fas fa-phone"></i> {contact}
        </p>
        <p className="agent-email">
          <i className="fas fa-envelope"></i> {email}
        </p>
        <button className="btn btn-secondary agent-btn">
          <i className="fas fa-user"></i> View Profile
        </button>
      </div>
    </div>
  );
};

export default Agent;
    