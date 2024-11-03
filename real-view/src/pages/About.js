import React from 'react';
import Header from "../components/Header";
import "../css/about.css"
const About = () => {
  return (
    <div>
    <Header />
        <section class="about-us">
            <h2>About Us</h2>
            <p><em>"At HomeView Realty, our mission is to simplify the real 
                estate experience by connecting people with their dream properties 
                through our up to date real time data and personalized service."</em></p>
            <h3>Company Overview</h3>

            <p>
                    HomeView Realty is a modern real estate platform designed to transform the way people buy, sell, and invest
                    in properties. Made with a vision to make real estate accessible and understandable for everyone. HomeView 
                    Realty uses the latest in digital tech to offer a wide range of property listings, market 
                    statistics, and resources.
            </p>
            <p>
                Our platform serves as a one stop solution for anyone interested in real estate, whether your a first-time homebuyer, seasoned 
                investor or even real estate agents looking to expand their business. We prioritize building strong relationships with our clients while having a 
                focus on transparency and trust, by providing people with the data and tools they need to 
                make confident decisions. Whether it’s through our detailed property listings, insightful market analysis, or personalized 
                support, HomeView Realty is dedicated to helping individuals and families find the right home and investment opportunities.
            </p>

            <div class="buttons">
                <a href="contact.html" class="button">Contact Us</a>
                <a href="#" class="button">Join our Team</a>
            </div>
        </section>
    </div>
  );
};

export default About;
