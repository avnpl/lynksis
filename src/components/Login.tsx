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
    <div className='w-72 sm:w-96 m-auto mt-20'>
      <h2 className='text-3xl font-semibold mt-2 mb-3'>Login</h2>
      <form
        className='grid grid-cols-none mt-5 gap-4 items-center'
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(username, password);
        }}
      >
        <label className='text-center' htmlFor='username'>
          Username
        </label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='sm:col-span-2'
        />
        <label className='text-center' htmlFor='password'>
          Password
        </label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='sm:col-span-2'
        />
        <input className='input-button' type='submit' value='Login' />
      </form>
      <div className='m-2 text-center'>
        <p>
          Don't have an account?
          <span className='ml-1'>
            <Link to='/register'>Register Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
