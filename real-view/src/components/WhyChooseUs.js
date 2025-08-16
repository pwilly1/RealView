import React from 'react';

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h2>Why Choose RealView?</h2>
      <div className="choose-box">
        <div className="choose-item">
          <i className="fas fa-user-tie"></i>
          <h3>Trusted Agents</h3>
          <p>Our experienced real estate professionals are committed to providing personalized service and expert guidance throughout your property journey.</p>
        </div>
        <div className="choose-item">
          <i className="fas fa-home"></i>
          <h3>Wide Selection</h3>
          <p>Browse through thousands of carefully curated properties across all neighborhoods, from cozy starter homes to luxury estates.</p>
        </div>
        <div className="choose-item">
          <i className="fas fa-chart-line"></i>
          <h3>Market Expertise</h3>
          <p>Stay informed with real-time market data, trends, and insights to make confident decisions about your real estate investments.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
