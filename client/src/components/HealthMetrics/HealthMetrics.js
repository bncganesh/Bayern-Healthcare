import React, { useState, useEffect } from "react";
import Sidebar from "../Sidebar/Sidebar";

const HealthMetrics = () => {
    const [metrics, setMetrics] = useState({
        heartRate: 82.83,
        bodyTemp: 33.9,
        bloodGlucose: 114.77,
    });

    const [newMetric, setNewMetric] = useState({
        heartRate: "",
        bodyTemp: "",
        bloodGlucose: "",
    });

    const handleChange = (e) => {
        setNewMetric({ ...newMetric, [e.target.name]: e.target.value });
    };

    const submitMetrics = () => {
        setMetrics({
            heartRate: parseFloat(newMetric.heartRate) || metrics.heartRate,
            bodyTemp: parseFloat(newMetric.bodyTemp) || metrics.bodyTemp,
            bloodGlucose: parseFloat(newMetric.bloodGlucose) || metrics.bloodGlucose,
        });
    };

    return (
        <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
            <main className="health-metrics-container">
                <div>
                    <h2>Health Metrics</h2>
                    <div>
                        <p>Heart Rate: {metrics.heartRate} bpm</p>
                        <p>Body Temperature: {metrics.bodyTemp} °C</p>
                        <p>Blood Glucose: {metrics.bloodGlucose} mg/dL</p>
                    </div>

                    <h3>Log New Metrics</h3>
                    <input type="number" name="heartRate" placeholder="Heart Rate" onChange={handleChange} />
                    <br/>
                    <br/>
                    <input type="number" name="bodyTemp" placeholder="Body Temperature" onChange={handleChange} />
                    <br/>
                    <br/>
                    <input type="number" name="bloodGlucose" placeholder="Blood Glucose" onChange={handleChange} />
                    <br/>
                    <br/>
                    <button onClick={submitMetrics}>Submit</button>
                </div>
            </main>
        </div>
    );
};

export default HealthMetrics;
