import React, { useState } from "react";

const EditListing = ({ listing, onUpdate }) => {
  const [formData, setFormData] = useState({ ...listing });
  const [resultMessage, setResultMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Only include price and address in the payload
    const updateData = {
      price: formData.price,
      address: formData.address,
    };
  
    try {
      const response = await fetch(`https://react-backend-4pwh.onrender.com/api/listings/${listing._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      });
  
      if (response.ok) {
        const data = await response.json();
        setResultMessage("Listing updated successfully!");
        onUpdate(data.listing); // Notify parent component
      } else {
        const error = await response.json();
        setResultMessage(`Error: ${error.message}`);
      }
    } catch (err) {
      setResultMessage("An error occurred while updating the listing.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontWeight: '600', color: '#1d3135', fontSize: '0.9rem' }}>
          Price:
        </label>
        <input 
          type="text" 
          name="price" 
          value={formData.price} 
          onChange={handleChange} 
          required 
          style={{
            padding: '8px 12px',
            border: '1px solid #ced4da',
            borderRadius: '6px',
            fontSize: '0.9rem',
            width: '100%',
            boxSizing: 'border-box'
          }}
          placeholder="Enter price"
        />
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <label style={{ fontWeight: '600', color: '#1d3135', fontSize: '0.9rem' }}>
          Address:
        </label>
        <input 
          type="text" 
          name="address" 
          value={formData.address} 
          onChange={handleChange} 
          required 
          style={{
            padding: '8px 12px',
            border: '1px solid #ced4da',
            borderRadius: '6px',
            fontSize: '0.9rem',
            width: '100%',
            boxSizing: 'border-box'
          }}
          placeholder="Enter address"
        />
      </div>
      
      <button 
        type="submit"
        style={{
          background: 'linear-gradient(135deg, #1d3135, #2c4a52)',
          color: 'white',
          border: 'none',
          padding: '10px 16px',
          borderRadius: '6px',
          fontSize: '0.9rem',
          fontWeight: '500',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginTop: '5px'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'translateY(-1px)';
          e.target.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.2)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'translateY(0)';
          e.target.style.boxShadow = 'none';
        }}
      >
        Update Listing
      </button>
      
      {resultMessage && (
        <p style={{ 
          fontSize: '0.85rem', 
          margin: '5px 0 0 0',
          color: resultMessage.includes('Error') ? '#dc3545' : '#28a745',
          fontWeight: '500'
        }}>
          {resultMessage}
        </p>
      )}
    </form>
  );
};

export default EditListing;
