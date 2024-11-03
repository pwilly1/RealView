import React from 'react';
import '../css/listings.css';

const Listing = (listing) => {
  return (
    <div className="listing-box">
      <h3>{listing.title}</h3>
      <p>Location: {listing.location}</p>
      <p>Price: {listing.price}</p>
      <p>Bedrooms: {listing.bedrooms}</p>
      <p>Bathrooms: {listing.bathrooms}</p>
    </div>
  );
};

export default Listing;
