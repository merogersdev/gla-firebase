import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUser } from "react-icons/fa";
import { testEmail, testName, testPassword } from "../../util/regex";
import { toast } from "react-toastify";
import { useFirebaseAuthContext } from "../../context/AuthContext";

import "./SignupForm.scss";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { signup } = useFirebaseAuthContext();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (testName(name) === false) {
      toast.error("Must provide a name");
      return;
    }

    if (testEmail(email) === false) {
      toast.error("Must provide a valid email address");
      return;
    }

    if (testPassword(password) === false) {
      toast.error("Must provide a password");
      return;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords must match");
      return;
    }

    await signup(name, email, password);
  };

  return (
    <div className="signup-form__container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1 className="signup-form__h1">Sign Up</h1>
        <label htmlFor="name" className="signup-form__label">
          <input
            placeholder="Name"
            type="text"
            name="name"
            className="signup-form__input"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="email" className="signup-form__label">
          <input
            placeholder="Email"
            type="text"
            name="email"
            className="signup-form__input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="signup-form__label">
          <input
            placeholder="Password"
            type="password"
            name="password"
            className="signup-form__input"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="confirmPassword" className="signup-form__label">
          <input
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
            className="signup-form__input"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button type="submit" className="signup-form__signup-btn">
          Sign Up
          <FaUser className="signup-form__icon" />
        </button>
        <div className="signup-form__rule">
          <div className="signup-form__rule-text">or</div>
        </div>
        <button
          className="signup-form__back-btn"
          type="button"
          onClick={() => navigate("/")}
        >
          Go Back
          <FaArrowLeft className="signup-form__icon" />
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
