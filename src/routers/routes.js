import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importing all the themes
import ThemeOne from "../themes/theme-one";
import Shop from "../themes/portfolio";
import ShopSingle from "../themes/portfolio-single";
import About from "../themes/about";
import Blog from "../themes/blog";
import BlogSingle from "../themes/blog-single";
import Contact from "../themes/contact";

const MyRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ThemeOne />} />
		<Route path="/shop" element={<Shop />} />
		<Route path="/shop-single/:id" element={<ShopSingle />} />
		<Route path="/about" element={<About />} />
		<Route path="/blog" element={<Blog />} />
		<Route path="/blog-single/:id" element={<BlogSingle />} />
		<Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default MyRoutes;
