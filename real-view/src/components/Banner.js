import React from 'react';
import "../css/home.css";

const Banner = () => {
  return (
    <div id="banner">
      <section className="search-section" >
        <div className="search-group">
          <input type="text" placeholder="Search by Location" id="search-location" />
          <select>
            <option value="">Property Type</option>
            <option value="house">House</option>
            <option value="apartment">Apartment</option>
            <option value="condo">Condo</option>
          </select>
          <select>
            <option value="">Price Range</option>
            <option value="0-50000">$0 - $50,000</option>
            <option value="50000-100000">$50,000 - $100,000</option>
            <option value="100000-200000">$100,000 - $200,000</option>
            <option value="200000+">$200,000+</option>
          </select>
          <button><i className="fa fa-search"></i> Search</button>
        </div>
      </section>
    </div>
  );
};

export default Banner;
