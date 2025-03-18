import React, { useState } from "react";
import "../Style/SignupModal.css"; // Import the CSS file for modal styling
import axios from "axios";

const SignupModal = ({ setIsSignupOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success message

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        { name, email, password },
        {
          headers: { "Content-Type": "application/json" }, // Ensure proper headers
        }
      );

      console.log("Registration successful", response.data);
      setSuccessMessage("Account created successfully! You can now log in.");
      
      // Auto-close modal after 2 seconds
      setTimeout(() => setIsSignupOpen(false), 2000);

    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Registration failed.");
    }
  };

  return (
    <div className="Overlay">
      <div className="signup-modal">
        <div className="signup-modal-content">
          <button className="signup-close-button" onClick={() => setIsSignupOpen(false)}>
            ×
          </button>
          <h2>Sign Up</h2>

          {errorMessage && <p className="signup-error">{errorMessage}</p>}
          {successMessage && <p className="signup-success">{successMessage}</p>}

          <form onSubmit={handleRegister}>
            <div className="signup-form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your Name"
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your Email"
              />
            </div>
            <div className="signup-form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Your Password"
              />
            </div>
            <button type="submit" className="signup-submit-button">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
