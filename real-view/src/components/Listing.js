import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/listings.css';

const Listing = ({ id, image, title, address, price, bedrooms, bathrooms }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/listings/${id}`);
  };

  return (
    <div className="listing-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="listing-image">
        <img src={image} alt={title} />
      </div>
      <div className="listing-content">
        <h3 className="listing-title">{title}</h3>
        <p className="listing-address">{address}</p>
        <div className="listing-price">{price}</div>
        <div className="listing-details">
          <span className="detail-item">
            <i className="fas fa-bed"></i> {bedrooms} Beds
          </span>
          <span className="detail-item">
            <i className="fas fa-bath"></i> {bathrooms} Baths
          </span>
        </div>
      </div>
    </div>
  );
};

export default Listing;

