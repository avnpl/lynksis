import "dotenv/config";
import * as jwt from "jsonwebtoken";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Mains } from "./components/Mains";
import { Navbar } from "./components/Navbar";
import Register from "./components/Register";
import { MyError, NewJWTPayload, UserInterface } from "./utils/interfaces";

function App() {
  const [user, setUser] = useState<UserInterface | null>(null);
  const [error, setError] = useState<MyError | null>(null);

  useEffect(() => {
    if (error) {
      const errMessage = `${error.message} (${error.type})`;
      console.error(errMessage);
      alert(error.message);
      setError(null);
    } else {
    }
  }, [error]);

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
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setUser(data.user);
            localStorage.setItem("token", data.token);
          });
        } else {
          setError({
            message: "Username or Email already in use",
            type: "DuplicateCredentialsError",
          });
        }
      })
      .catch((err) => console.error(err));
  };

  const loginUser = (username: string, password: string) => {
    const url = `${process.env.REACT_APP_DEV_URL}/login`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((response) => {
        if (response.ok) {
          response.json().then((data) => {
            setUser(data.user);
            localStorage.setItem("token", data.token);
          });
        } else {
          setError({
            message: "Invalid username or Password",
            type: "InvalidCredentialsError",
          });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const logoutUser = () => {
    localStorage.clear();
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      jwt.verify(
        token,
        process.env.REACT_APP_SECRET_KEY as string,
        (err, data) => {
          if (data) {
            loginUser(
              (data as NewJWTPayload).username,
              (data as NewJWTPayload).password
            );
          }
        }
      );
    }
  }, []);

  return (
    <BrowserRouter>
      <Navbar logoutUser={logoutUser} showLogout={!!user} />
      <Routes>
        {!user && (
          <Route path='/login' element={<Login loginUser={loginUser} />} />
        )}
        {!user && (
          <Route
            path='/register'
            element={<Register registerUser={registerUser} />}
          />
        )}
        {user && (
          <Route
            path='/'
            element={
              <Mains user={user} setUser={setUser} setError={setError} />
            }
          />
        )}
        <Route path='*' element={<Navigate to={user ? "/" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
