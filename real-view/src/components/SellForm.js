import React, { useState } from 'react';
import '../css/sell.css';

const SellForm = () => {
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultMessage('Submitting property...');
  
    const formData = new FormData(e.target); // Use FormData for file uploads
    const featuresArray = formData.get('features')?.split(',').map((f) => f.trim()) || [];
    formData.delete('features'); // Remove the string version of features
    featuresArray.forEach((feature) => formData.append('features', feature)); // Add each feature as an array item
  
    try {
      const response = await fetch('https://react-backend-4pwh.onrender.com/api/listings', {
        method: 'POST',
        body: formData, // Send FormData directly
      });
  
      const data = await response.json();
      if (response.ok) {
        setResultMessage('Property successfully submitted');
      } else {
        setResultMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      setResultMessage('Error sending property data');
    }
  };
  

  return (
    <section>
      <h2>List Your Property as a Seller</h2>
      <form id="sellerForm" onSubmit={handleSubmit} encType="multipart/form-data">

        <label htmlFor="price">Price (in USD):</label>
        <input
          type="text"
          id="price"
          name="price"
          required
          pattern="^\$\d{1,3}(,\d{3})*(\.\d{2})?$"
          title="Enter price in format: $123,456.78"
        />

        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />

        <label htmlFor="bedrooms">Number of Bedrooms:</label>
        <input type="number" id="beds" name="beds" required />

        <label htmlFor="bathrooms">Number of Bathrooms:</label>
        <input type="number" id="baths" name="baths" required />

        <label htmlFor="sqft">Square Footage:</label>
        <input type="number" id="sqft" name="sqft" required />

        <label htmlFor="yearBuilt">Year Built:</label>
        <input
          type="number"
          id="yearBuilt"
          name="year_built"
          required
          min="1800"
          max={new Date().getFullYear()}
          placeholder="Enter the year built"
        />
         <label htmlFor="propertyType">Property Type:</label>
        <select id="propertyType" name="property_type" required>
          <option value="">Select Property Type</option>
          <option value="Single-Family Home">Single-Family Home</option>
          <option value="Townhouse">Townhouse</option>
          <option value="Condo">Condo</option>
          <option value="Apartment">Apartment</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="listingStatus">Listing Status:</label>
        <select id="listingStatus" name="listing_status" required>
          <option value="">Select Listing Status</option>
          <option value="For Sale">For Sale</option>
          <option value="Sold">Sold</option>
          <option value="Pending">Pending</option>
          <option value="Off Market">Off Market</option>
        </select>

        <label htmlFor="features">Features (comma-separated):</label>
        <input type="text" id="features" name="features" required />

        <label htmlFor="image">Upload Property Image:</label>
        <input type="file" id="image" name="image" accept="image/*" required />

        <button type="submit">Submit property for review</button>
        <p id="result">{resultMessage}</p>
      </form>
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.533828329022!2d-122.4194156846819!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a80f1b2d%3A0x5a3d4a89e16e7d8a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1636927930927!5m2!1sen!2sus"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

    </section>
  );
};

export default SellForm;
