import React from 'react';
import {Route, Routes} from "react-router-dom";
import './App.css';
import Login from "./screens/login/Login";
import "bootstrap-icons/font/bootstrap-icons.css";
import Home from "./screens/home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={"/login"} element={<Login/>}/>
        <Route path={"/*"} element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
