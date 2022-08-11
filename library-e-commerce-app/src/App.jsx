import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Books from "./pages/Books";
import { books } from "./data";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import BooksInfo from "./pages/BooksInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" exact element={<Books books={books} />} />
          <Route path="books/1" element={<BooksInfo books={books} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
