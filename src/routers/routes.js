import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all the themes
import ThemeOne from "../themes/theme-one";
import Portfolio from "../themes/portfolio";
import PortfolioSingle from "../themes/portfolio-single";
import About from "../themes/about";
import Blog from "../themes/blog";
import BlogSingle from "../themes/blog-single";
import Contact from "../themes/contact";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeOne />} />
		<Route path="/portfolio" element={<Portfolio />} />
		<Route path="/portfolio-single" element={<PortfolioSingle />} />
		<Route path="/about" element={<About />} />
		<Route path="/blog" element={<Blog />} />
		<Route path="/blog-single" element={<BlogSingle />} />
		<Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
