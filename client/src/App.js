// import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Search from "./components/Search";

import Home from "./components/Home";
import Random from "./components/Random";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/search" component={Search} />
    //     <Route exact path="/random" component={Random} />
    //   </Switch>
    // </Router>
    <div>
      <Navbar />
    </div>
  );
};

export default App;
