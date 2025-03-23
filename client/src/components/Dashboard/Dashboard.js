import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve username from cache
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    } else {
      navigate('/'); // Redirect to Home if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser"); // Clear cache
    sessionStorage.clear(); // Additional cache clearing (optional)

    navigate('/', { replace: true }); // Redirect to Home

    // Prevent navigating back to the dashboard
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function () {
      navigate('/', { replace: true });
    };
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="content">
        <h1>Welcome, {username ? username : "Guest"}!</h1>

        {/* Health Metrics Section */}
        <section className="metrics">
          <h2>Health Metrics</h2>
          <div className="metrics-container">
            <div className="heart-rate">
              <p>Heart Rate</p>
              <div className="gauge">
                <span>82.83 bpm</span>
              </div>
            </div>
            <div className="metric-card">
              <p>Body Temperature</p>
              <h3>33.90 °C</h3>
            </div>
            <div className="metric-card">
              <p>Blood Glucose</p>
              <h3>114.77 mg/dL</h3>
            </div>
          </div>
        </section>

        {/* Health Tip Section */}
        <section className="health-tip">
          <h2>Health Tip of the Day</h2>
          <p>Stay hydrated! Aim to drink at least 8 glasses of water per day.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
