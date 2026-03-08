import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {

      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));

      alert("Login successful!");

      history.push("/");

    } else {

      alert("Invalid credentials");

    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">Login</button>

      </form>

      <br />

      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>

    </div>
  );
};

export default Login;