import React, { useState } from "react";
import LoginForm from '../components/login-form'

type Props = {};

export default function signin({}: Props) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
   
  };
  return (
    <div>
 <LoginForm/>
    <form onSubmit={handleLogin}>
      {loginError}
      <label>
        Email:{" "}
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
      </label>
      <button type="submit">Submit login</button>
    </form>
          </div>
  );
}
