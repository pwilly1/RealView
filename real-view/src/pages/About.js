import React from 'react';
import "../css/about.css"
import Header from "../components/Header";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <section className="about-us">
        <div className="container">
          <h2>About RealView</h2>
          <div className="mission-statement">
            <p><em>"At RealView, our mission is to simplify the real 
                estate experience by connecting people with their dream properties 
                through our up-to-date real-time data and personalized service."</em></p>
          </div>
          
          <div className="company-overview">
            <h3>Company Overview</h3>
            <p>
              RealView is a modern real estate platform designed to transform the way people buy, sell, and invest
              in properties. Built with a vision to make real estate accessible and understandable for everyone, RealView 
              uses the latest digital technology to offer a comprehensive range of property listings, market 
              statistics, and resources.
            </p>
            <p>
              Our platform serves as a one-stop solution for anyone interested in real estate, whether you're a first-time homebuyer, seasoned 
              investor, or real estate agent looking to expand your business. We prioritize building strong relationships with our clients while maintaining a 
              focus on transparency and trust, providing people with the data and tools they need to 
              make confident decisions.
            </p>
            <p>
              Whether it's through our detailed property listings, insightful market analysis, or personalized 
              support, RealView is dedicated to helping individuals and families find the right home and investment opportunities.
            </p>
          </div>

          <div className="values-section">
            <h3>Our Values</h3>
            <div className="values-grid">
              <div className="value-item">
                <i className="fas fa-handshake"></i>
                <h4>Trust & Integrity</h4>
                <p>We believe in building lasting relationships through honest, transparent communication and ethical business practices.</p>
              </div>
              <div className="value-item">
                <i className="fas fa-users"></i>
                <h4>Customer Focus</h4>
                <p>Our customers are at the heart of everything we do. We're committed to providing exceptional service and support.</p>
              </div>
              <div className="value-item">
                <i className="fas fa-lightbulb"></i>
                <h4>Innovation</h4>
                <p>We continuously strive to improve our platform with cutting-edge technology and user-friendly solutions.</p>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h3>Join Our Team</h3>
            <p>We're always looking for passionate individuals to join our growing team.</p>
            <div className="buttons">
              <button className="btn">Join our Team</button>
              <button className="btn btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
