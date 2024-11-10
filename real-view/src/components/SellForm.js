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
