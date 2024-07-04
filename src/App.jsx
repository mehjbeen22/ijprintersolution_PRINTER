import React from "react";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homesections/HomePage";
import MainBlogPage from "./pages/homesections/MainBlogPage";
import BlogDetailPage from "./pages/homesections/BlogDetailPage";
import Footer from "./pages/Footer";
const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<MainBlogPage />} />
        <Route path="/blog/:blogID" element={<BlogDetailPage />} />
        {/* 
          
        <Route path="/" element ={}/>
        <Route path="/" element ={}/>
        <Route path="/" element ={}/>
        <Route path="/" element ={}/>
        <Route path="/" element ={}/>
        <Route path="/" element ={}/>
        <Route path="/" element ={}/>
        <Route path="/" element ={}/>
        <Route path="/" element ={}/>
        <Route path="/" element ={}/> */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
