import React, { useState } from "react";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (
    username: string,
    email: string,
    password: string
  ) => {
    //todo
    //api call and logging in user
    console.log(username, email, password);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label htmlFor='username'>Enter Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='email'>Enter Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value='Register'
          onClick={(e) => {
            e.preventDefault();
            handleRegister(username, email, password);
          }}
        />
      </form>
    </div>
  );
};

export default Register;
