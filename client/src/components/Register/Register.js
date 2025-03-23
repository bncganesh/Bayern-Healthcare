import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Login/Auth.css"; // Styles to match homepage

const Register = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "", phone: "", userType: "" });

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("")
    // const [userType, setUserType] = useState("")
    // const [password, setPassword] = useState("");
    // const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const validateField = (name, value) => {
        let error = "";
        if (name === "name" && !value) error = "Name is required";
        if (name === "email") {
            if (!value) error = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(value)) error = "Invalid email format";
        }
        if (name === "password") {
            if (!value) error = "Password is required";
            else if (value.length < 6) error = "Password must be at least 6 characters long";
        }
        if (name === "confirmPassword") {
            if (!value) error = "Please confirm your password";
            else if (value !== formData.password) error = "Passwords do not match";
        }
        if (name === "userType" && !value) error = "Please select UserType";
        setFormErrors((prev) => ({ ...prev, [name]: error }));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "radio" ? value : value, // Ensure radio buttons update
        }));

    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (!Object.values(formErrors).some((error) => error) && Object.values(formData).every((value) => value)) {
            if (formData.userType === "Patient") {
                // make a call to backend api which pushes data to patients table
            } else {
                // make a call to backend api which pushes data to doctors table
            }

            // for now just logging to console and navigating to login page
            console.log("User registered:", formData);
            navigate("/login");
        }
        e.preventDefault();

    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h2>Register</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Name" value={formData.name} onChange={handleChange} required />
                    {formErrors.name && <p className="error">{formErrors.name}</p>}

                    <input type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                    {formErrors.email && <p className="error">{formErrors.email}</p>}

                    <input type="tel" placeholder="Mobile no" value={formData.phone} onChange={handleChange} required />
                    {formErrors.phone && <p className="error">{formErrors.phone}</p>}

                    <input type="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                    {formErrors.password && <p className="error">{formErrors.password}</p>}

                    <input type="password" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                    {formErrors.confirmPassword && <p className="error">{formErrors.confirmPassword}</p>}

                    <label>
                        <input
                            type="radio"
                            value={formData.userType}
                            checked={formData.userType === 'Patient'}
                            onChange={handleChange}
                        />
                        Patient
                    </label>
                    <label>
                        <input
                            type="radio"
                            value={formData.userType}
                            checked={formData.userType === 'HealthcareProvider'}
                            onChange={handleChange}
                        />
                        Healthcare Provider
                    </label>
                    <button type="submit">Register</button>
                </form>
                <p>Already have an account? <a href="/login">Login</a></p>
            </div>
        </div>
    );
};

export default Register;
