import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { menuItems } from "./menuConfig";

const Header = () => {
  const location = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('odd');
    } else {
      body.classList.remove('odd');
    }
  }, [isDarkMode]);

  return (
    <header id="header">
      <nav className="navbar navbar-expand">
        <div className="container header">
          {/* Navbar Brand */}
          <div className="magnetic">
            <a className="navbar-brand" href="/">
              Brilio.
            </a>
          </div>
          <div className="ms-auto"></div>

          {/* Navbar Nav */}
          <ul className="navbar-nav items d-none d-md-block">
            {menuItems.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={item.href}
                  className={`nav-link ${
                    location.pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="navbar-nav icons d-flex align-items-center">
            <li className="nav-item">
              <a
                href="#"
                className="nav-link"
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? "Change to light theme" : "Change to dark theme"}
              >
                <span className="icon material-symbols-outlined">
                  {isDarkMode ? "light_mode" : "dark_mode"}
                </span>
              </a>
            </li>
          </ul>

          {/* Navbar Toggler */}
          <div
            className="navbar-toggler scrolled"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          >
            <div className="navbar-header">
              <div className="content">
                <div className="toggler-icon"></div>
                <span className="title">Menu</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div id="navbar-main" className="main"></div>
    </header>
  );
};

export default Header;