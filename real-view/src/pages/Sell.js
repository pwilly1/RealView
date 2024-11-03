import React, { useState } from 'react';
import SellForm from '../components/SellForm'; 
import '../css/sell.css'; 
import Header from "../components/Header"
const Sell = () => {
  const [showSellerForm, setShowSellerForm] = useState(false);

  return (
    <main className="sell-page">
        <Header />
      <section className="choose-role">
        <h2>How Would You Like to Sell?</h2>
        <div className="options">
          <button onClick={() => setShowSellerForm(true)}>I’m a Seller</button>
          <button onClick={() => (window.location.href = 'admin-dashboard.html')}>I’m an Admin</button>
        </div>
      </section>
      {showSellerForm && <SellForm />}
    </main>
  );
};

export default Sell;

