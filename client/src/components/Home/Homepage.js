import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="homepage">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">Bayer Healthcare</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/health-topics">Health Topics</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h2>Your Health, Our Priority</h2>
        <p>Explore the latest health information and resources from Bayer Healthcare.</p>
      </header>

      {/* Featured Health Topics */}
      <section className="featured-topics">
        <h3>Featured Health Topics</h3>
        <div className="topics">
          <div className="topic-card">
            <h4>COVID-19 Updates</h4>
            <p>Stay informed about the latest COVID-19 guidelines and vaccination information.</p>
            <button>Learn More</button>
          </div>
          <div className="topic-card">
            <h4>Heart Health</h4>
            <p>Discover tips and information for maintaining a healthy heart and cardiovascular system.</p>
            <button>Learn More</button>
          </div>
          <div className="topic-card">
            <h4>Mental Wellness</h4>
            <p>Explore resources and support options for maintaining good mental health.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
