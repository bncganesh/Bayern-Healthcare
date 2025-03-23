import React, { useState, useEffect } from "react";
import './Profile.css';
import Sidebar from "../Sidebar/Sidebar";

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: "Manzer Ahmad",
        age: "30",
        email: "manzer@gmail.com",
        phone: "8210005263",
        heartRate: "72",
        temperature: "36.5",
        bloodGlucose: "110",
        password: ""
    });

    // fetching profile data from an API
    useEffect(() => {
        const storedProfile = JSON.parse(localStorage.getItem("profile"));
        if (storedProfile) {
            setProfile(storedProfile);
        }
    }, []);

    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("profile", JSON.stringify(profile)); // saving data
        setIsEditing(false);
    };

    return (
        <div className="dashboard-container">
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
            <main className="content">
                <div className="profile-container-Box">
                    <div className="profile-container">
                        <h2 className="profile-header">Profile</h2>

                        {!isEditing ? (
                            <div>
                                <p><strong>Name:</strong> {profile.name}</p>
                                <p><strong>Age:</strong> {profile.age}</p>
                                <p><strong>Email:</strong> {profile.email}</p>
                                <p><strong>Phone:</strong> {profile.phone}</p>
                                <p><strong>Heart Rate:</strong> {profile.heartRate} bpm</p>
                                <p><strong>Temperature:</strong> {profile.temperature} °C</p>
                                <p><strong>Blood Glucose:</strong> {profile.bloodGlucose} mg/dL</p>
                                <button onClick={() => setIsEditing(true)}>Edit Profile</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <label>
                                    <div className="labelName">Name: </div>
                                    <div className="inputBox"><input type="text" name="name" value={profile.name} onChange={handleChange} /></div>
                                </label>
                                <label>
                                    <div className="labelName">Age: </div>
                                    <div className="inputBox">
                                        <input type="number" name="age" value={profile.age} onChange={handleChange} />
                                    </div>
                                </label>
                                <label>
                                    <div className="labelName">Email: </div>
                                    <div className="inputBox">
                                        <input type="email" name="email" value={profile.email} onChange={handleChange} />
                                    </div>
                                </label>
                                <label>
                                    <div className="labelName">Phone: </div>
                                    <div className="inputBox">
                                        <input type="text" name="phone" value={profile.phone} onChange={handleChange} />
                                    </div>
                                </label>
                                <label>
                                    <div className="labelName">Password: </div>
                                    <div className="inputBox">
                                        <input type="text" name="password" value={profile.password} onChange={handleChange} />
                                    </div>
                                </label>
                                <label>
                                    <div className="labelName">Heart Rate:  </div>
                                    <div className="inputBox">

                                        <input type="number" name="heartRate" value={profile.heartRate} onChange={handleChange} />
                                    </div>
                                </label>
                                <label>
                                    <div className="labelName">Temperature: </div>
                                    <div className="inputBox">
                                        <input type="number" name="temperature" value={profile.temperature} onChange={handleChange} />
                                    </div>
                                </label>
                                <label>
                                    <div className="labelName">Blood Glucose: </div>
                                    <div className="inputBox">
                                        <input type="number" name="bloodGlucose" value={profile.bloodGlucose} onChange={handleChange} />
                                    </div>
                                </label>
                                <button type="submit">Save</button>
                                <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
                            </form>
                        )}
                    </div>
                </div >
            </main>
        </div>
    );
};

export default Profile;