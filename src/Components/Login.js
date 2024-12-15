import React, { useState, useEffect } from "react";

function Login() {
  const [username, setUsername] = useState(""); // usestate for tracking username
  const [password, setPassword] = useState(""); // usestate for tracking password
  const [isLoggedIn, setIsLoggedIn] = useState(false); // usestate for checking if user has logged in or not 

  useEffect(() => {
    if (isLoggedIn) {
      console.log(`Welcome, ${username}!`); // when logged in show's the welcome message
    }
  }, [isLoggedIn, username]); // array to re-run when status changes or username changes

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the default submitting (which would reload the page)
    setIsLoggedIn(true); // set the user as logged in
  };

  if (isLoggedIn) {
    return (
      <div className="welcome-container">
        <h2>Welcome, {username}!</h2>
        <p>Welcome</p>
      </div>
    );
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
