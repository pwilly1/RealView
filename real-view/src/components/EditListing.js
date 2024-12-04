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
    <form onSubmit={handleSubmit}>
      <input type="text" name="price" value={formData.price} onChange={handleChange} required />
      <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      {}
      <button type="submit">Update Listing</button>
      <p>{resultMessage}</p>
    </form>
  );
};

export default EditListing;
