import React, {useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import { menuItems, socialLinks } from "../Header/menuConfig";
import axios from "axios";


const OffcanvasMenu = ({ className = "offcanvas-wrapper" }) => {
  const location = useLocation(); // Get current URL path
  const [headerItems, setHeaderItems] = useState([]);
  const [socials, setSocials] = useState([]);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_STRAPI_URL;
    console.log('Talking to API at', apiUrl);
    axios
      .get(`${apiUrl}/api/header-menus`)
      .then((response) => setHeaderItems(response.data.data))
      .catch((error) => console.error("Error fetching portfolio data:", error));

  }, []);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_STRAPI_URL;
    console.log('Talking to API at', apiUrl);
    axios
      .get(`${apiUrl}/api/social-media-links`)
      .then((response) => setSocials(response.data.data))
      .catch((error) => console.error("Error fetching portfolio data:", error));

  }, []);

  return (
    <div className={className}>
      {/* Navbar Toggler */}
      <div className="navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
        <div className="navbar-header">
          <div className="content">
            <div className="toggler-icon"></div>
            <span className="title">Menu</span>
          </div>
        </div>
      </div>

      {/* Offcanvas */}
      <div className="offcanvas offcanvas-end" id="offcanvasRight">
        <div className="fixed-nav-rounded-div">
          <div className="rounded-div-wrap">
            <div className="rounded-div"></div>
          </div>
        </div>

        {/* Offcanvas Content */}
        <div className="offcanvas-content">
          <div className="offcanvas-navigation">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title mt-0">Navigation</h5>
            </div>

            <hr />

            {/* Navigation Menu */}
            <div className="offcanvas-body">
              <ul className="navbar-nav menu pt-md-4">
                {headerItems.map((item, index) => (
                  <li className="nav-item" key={index}>
					<a href={item.href} className={`nav-link ${location.pathname === item.href ? "active" : ""}`}>
						{item.label} <span className="item-count">({index + 1})</span>
					</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Offcanvas Social */}
          <div className="offcanvas-social">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title mt-0">Socials</h5>
            </div>

            <hr />

            {/* Socials */}
            <div className="socials offcanvas-body">
              <nav className="nav">
                {socials.map((social, index) => (
                  <a className="nav-link swap-icon" href={social.link} key={index}>
                    {social.label} <i className="icon rotate bi bi-arrow-right-short"></i>
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffcanvasMenu;