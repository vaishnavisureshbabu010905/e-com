import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Register = () => {

  const history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    console.log("Register attempt", name, email, password);

    const newUser = {
      name: name,
      email: email,
      password: password
    };

    // save user in localStorage
    localStorage.setItem("user", JSON.stringify(newUser));

    console.log("User saved", newUser);

    alert("Registration successful!");

    history.push("/login");
  };

  return (
    <div style={{ padding: "40px", maxWidth: "400px", margin: "auto" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister} style={{ display: "flex", flexDirection: "column" }}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginBottom: "10px", padding: "10px" }}
        />

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

        <button type="submit" style={{ padding: "10px", backgroundColor: "#28a745", color: "white", border: "none" }}>Register</button>

      </form>
    </div>
  );
};

export default Register;