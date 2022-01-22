import React from "react";
import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Favourite from "./components/Favourite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
