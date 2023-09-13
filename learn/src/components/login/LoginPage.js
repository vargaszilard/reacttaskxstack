import React, { useState } from "react";
import "./LoginPage.css";
import Button from "../UI/Button";
import ComplettInputField from "../UI/ComplettInputField";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (validateForm()) {
      console.log("Logging in with:", username, password);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (username.trim() === "") {
      newErrors.username = "Username is required";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="container mt-5">
      <h1>Sign in</h1>
      <h2>Welcome back</h2>
      <form>
        <ComplettInputField
          htmlFor="username"
          labelName="username"
          id="username"
          placeholder="Enter email"
          changeHandler={handleUsernameChange}
        />
        {errors.username && <div className="error">{errors.username}</div>}

        <ComplettInputField
          htmlFor="password"
          labelName="password"
          id="password"
          placeholder="Enter password"
          type="password"
          changeHandler={handlePasswordChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <Button submitHandler={handleLogin}>Sign in</Button>
      </form>
    </div>
  );
}

export default LoginPage;
