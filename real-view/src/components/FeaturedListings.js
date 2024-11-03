import React from 'react';
import "../css/home.css"

const FeaturedListings = () => {
  return (
    <section className="featured-listings">
      <h2>Featured Listings</h2>
      <div className="listing-grid">
        <div className="listing-box"><img src="images/house.jpeg" alt="House 1" /></div>
        <div className="listing-box"><img src="images/house2.jpg" alt="House 2" /></div>
        <div className="listing-box"><img src="images/house3.jpg" alt="House 3" /></div>
      </div>
    </section>
  );
};

export default FeaturedListings;
