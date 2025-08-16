import React, { useState } from 'react';
import "../css/home.css";

const Banner = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    propertyType: '',
    priceRange: ''
  });

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality here
    console.log('Search data:', searchData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div id="banner">
      <section className="search-section">
        <div className="search-group">
          <form onSubmit={handleSearch} style={{ display: 'flex', gap: '15px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', maxWidth: '800px', width: '100%' }}>
            <input 
              type="text" 
              placeholder="Search by Location" 
              name="location"
              value={searchData.location}
              onChange={handleInputChange}
            />
            <select 
              name="propertyType"
              value={searchData.propertyType}
              onChange={handleInputChange}
            >
              <option value="">Property Type</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="condo">Condo</option>
              <option value="townhouse">Townhouse</option>
              <option value="land">Land</option>
            </select>
            <select 
              name="priceRange"
              value={searchData.priceRange}
              onChange={handleInputChange}
            >
              <option value="">Price Range</option>
              <option value="0-100000">$0 - $100,000</option>
              <option value="100000-200000">$100,000 - $200,000</option>
              <option value="200000-300000">$200,000 - $300,000</option>
              <option value="300000-500000">$300,000 - $500,000</option>
              <option value="500000+">$500,000+</option>
            </select>
            <button type="submit">
              <i className="fas fa-search"></i> Search
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Banner;
