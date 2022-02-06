import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  loginUser: (username: string, password: string) => void;
}

const Login: React.FC<Props> = ({ loginUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (username: string, password: string) => {
    loginUser(username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(username, password);
        }}
      >
        <label htmlFor='username'>Enter Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor='password'>Enter Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type='submit' value='Login' />
      </form>
      <div>
        <p>
          Don't have an account?
          <span>
            <Link to='/register'>Register Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
