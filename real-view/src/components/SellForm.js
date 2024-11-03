import React, { useState } from 'react';
import '../css/sell.css'; 

const SellForm = () => {
  const [resultMessage, setResultMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultMessage('Submitting property...');

    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    const json = JSON.stringify(formObject);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      if (response.ok) {
        setResultMessage('Property successfully submitted');
      } else {
        setResultMessage('Sorry, there was an error submitting your property');
      }
    } catch (error) {
      console.error('Error:', error);
      setResultMessage('Error sending property data');
    }
  };

  return (
    <section>
      <h2>List Your Property as a Seller</h2>
      <form id="sellerForm" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value="7c839499-8fc9-4611-9330-db161dbe69c3" />
        <label htmlFor="sellerName">Your Name:</label>
        <input type="text" id="sellerName" name="sellerName" required />
        <label htmlFor="sellerEmail">Your Email:</label>
        <input type="email" id="sellerEmail" name="sellerEmail" required />
        <label htmlFor="propertyName">Property Name/Title:</label>
        <input type="text" id="propertyName" name="propertyName" required />
        <label htmlFor="price">Price (in USD):</label>
        <input type="number" id="price" name="price" required />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" required></textarea>
        <label htmlFor="address">Address:</label>
        <input type="text" id="address" name="address" required />
        <label htmlFor="bedrooms">Number of Bedrooms:</label>
        <input type="number" id="bedrooms" name="bedrooms" required />
        <label htmlFor="bathrooms">Number of Bathrooms:</label>
        <input type="number" id="bathrooms" name="bathrooms" required />
        <label htmlFor="sqft">Square Footage:</label>
        <input type="number" id="sqft" name="sqft" required />
        <label htmlFor="image">Upload Property Image:</label>
        <input type="file" id="image" name="image" accept="image/*" />
        <button type="submit">Submit property for review</button>
        <p id="result">{resultMessage}</p>
      </form>
    </section>
  );
};

export default SellForm;
