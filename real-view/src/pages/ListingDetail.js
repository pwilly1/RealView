import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import '../css/listingDetail.css';

const ListingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFeatured, setIsFeatured] = useState(false);

  // Featured listings data - moved to useMemo to fix dependency warning
  const featuredListings = useMemo(() => ({
    'featured-1': {
      image_name: 'Sunny Bungalow',
      price: '$405,000',
      address: '6789 Cedar Blvd, Columbia, SC, 29203',
      beds: '3',
      baths: '2',
      sqft: '2,200',
      year_built: '2018',
      property_type: 'Single-Family Home',
      listing_status: 'For Sale',
      features: ['Updated Kitchen', 'Hardwood Floors', 'Fenced Yard', 'Garage', 'Central AC'],
      img_name: '/src/images/house.jpeg'
    },
    'featured-2': {
      image_name: 'Private Retreat',
      price: '$500,000',
      address: '3456 Palm St, Columbia, SC, 29203',
      beds: '4',
      baths: '3',
      sqft: '3,100',
      year_built: '2020',
      property_type: 'Single-Family Home',
      listing_status: 'For Sale',
      features: ['Master Suite', 'Pool', 'Fireplace', 'Gourmet Kitchen', 'Large Lot'],
      img_name: '/src/images/house0.jpg'
    },
    'featured-3': {
      image_name: 'Modern Townhouse',
      price: '$330,000',
      address: '9876 Spruce Ln, Columbia, SC, 29203',
      beds: '2',
      baths: '2',
      sqft: '1,800',
      year_built: '2019',
      property_type: 'Townhouse',
      listing_status: 'For Sale',
      features: ['Modern Design', 'Balcony', 'Community Pool', 'Fitness Center', 'Low Maintenance'],
      img_name: '/src/images/house2.jpg'
    }
  }), []);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching listing with ID:', id);
        
        // Check if it's a featured listing
        if (featuredListings[id]) {
          console.log('Found featured listing:', id);
          setListing(featuredListings[id]);
          setIsFeatured(true);
          setLoading(false);
          return;
        }

        // Try different API endpoint patterns
        let response;
        let data;
        
        // Try the standard endpoint first
        try {
          console.log('Trying endpoint: /api/listings/' + id);
          response = await fetch(`https://react-backend-4pwh.onrender.com/api/listings/${id}`);
          console.log('API Response status:', response.status);
          
          if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
          }
          
          data = await response.json();
          console.log('API Response data:', data);
          
          // Handle different response structures
          if (data.listing) {
            setListing(data.listing);
          } else if (data._id || data.id) {
            // Direct listing object
            setListing(data);
          } else {
            throw new Error('Invalid response structure');
          }
          
          setIsFeatured(false);
        } catch (apiError) {
          console.error('API Error:', apiError);
          
          // Try alternative endpoint patterns
          try {
            console.log('Trying alternative endpoint: /api/listing/' + id);
            response = await fetch(`https://react-backend-4pwh.onrender.com/api/listing/${id}`);
            console.log('Alternative API Response status:', response.status);
            
            if (response.ok) {
              data = await response.json();
              console.log('Alternative API Response data:', data);
              
              if (data.listing) {
                setListing(data.listing);
              } else if (data._id || data.id) {
                setListing(data);
              } else {
                throw new Error('Invalid response structure');
              }
              setIsFeatured(false);
            } else {
              throw new Error(`Alternative endpoint failed: ${response.status}`);
            }
          } catch (altError) {
            console.error('Alternative endpoint error:', altError);
            throw new Error(`Listing not found. ID: ${id}. Please check if the listing exists.`);
          }
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchListing();
    } else {
      setError('No listing ID provided');
      setLoading(false);
    }
  }, [id, featuredListings]);

  if (loading) {
    return (
      <>
        <Header />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '60vh',
          fontSize: '1.2rem',
          color: '#1d3135'
        }}>
          Loading listing details...
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column',
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '60vh',
          gap: '20px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '1.2rem', color: '#dc3545', textAlign: 'center' }}>
            Error: {error}
          </div>
          <div style={{ fontSize: '1rem', color: '#6c757d', textAlign: 'center' }}>
            Listing ID: {id}
          </div>
          <button 
            onClick={() => navigate('/listings')}
            style={{
              background: 'linear-gradient(135deg, #1d3135, #2c4a52)',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '6px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          >
            Back to Listings
          </button>
        </div>
      </>
    );
  }

  if (!listing) {
    return (
      <>
        <Header />
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '60vh',
          fontSize: '1.2rem',
          color: '#1d3135'
        }}>
          Listing not found
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <div className="listing-detail-page">
        <div className="container">
          <button 
            onClick={() => navigate('/listings')}
            className="back-button"
          >
            <i className="fas fa-arrow-left"></i> Back to Listings
          </button>

          {isFeatured && (
            <div style={{
              background: 'linear-gradient(135deg, #28a745, #20c997)',
              color: 'white',
              padding: '15px 20px',
              borderRadius: '8px',
              marginBottom: '20px',
              textAlign: 'center',
              fontWeight: '500'
            }}>
              <i className="fas fa-star"></i> Featured Listing - This is a sample property for demonstration purposes
            </div>
          )}

          <div className="listing-detail-container">
            <div className="listing-images">
              <div className="main-image">
                <img 
                  src={listing.img_name } 
                  alt={listing.image_name || 'Property'} 
                />
              </div>
            </div>

            <div className="listing-info">
              <div className="listing-header">
                <h1 className="listing-title">{listing.image_name || 'Beautiful Property'}</h1>
                <div className="listing-price">{listing.price || '$0'}</div>
              </div>

              <div className="listing-address">
                <i className="fas fa-map-marker-alt"></i>
                {listing.address || 'Address not available'}
              </div>

              <div className="listing-stats">
                <div className="stat-item">
                  <i className="fas fa-bed"></i>
                  <span>{listing.beds || 'N/A'} Bedrooms</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-bath"></i>
                  <span>{listing.baths || 'N/A'} Bathrooms</span>
                </div>
                <div className="stat-item">
                  <i className="fas fa-ruler-combined"></i>
                  <span>{listing.sqft || 'N/A'} sq ft</span>
                </div>
                {listing.year_built && (
                  <div className="stat-item">
                    <i className="fas fa-calendar"></i>
                    <span>Built in {listing.year_built}</span>
                  </div>
                )}
              </div>

              {listing.property_type && (
                <div className="property-type">
                  <strong>Property Type:</strong> {listing.property_type}
                </div>
              )}

              {listing.listing_status && (
                <div className="listing-status">
                  <strong>Status:</strong> 
                  <span className={`status-badge ${listing.listing_status.toLowerCase().replace(' ', '-')}`}>
                    {listing.listing_status}
                  </span>
                </div>
              )}

              {listing.features && listing.features.length > 0 && (
                <div className="features-section">
                  <h3>Features</h3>
                  <div className="features-grid">
                    {listing.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <i className="fas fa-check"></i>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="contact-section">
                <h3>Interested in this property?</h3>
                <div className="contact-buttons">
                  <button className="contact-btn primary">
                    <i className="fas fa-phone"></i>
                    Contact Agent
                  </button>
                  <button className="contact-btn secondary">
                    <i className="fas fa-envelope"></i>
                    Schedule Viewing
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="map-section">
            <h3>Location</h3>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.533828329022!2d-122.4194156846819!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a80f1b2d%3A0x5a3d4a89e16e7d8a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1636927930927!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDetail;
