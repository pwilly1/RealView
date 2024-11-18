import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";  
import Header from '../components/Header';
import Listing from '../components/Listing';
import '../css/listings.css';

const Listings = () => {

  const [listings, setlistings] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://react-backend-4pwh.onrender.com/api/listings");
      setlistings(response.data);
    })();
  }, []); 
  
  return (
    <div className="property-listings-page">
      <Header />
      <main className="property-listings">
        <h2>Property Listings</h2>
        
        <section className="filter-section">
          <button>Apply Filters</button>
          <select>
            <option>Location</option>
          </select>
          <select>
            <option>Price Range</option>
          </select>
          <select>
            <option>Property Type</option>
          </select>
          <select>
            <option>Bedrooms</option>
          </select>
          <select>
            <option>Bathrooms</option>
          </select>
          <select>
            <option>Amenities</option>
          </select>
          <div className="map-placeholder">
            <p>Property Locations Map</p>
            <div className="map-circle"></div>
          </div>
        </section>
        <div className="listing-grid">
          {listings.map((listing) => (
            <Listing
              image={listing.img_name} 
              title={listing.image_name} 
              address={listing.address} 
              price={listing.price} 
              beds={listing.beds}
              baths={listing.baths}
              sqft={listing.sqft}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Listings;

