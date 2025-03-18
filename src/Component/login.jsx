import React, { useState, useEffect } from "react";
import "../Style/Login.css";
import SignupModal from "./SignupModal"; // Import Signup Modal Component
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use for redirection

const LoginWithModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isSignupOpen, setIsSignupOpen] = useState(false); // State for Signup Modal
  const navigate = useNavigate(); // To redirect user

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password },
        {
          headers: { "Content-Type": "application/json" }, // Ensuring proper format
        }
      );

      // Save token and redirect to dashboard
      localStorage.setItem("token", response.data.token);
      console.log("Login successful", response.data);
      navigate("/dashboard"); // Redirect to dashboard after login

    } catch (error) {
      setErrorMessage(error.response?.data?.error || "Login failed");
    }
  };

  const closeLogin = () => {
    setIsLoginOpen(false);
  };

  const openSignup = () => {
    setIsLoginOpen(false); // Close login modal
    setIsSignupOpen(true); // Open signup modal
  };

  useEffect(() => {
    setIsLoginOpen(true);
  }, []);

  return (
    <div className="Overlay">
      {/* Login Modal */}
      {isLoginOpen && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="login-close-button" onClick={closeLogin}>
              ×
            </button>
            <h2>Login</h2>
            {errorMessage && <p className="login-error">{errorMessage}</p>}
            <form onSubmit={handleLogin}> {/* Use only one submit handler */}
              <div className="login-form-group">
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
              <div className="login-form-group">
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
              <button type="submit" className="login-submit-button">
                Log In
              </button>
            </form>
            <p className="login-signup-link">
              Don't have an account?{" "}
              <span onClick={openSignup} style={{ color: "blue", cursor: "pointer" }}>
                Sign up
              </span>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {isSignupOpen && <SignupModal setIsSignupOpen={setIsSignupOpen} />}
    </div>
  );
};

export default LoginWithModal;
