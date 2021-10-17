import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
    </BrowserRouter>
  );
}

export default App;
