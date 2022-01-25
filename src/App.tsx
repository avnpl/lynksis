import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { UserInterface } from "./utils/models";

function App() {
  const [user, setUser] = useState<UserInterface | null>();

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
