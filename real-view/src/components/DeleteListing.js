import React from "react";

const DeleteListing = ({ listingId, onDelete }) => {
  const handleDelete = async () => {
    console.log(`Deleting listing with ID: ${listingId}`);
    try {
      const response = await fetch(`https://react-backend-4pwh.onrender.com/api/listings/${listingId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        onDelete(listingId);
      } else {
        const error = await response.json();
        console.error("Failed to delete listing:", error);
      }
    } catch (err) {
      console.error("Error deleting listing:", err);
    }
  };

  return (
    <button onClick={handleDelete} className="delete">
      Delete Listing
    </button>
  );
};

export default DeleteListing;


