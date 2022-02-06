import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  registerUser: (username: string, email: string, password: string) => void;
}

const Register: React.FC<Props> = ({ registerUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser(username, email, password);
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Register' />
      </form>
      <div>
        <p>
          Already have an account?{" "}
          <span>
            <Link to='/login'>Login Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
