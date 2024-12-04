import React, { useState, useEffect } from "react";
import SellForm from "../components/SellForm";
import EditListing from "../components/EditListing";
import DeleteListing from "../components/DeleteListing";
import "../css/sell.css";
import Header from "../components/Header";
import axios from "axios";


const Sell = () => {
  const [listings, setListings] = useState([]);
  const [showSellerForm, setShowSellerForm] = useState(false);

  // Fetch listings on component mount
  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      const response = await axios.get("https://react-backend-4pwh.onrender.com/api/listings");
      setListings(response.data);
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  // Handle adding a new listing
  const handleNewListing = (newListing) => {
    setListings((prevListings) => [...prevListings, newListing]);
  };

  // Handle updates to an existing listing
  const handleUpdate = (updatedListing) => {
    setListings((prevListings) =>
      prevListings.map((listing) =>
        listing._id === updatedListing._id ? updatedListing : listing
      )
    );
  };

  // Handle deletion of a listing
  const handleDelete = (deletedId) => {
    setListings((prevListings) =>
      prevListings.filter((listing) => listing._id !== deletedId)
    );
  };

  return (
    <main className="sell-page">
      <Header />
      <section className="choose-role">
        <h2>Manage Your Listings</h2>
        <div className="options">
          <button onClick={() => setShowSellerForm((prev) => !prev)}>
            {showSellerForm ? "Hide Form" : "Add New Listing"}
          </button>
        </div>
      </section>

      {showSellerForm && <SellForm onNewListing={handleNewListing} />}

      <section className="listing-management">
        <h2>Your Listings</h2>
        <div className="listing-grid">
          {listings.map((listing) => (
            <div key={listing._id} className="listing-item">
              <img src={listing.img_name} alt={listing.address} />
              <h3>{listing.address}</h3>
              <p>Price: {listing.price}</p>
              <p>Beds: {listing.beds}</p>
              <p>Baths: {listing.baths}</p>
              <p>Sqft: {listing.sqft}</p>
              <EditListing listing={listing} onUpdate={handleUpdate} />
              <DeleteListing listingId={listing._id} onDelete={handleDelete} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Sell;


