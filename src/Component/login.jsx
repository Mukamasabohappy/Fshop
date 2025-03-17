import React, { useState, useEffect } from "react";
import "../Style/Login.css";


const LoginWithModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(true);  // Open the modal immediately

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErrorMessage("Invalid email format");
      return;
    }
    // Process login request here (e.g., API call)
    console.log("Logging in with:", { email, password });
    // You may also want to close the modal after successful login
    setIsModalOpen(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Automatically open the modal when the component is mounted
  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  return (
    <div className="Overlay">
      {isModalOpen && (
        <div className="login-modal">
          <div className="login-modal-content">
            <button className="login-close-button" onClick={closeModal}>
              ×
            </button>
            <h2>Login</h2>
            {errorMessage && <p className="login-error">{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
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
              Don't have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginWithModal;
