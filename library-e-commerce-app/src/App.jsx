import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Books from "./pages/Books";
// import BookInfo from "./pages/BookInfo";
// import { books } from "./data";
import Nav from "./components/Nav";
// import Footer from "./components/Footer";
// import Cart from "./pages/Cart";
import { counter } from "@fortawesome/fontawesome-svg-core";
import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Featured from "./components/Featured";
import Discounted from "./ui/Discounted";

function App() { 
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Highlights />
      <Featured />
      <Discounted />
    </div>
  )
}

export default App;
