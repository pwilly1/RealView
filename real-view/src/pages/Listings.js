import React from 'react';
import Header from '../components/Header';
import Listing from '../components/Listing';
import '../css/listings.css';

const Listings = () => {
  // Example listing data
  const listingsData = [
    {
      id: 1,
      image: 'images/house.jpeg',
      title: 'Beautiful Family Home',
      location: 'New York, NY',
      price: '$500,000',
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      id: 2,
      image: 'images/house2.jpg',
      title: 'Modern Apartment',
      location: 'Los Angeles, CA',
      price: '$750,000',
      bedrooms: 2,
      bathrooms: 1,
    },
    {
      id: 3,
      image: 'images/house3.jpg',
      title: 'Luxury Condo',
      location: 'Miami, FL',
      price: '$1,200,000',
      bedrooms: 4,
      bathrooms: 3,
    },
  ];

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
            <Listing
              title={"title"}
              location={"l"}
              price={"p"}
              bedrooms={"b"}
              bathrooms={"b"}
            />
        </div>
      </main>
    </div>
  );
};

export default Listings;

