import React from 'react';
import Agent from '../components/Agent'; 
import '../css/directory.css'; 
import Header from "../components/Header"
const AgentDirectory = () => {
  return (
    <main>
        <Header />
      <section className="agent-directory">
        <h2>Agent Directory</h2>
        <div className="agent-grid">
          <Agent image="images/headshot.webp" name="Paul Allen" contact="(XXX) XXX-XXXX" />
          <Agent image="images/agent.webp" name="John Doe" contact="(XXX) XXX-XXXX" />
          <Agent image="images/agent2.jpg" name="Jane Smith" contact="(XXX) XXX-XXXX" />
          <Agent image="images/agent3.jpg" name="Emily Johnson" contact="(XXX) XXX-XXXX" />
          <Agent image="images/agent4.jpg" name="Michael Brown" contact="(XXX) XXX-XXXX" />
          <Agent image="images/agent6.jpg" name="Sarah Davis" contact="(XXX) XXX-XXXX" />
          <Agent image="images/agent5.webp" name="Chris Lee" contact="(XXX) XXX-XXXX" />
          <Agent image="images/agent7.jpeg" name="Patricia Garcia" contact="(XXX) XXX-XXXX" />
          <Agent image="images/agent8.jpg" name="Robert Martinez" contact="(XXX) XXX-XXXX" />
        </div>
      </section>
    </main>
  );
};

export default AgentDirectory;

