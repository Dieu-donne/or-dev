import React, { useEffect, useState } from "react";
import axios from "axios";

const AwardsTwo = () => {
  const [awardData, setAwardData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API using Axios
    axios
      .get("https://my-json-server.typicode.com/themeland/brilio-json-2/awardstwo")
      .then((response) => {
        setAwardData(response.data);
      })
      .catch((err) => {
        setError("Error loading awards data.");
      });
  }, []);

  // Render loading state or error state if necessary
  if (error) {
    return <div>{error}</div>;
  }

  if (!awardData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row justify-content-between">
      <div className="col-12 col-lg-3">
        {/* Intro */}
        <div className="intro">
          <h3 className="title">{awardData.title}</h3>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="row items">
          {awardData.items.map((item, index) => (
            <div className="col-12 col-md-6 item" key={index}>
              <div className="content">
                <a className="logo" href={item.link}>
                  <img src={item.image} alt={`Award ${index + 1}`} />
                </a>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AwardsTwo;
