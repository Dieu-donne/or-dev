import { useEffect, useState } from "react";
import axios from "axios";

const PortfolioOne = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);

  useEffect(() => {
    // Fetch only the first 4 portfolio items
    axios
      .get("https://my-json-server.typicode.com/themeland/brilio-json-1/portfolio?_limit=4") // _limit=4 limits the results to 4 items
      .then((response) => setPortfolioItems(response.data))
      .catch((error) => console.error("Error fetching portfolio data:", error));
  }, []);

  return (
    <div className="row">
      <div className="stack-wrapper">
        {portfolioItems.map((item) => (
          <div className="stack-item" key={item.id}>
            <div className="card portfolio-item layout-2 scale has-shadow">
              <div className="image-holder">
                <a className="card-thumb" href="/portfolio-single">
                  <img src={item.image} alt={item.title} />
                </a>
                <div className="card-overlay">
                  <div className="heading">
                    <h4 className="title mt-2 mt-md-3 mb-3">{item.title}</h4>
                    <div className="show-project">
                      <div className="card-terms">
                        {item.categories.map((category, index) => (
                          <a className="terms badge outlined" href="/portfolio" key={index}>
                            {category}
                          </a>
                        ))}
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
