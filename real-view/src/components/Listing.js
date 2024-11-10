import React from 'react';
import '../css/listings.css';


const Listing = (listing) => {
  return (
    <div className="listing-box">
      <img className="image-placeholder" src={listing.image} alt={listing.title} />
      <p>Address: {listing.address}</p>
      <p>Price: {listing.price}</p>
      <p>Description: {listing.description}</p>
      
    </div>
  );
};

export default Listing;

