import "dotenv/config";
import React, { useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Mains } from "./components/Mains";
import { Navbar } from "./components/Navbar";
import Register from "./components/Register";
import { MyError, UserInterface } from "./utils/models";

function App() {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [error, setError] = useState<MyError | null>(null);

  const registerUser = (username: string, email: string, password: string) => {
    const url = `${process.env.REACT_APP_DEV_URL}/register`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data.user);
        localStorage.setItem("token", data.token);
      })
      .catch((err) =>
        setError({
          message: "Username or Email already in use",
          type: "DuplicateCredentialsError",
        })
      );
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {!user && <Route path='/login' element={<Login />} />}
        {!user && (
          <Route
            path='/register'
            element={<Register registerUser={registerUser} />}
          />
        )}
        {user && <Route path='/' element={<Mains />} />}
        <Route path='*' element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
