import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios, { all } from "axios";
import Loader from "./component/Loader";
import Stars from "./component/Stars";
import Lp from "./Lp";
import Info from "./Info";
const App = () => {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/" element={<Lp/>}/>
      <Route path="/info" element={<Info/>}/>
    </Routes>
  </Router>
    </div>
  );
};
export default App;
