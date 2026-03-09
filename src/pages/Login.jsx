import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {

  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {

    e.preventDefault();

    console.log("Login attempt", email, password);

    const storedUser = JSON.parse(localStorage.getItem("user"));

    console.log("Stored user", storedUser);

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
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>

      <h2>Login</h2>

      <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column" }}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "10px" }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "10px" }}
        />

        <button type="submit" style={{ padding: "10px", backgroundColor: "#007bff", color: "white", border: "none" }}>Login</button>

      </form>

      <br />

      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>

    </div>
  );
};

export default Login;