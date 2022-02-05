import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { Mains } from "./components/Mains";
import { Navbar } from "./components/Navbar";
import Register from "./components/Register";
import { UserInterface } from "./utils/models";

function App() {
  const [user, setUser] = useState<UserInterface | null>(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Mains />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
