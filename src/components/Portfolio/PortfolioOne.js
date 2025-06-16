import { useEffect, useState } from "react";
import axios from "axios";

const PortfolioOne = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  const imageBaseUrl = process.env.REACT_APP_STRAPI_URL;

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_STRAPI_URL;
    axios
      .get(`${apiUrl}/api/advocacies?populate=*`)
      .then((response) => setPortfolioItems(response.data.data))
      .catch((error) => console.error("Error fetching portfolio data:", error));

  }, []);
      console.log(portfolioItems);

  return (
    <div className="row">
      <div className="stack-wrapper">
        {portfolioItems.map((item) => (
          <div className="stack-item" key={item.id}>
            <div className="card portfolio-item layout-2 scale has-shadow">
              <div className="image-holder">
                <a className="card-thumb" href="/">
                  <img src={`${item.Image?.url}`} alt={item.Title} />
                </a>
                <div className="card-overlay">
                  <div className="heading">
                    <h4 className="title mt-2 mt-md-3 mb-3">{item.Title}</h4>
                    <div className="show-project">
                      <div className="card-terms">
                        {/*item.categories.map((category, index) => (
                          <a className="terms badge outlined" href="/" key={index}>
                            {category}
                          </a>
                        ))*/}
                      </div>
                      <div className="project-link">
                        <a href="/portfolio-single">Show Project</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioOne;
