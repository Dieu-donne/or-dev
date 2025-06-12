import React, { useEffect, useState } from "react";
import axios from "axios";

const PortfolioSingleSection = () => {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/themeland/brilio-json-1/singlePortfolio")
      .then((response) => {
        // Set portfolio data with the response from the JSON server
        setPortfolio(response.data);
      })
      .catch((error) => console.error("Error fetching portfolio data:", error));
  }, []);

  if (!portfolio) {
    return <p>Loading...</p>;
  }

  return (
    <section className="content">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="heading">
              <div className="portfolio-meta d-flex align-items-center">
                <div className="portfolio-terms">
                  {portfolio.categories.map((category, index) => (
                    <a key={index} className="terms" href="/portfolio">
                      {category}
                    </a>
                  ))}
                </div>
                <span className="date">{portfolio.date}</span>
              </div>
              <h2>{portfolio.title}</h2>
              <p>{portfolio.description}</p>
            </div>
          </div>
          <div className="col-12 col-lg-6 items portfolio-meta mt-3 mt-md-0">
            <div className="task">
              <h6 className="title mb-3">Task</h6>
              <span className="details">{portfolio.task}</span>
            </div>
            <div className="content item d-flex flex-column flex-md-row justify-content-between">
              <div className="role">
                <h6 className="title mt-0 mb-1 mb-md-3">Role/Services</h6>
                <div className="portfolio-terms">
                  {portfolio.role.map((role, index) => (
                    <a key={index} className="terms" href="/portfolio">
                      {role}
                    </a>
                  ))}
                </div>
              </div>
              <div className="client my-3 my-md-0">
                <h6 className="title mt-0 mb-1 mb-md-3">Client</h6>
                <span>{portfolio.client}</span>
              </div>
              <div className="category">
                <h6 className="title mt-0 mb-1 mb-md-3">Category &amp; Year</h6>
                <span>{portfolio.categoryYear}</span>
              </div>
            </div>
            <div className="socials item">
              <a className="nav-link d-inline-flex swap-icon ms-0" href={portfolio.liveSite}>
                Live Site <i className="icon bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row portfolio-content items">
          <div className="col-12">
            {/* Directly render the images from the gallery without animation */}
            {portfolio.gallery.map((img, index) => (
              <div key={index} className="item">
                <img src={img} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSingleSection;
