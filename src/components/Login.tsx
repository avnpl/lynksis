import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginButtonPressed = (username: String, password: String) => {
    //todo
    //api call and logging in user
    console.log(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form action=''>
        <label htmlFor='username'>Enter Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Enter Password</label>
        <input
          type='text'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='button'
          value='Login'
          onClick={(e) => {
            e.preventDefault();
            loginButtonPressed(username, password);
          }}
        />
      </form>
    </div>
  );
};

export default Login;
