import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Listings from './pages/Listings';
import About from './pages/About';
import Agents from './pages/Agents';
import Stats from './pages/Stats';
import Sell from './pages/Sell';
import Layout from './Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/about" element={<About />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/sell" element={<Sell />} />
        </Routes>
      </div>
    </Router>
    </BrowserRouter>
  );
}

root.render(
    <App />
  );

export default App;
