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
    <div className='w-72 sm:w-96 m-auto mt-20'>
      <h2 className='text-3xl font-semibold mt-2 mb-3'>Register</h2>
      <form className='flex flex-col mt-5 gap-y-2' onSubmit={handleRegister}>
        <label htmlFor='username'>Enter Username</label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='w-full'
        />
        <label htmlFor='email'>Enter Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='w-full'
        />
        <label htmlFor='password'>Enter Password</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='w-full'
        />
        <input className='input-button mt-3' type='submit' value='Register' />
      </form>
      <div className='m-2 text-center'>
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
