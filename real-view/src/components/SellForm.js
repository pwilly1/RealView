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
    <section style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ 
        textAlign: 'center', 
        color: '#1d3135', 
        marginBottom: '30px',
        fontSize: '2rem',
        fontWeight: '600'
      }}>
        List Your Property as a Seller
      </h2>
      
      <form 
        id="sellerForm" 
        onSubmit={handleSubmit} 
        encType="multipart/form-data"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          background: 'white',
          padding: '30px',
          borderRadius: '12px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          border: '1px solid #e9ecef'
        }}
      >
        {/* Basic Information Section */}
        <div style={{ 
          borderBottom: '2px solid #f8f9fa', 
          paddingBottom: '20px',
          marginBottom: '20px'
        }}>
          <h3 style={{ 
            color: '#1d3135', 
            marginBottom: '15px',
            fontSize: '1.3rem',
            fontWeight: '600'
          }}>
            Basic Information
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="price" style={{ 
                fontWeight: '600', 
                color: '#1d3135', 
                fontSize: '0.9rem' 
              }}>
                Price (USD):
              </label>
              <input
                type="text"
                id="price"
                name="price"
                required
                pattern="^\$\d{1,3}(,\d{3})*(\.\d{2})?$"
                title="Enter price in format: $123,456.78"
                placeholder="$500,000"
                style={{
                  padding: '12px',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#28a745'}
                onBlur={(e) => e.target.style.borderColor = '#ced4da'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="propertyType" style={{ 
                fontWeight: '600', 
                color: '#1d3135', 
                fontSize: '0.9rem' 
              }}>
                Property Type:
              </label>
              <select 
                id="propertyType" 
                name="property_type" 
                required
                style={{
                  padding: '12px',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  backgroundColor: 'white',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#28a745'}
                onBlur={(e) => e.target.style.borderColor = '#ced4da'}
              >
                <option value="">Select Property Type</option>
                <option value="Single-Family Home">Single-Family Home</option>
                <option value="Townhouse">Townhouse</option>
                <option value="Condo">Condo</option>
                <option value="Apartment">Apartment</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '20px' }}>
            <label htmlFor="address" style={{ 
              fontWeight: '600', 
              color: '#1d3135', 
              fontSize: '0.9rem' 
            }}>
              Address:
            </label>
            <input 
              type="text" 
              id="address" 
              name="address" 
              required 
              placeholder="123 Main St, City, State, ZIP"
              style={{
                padding: '12px',
                border: '1px solid #ced4da',
                borderRadius: '6px',
                fontSize: '0.9rem',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#28a745'}
              onBlur={(e) => e.target.style.borderColor = '#ced4da'}
            />
          </div>
        </div>

        {/* Property Details Section */}
        <div style={{ 
          borderBottom: '2px solid #f8f9fa', 
          paddingBottom: '20px',
          marginBottom: '20px'
        }}>
          <h3 style={{ 
            color: '#1d3135', 
            marginBottom: '15px',
            fontSize: '1.3rem',
            fontWeight: '600'
          }}>
            Property Details
          </h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="bedrooms" style={{ 
                fontWeight: '600', 
                color: '#1d3135', 
                fontSize: '0.9rem' 
              }}>
                Bedrooms:
              </label>
              <input 
                type="number" 
                id="beds" 
                name="beds" 
                required 
                min="1"
                placeholder="3"
                style={{
                  padding: '12px',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#28a745'}
                onBlur={(e) => e.target.style.borderColor = '#ced4da'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="bathrooms" style={{ 
                fontWeight: '600', 
                color: '#1d3135', 
                fontSize: '0.9rem' 
              }}>
                Bathrooms:
              </label>
              <input 
                type="number" 
                id="baths" 
                name="baths" 
                required 
                min="1"
                step="0.5"
                placeholder="2.5"
                style={{
                  padding: '12px',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#28a745'}
                onBlur={(e) => e.target.style.borderColor = '#ced4da'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="sqft" style={{ 
                fontWeight: '600', 
                color: '#1d3135', 
                fontSize: '0.9rem' 
              }}>
                Square Footage:
              </label>
              <input 
                type="number" 
                id="sqft" 
                name="sqft" 
                required 
                min="100"
                placeholder="2,500"
                style={{
                  padding: '12px',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#28a745'}
                onBlur={(e) => e.target.style.borderColor = '#ced4da'}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="yearBuilt" style={{ 
                fontWeight: '600', 
                color: '#1d3135', 
                fontSize: '0.9rem' 
              }}>
                Year Built:
              </label>
              <input
                type="number"
                id="yearBuilt"
                name="year_built"
                required
                min="1800"
                max={new Date().getFullYear()}
                placeholder="2020"
                style={{
                  padding: '12px',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#28a745'}
                onBlur={(e) => e.target.style.borderColor = '#ced4da'}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label htmlFor="listingStatus" style={{ 
                fontWeight: '600', 
                color: '#1d3135', 
                fontSize: '0.9rem' 
              }}>
                Listing Status:
              </label>
              <select 
                id="listingStatus" 
                name="listing_status" 
                required
                style={{
                  padding: '12px',
                  border: '1px solid #ced4da',
                  borderRadius: '6px',
                  fontSize: '0.9rem',
                  backgroundColor: 'white',
                  transition: 'border-color 0.3s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = '#28a745'}
                onBlur={(e) => e.target.style.borderColor = '#ced4da'}
              >
                <option value="">Select Status</option>
                <option value="For Sale">For Sale</option>
                <option value="Sold">Sold</option>
                <option value="Pending">Pending</option>
                <option value="Off Market">Off Market</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Information Section */}
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ 
            color: '#1d3135', 
            marginBottom: '15px',
            fontSize: '1.3rem',
            fontWeight: '600'
          }}>
            Additional Information
          </h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            <label htmlFor="features" style={{ 
              fontWeight: '600', 
              color: '#1d3135', 
              fontSize: '0.9rem' 
            }}>
              Features (comma-separated):
            </label>
            <input 
              type="text" 
              id="features" 
              name="features" 
              required 
              placeholder="Pool, Garage, Fireplace, Hardwood Floors"
              style={{
                padding: '12px',
                border: '1px solid #ced4da',
                borderRadius: '6px',
                fontSize: '0.9rem',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#28a745'}
              onBlur={(e) => e.target.style.borderColor = '#ced4da'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <label htmlFor="image" style={{ 
              fontWeight: '600', 
              color: '#1d3135', 
              fontSize: '0.9rem' 
            }}>
              Upload Property Image:
            </label>
            <input 
              type="file" 
              id="image" 
              name="image" 
              accept="image/*" 
              required
              style={{
                padding: '8px',
                border: '2px dashed #ced4da',
                borderRadius: '6px',
                fontSize: '0.9rem',
                backgroundColor: '#f8f9fa',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = '#28a745'}
              onBlur={(e) => e.target.style.borderColor = '#ced4da'}
            />
          </div>
        </div>

        <button 
          type="submit"
          style={{
            background: 'linear-gradient(135deg, #1d3135, #2c4a52)',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '10px'
          }}
          onMouseOver={(e) => {
            e.target.style.transform = 'translateY(-2px)';
            e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          Submit Property for Review
        </button>
        
        {resultMessage && (
          <p id="result" style={{ 
            fontSize: '0.9rem', 
            margin: '10px 0 0 0',
            padding: '10px',
            borderRadius: '6px',
            textAlign: 'center',
            fontWeight: '500',
            backgroundColor: resultMessage.includes('Error') ? '#f8d7da' : '#d4edda',
            color: resultMessage.includes('Error') ? '#721c24' : '#155724',
            border: `1px solid ${resultMessage.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`
          }}>
            {resultMessage}
          </p>
        )}
      </form>
      
      <div className="map-container" style={{ marginTop: '30px' }}>
                      <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.533828329022!2d-122.4194156846819!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a80f1b2d%3A0x5a3d4a89e16e7d8a!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1636927930927!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Location Map"
              ></iframe>
      </div>
    </section>
  );
};

export default SellForm;
