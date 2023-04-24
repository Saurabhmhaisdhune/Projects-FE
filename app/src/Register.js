import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.post("http://localhost:3500/register", JSON.stringify(user), {
      headers: {
        "Content-type": "application/json",
      },
    })
  };
  return (
    <>
      <div className="mainlogin">
        <div className="loginCard">
          <h3 className="log">Register</h3>
          <input
            type="text"
            className="name"
            placeholder="Enter your name"
            name="name"
            onChange={handleChange}
          />
          <input
            type="email"
            className="email"
            placeholder="Enter your Email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="password"
            placeholder="Enter password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="submit"
            onClick={handleSubmit}
            className="submitButton"
          />
        </div>
      </div>
    </>
  );
}
