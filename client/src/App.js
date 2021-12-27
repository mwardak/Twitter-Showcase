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
        <Routes>
          <Route
            path="/"
            component={Home}
            element={
              <>
                <Sidebar />
                <Home />
              </>
            }
          />
          <Route
            path="/favourite"
            component={Favourite}
            element={
              <>
                <Sidebar />
                <Favourite />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
