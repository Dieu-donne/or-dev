import React, { useState, useEffect } from "react";
import axios from "axios";

const Footer = ({ className = "footer-area", scrollToTopText = "Scroll to Top", scrollToTopTarget = "#header" }) => {
	
	const [footerItems, setFooterItems] = useState([]);
	
 useEffect(() => {
    const apiUrl = process.env.REACT_APP_STRAPI_URL;
    console.log('Talking to API at', apiUrl);
    axios
      .get(`${apiUrl}/api/footer`)
      .then((response) => setFooterItems(response.data.data))
      .catch((error) => console.error("Error fetching portfolio data:", error));

  }, []);
	
	return (
		<footer className={`${className}`}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="footer-content d-flex flex-wrap justify-content-center justify-content-md-between align-items-center py-4">
							{/* Copyright */}
							<div className="copyright">
								{footerItems.Copyright} <a href={footerItems.CopyrightLink} target="_blank" rel="noopener noreferrer">{footerItems.CopyrightHolder}</a>
							</div>
							{/* Scroll To Top */}
							<div id="scroll-to-top" className="scroll-to-top mt-3 mt-sm-0">
								<a href={scrollToTopTarget} className="smooth-anchor">{scrollToTopText}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
