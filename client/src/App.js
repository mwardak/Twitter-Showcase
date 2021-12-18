// import "./App.css";
import React from "react";
import "./App.css";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/search" component={Search} />
    //     <Route exact path="/random" component={Random} />
    //   </Routes>
    // </Router>
    <div className="app">
      <Sidebar />
      <Feed />
    </div>
  );
};

export default App;
