import React from 'react';
import "../css/home.css";
import Listing from "./Listing";
import house1 from "../images/house.jpeg"
import house2 from "../images/house0.jpg"
import house3 from "../images/house2.jpg"

const FeaturedListings = () => {
  return (
    <section className="featured-listings">
      <h2>Featured Listings</h2>
      <div className="listing-grid">
      <Listing
        image={house1}
        title={"Sunny Bungalow"}
        address={"6789 Cedar Blvd, Columbia, SC, 29203"}
        price={"$405,000"}
        bedrooms={"3"}
        bathrooms={"2"}
      />
      <Listing
        image={house2}
        title={"Private Retreat"}
        address={"3456 Palm St, Columbia, SC, 29203"}
        price={"$500,000"}
        bedrooms={"4"}
        bathrooms={"3"}
      />
      <Listing
        image={house3}
        title={"Modern Townhouse"}
        address={"9876 Spruce Ln, Columbia, SC, 29203"}
        price={"$330,000"}
        bedrooms={"2"}
        bathrooms={"2"}
      />
      </div>
    </section>
  );
};

export default FeaturedListings;
