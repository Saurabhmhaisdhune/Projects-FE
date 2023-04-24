import React from "react";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Logins() {

const navigate= useNavigate();
 
  const toastOptions = {
    position: "top-center",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    borderRadius: 20,
  };
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { password, username } = values;
    if (password === "") {
      toast.error("Email and password is required", toastOptions);
      return false;
    } else if (username.length === "") {
      toast.error("Email and password is required", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { username, password } = values;
      const { data } = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };
  return (
    <div className="mainlogin">
      <div className="loginCard">
        <h3 className="log">Login</h3>
        <input
          type="email"
          className="email"
          placeholder="Enter registered Email"
          name="email"
        //   onChange={(e) => handleChange(e)}
        />
        <input
          type="password"
          className="password"
          placeholder="Enter correct password"
          name="password"
        //   onChange={(e) => handleChange(e)}
        />
        <input type="submit" className="submitButton" />
        <h3></h3>
      </div>
    </div>
  );
}
