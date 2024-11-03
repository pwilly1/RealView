import React from 'react';
import Header from '../components/Header';
import Listing from '../components/Listing';
import '../css/listings.css';

const Listings = () => {
  
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
        image={"images/house0.jpg"}
        title={"Cozy Family Home"}
        address={"1234 Oak St, Columbia, SC, 29203"}
        price={"$400,000"}
        bedrooms={"3"}
        bathrooms={"2"}
      />
      <Listing
        image={"images/house.jpeg"}
        title={"Modern Luxury Villa"}
        address={"5678 Pine Ave, Columbia, SC, 29203"}
        price={"$535,000"}
        bedrooms={"4"}
        bathrooms={"3"}
      />
      <Listing
        image={"images/house2.jpg"}
        title={"Charming Townhouse"}
        address={"910 Birch Rd, Columbia, SC, 29203"}
        price={"$315,000"}
        bedrooms={"2"}
        bathrooms={"1.5"}
      />
      <Listing
        image={"images/house3.jpg"}
        title={"Spacious Single-Family Home"}
        address={"4321 Elm St, Columbia, SC, 29203"}
        price={"$390,000"}
        bedrooms={"3"}
        bathrooms={"2"}
      />
      <Listing
        image={"images/house4.jpg"}
        title={"Renovated Home"}
        address={"7890 Maple Dr, Columbia, SC, 29203"}
        price={"$315,000"}
        bedrooms={"2"}
        bathrooms={"1"}
      />
      <Listing
        image={"images/house5.jpg"}
        title={"Sunny Bungalow"}
        address={"6789 Cedar Blvd, Columbia, SC, 29203"}
        price={"$405,000"}
        bedrooms={"3"}
        bathrooms={"2"}
      />
      <Listing
        image={"images/house0.jpg"}
        title={"Private Retreat"}
        address={"3456 Palm St, Columbia, SC, 29203"}
        price={"$500,000"}
        bedrooms={"4"}
        bathrooms={"3"}
      />
      <Listing
        image={"images/house2.jpg"}
        title={"Modern Townhouse"}
        address={"9876 Spruce Ln, Columbia, SC, 29203"}
        price={"$330,000"}
        bedrooms={"2"}
        bathrooms={"2"}
      />
            </div>
      </main>
    </div>
  );
};

export default Listings;

