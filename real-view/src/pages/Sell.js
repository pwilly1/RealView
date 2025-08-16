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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch listings on component mount
  useEffect(() => {
    fetchListings();
  }, []);

  const fetchListings = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://react-backend-4pwh.onrender.com/api/listings");
      setListings(response.data);
    } catch (error) {
      console.error("Error fetching listings:", error);
      setError('Failed to fetch listings');
    } finally {
      setLoading(false);
    }
  };

  // Handle adding a new listing
  const handleNewListing = (newListing) => {
    setListings((prevListings) => [...prevListings, newListing]);
    setShowSellerForm(false); // Hide form after successful submission
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
      <section className="sell-container">
        <div className="container">
          <h2>Manage Your Listings</h2>
          <p className="sell-intro">
            List your property with RealView and reach thousands of potential buyers. 
            Our platform makes it easy to showcase your property and connect with serious buyers.
          </p>
          
          <div className="action-section">
            <button 
              className="btn toggle-form-btn" 
              onClick={() => setShowSellerForm((prev) => !prev)}
            >
              {showSellerForm ? (
                <>
                  <i className="fas fa-times"></i> Hide Form
                </>
              ) : (
                <>
                  <i className="fas fa-plus"></i> Add New Listing
                </>
              )}
            </button>
          </div>

          {showSellerForm && (
            <div className="form-section">
              <SellForm onNewListing={handleNewListing} />
            </div>
          )}

          <section className="listing-management">
            <h3>Your Current Listings</h3>
            
            {loading && (
              <div className="loading-state">
                <i className="fas fa-spinner fa-spin"></i>
                <p>Loading your listings...</p>
              </div>
            )}
            
            {error && (
              <div className="error-state">
                <i className="fas fa-exclamation-triangle"></i>
                <p>{error}</p>
                <button className="btn btn-secondary" onClick={fetchListings}>
                  Try Again
                </button>
              </div>
            )}
            
            {!loading && !error && listings.length === 0 && (
              <div className="empty-state">
                <i className="fas fa-home"></i>
                <p>You haven't listed any properties yet.</p>
                <p>Click "Add New Listing" to get started!</p>
              </div>
            )}
            
            {!loading && !error && listings.length > 0 && (
              <div className="listing-grid">
                {listings.map((listing) => (
                  <div key={listing._id} className="listing-item">
                    <div className="listing-image">
                      <img src={listing.img_name} alt={listing.address} />
                    </div>
                    <div className="listing-details">
                      <h4>{listing.address}</h4>
                      <div className="listing-info">
                        <span><i className="fas fa-dollar-sign"></i> {listing.price}</span>
                        <span><i className="fas fa-bed"></i> {listing.beds} Beds</span>
                        <span><i className="fas fa-bath"></i> {listing.baths} Baths</span>
                        <span><i className="fas fa-ruler-combined"></i> {listing.sqft} sqft</span>
                      </div>
                      <div className="listing-actions">
                        <EditListing listing={listing} onUpdate={handleUpdate} />
                        <DeleteListing listingId={listing._id} onDelete={handleDelete} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
};

export default Sell;


