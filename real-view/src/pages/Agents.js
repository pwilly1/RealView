import React from 'react';
import Agent from '../components/Agent'; 
import '../css/directory.css'; 
import Header from "../components/Header"
import headshot from '../images/headshot.webp';
import agent1 from '../images/agent.webp';
import agent2 from '../images/agent2.jpg';
import agent3 from '../images/agent3.jpg';
import agent4 from '../images/agent4.jpg';
import agent5 from '../images/agent5.webp';
import agent6 from '../images/agent6.jpg';
import agent7 from '../images/agent7.jpeg';
import agent8 from '../images/agent8.jpg';

const AgentDirectory = () => {
  return (
    <main className="agents-page">
      <Header />
      <section className="agent-directory">
        <div className="container">
          <h2>Our Expert Agents</h2>
          <p className="directory-intro">
            Meet our team of experienced real estate professionals who are dedicated to helping you find your perfect home.
          </p>
          <div className="agent-grid">
            <Agent image={headshot} name="Paul Allen" contact="(555) 123-4567" email="paul.allen@realview.com" />
            <Agent image={agent1} name="John Doe" contact="(555) 234-5678" email="john.doe@realview.com" />
            <Agent image={agent2} name="Jane Smith" contact="(555) 345-6789" email="jane.smith@realview.com" />
            <Agent image={agent3} name="Emily Johnson" contact="(555) 456-7890" email="emily.johnson@realview.com" />
            <Agent image={agent4} name="Michael Brown" contact="(555) 567-8901" email="michael.brown@realview.com" />
            <Agent image={agent6} name="Sarah Davis" contact="(555) 678-9012" email="sarah.davis@realview.com" />
            <Agent image={agent5} name="Chris Lee" contact="(555) 789-0123" email="chris.lee@realview.com" />
            <Agent image={agent7} name="Patricia Garcia" contact="(555) 890-1234" email="patricia.garcia@realview.com" />
            <Agent image={agent8} name="Robert Martinez" contact="(555) 901-2345" email="robert.martinez@realview.com" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AgentDirectory;

