import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { RichText } from '../Markdown/Markdown';


const PortfolioSingleSection = () => {
  const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const imageBaseUrl = process.env.REACT_APP_STRAPI_URL;

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_STRAPI_URL;

    // Fetch post data using axios
    axios
      .get(`${apiUrl}/api/products/${id}?populate=*`)
      .then((response) => {
        setProduct(response.data.data); // Assuming response.data is an array
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);
  if (!product || loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="content">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-5">
            <div className="heading">
                <img className="mt-3" src={`${imageBaseUrl}${product.CoverImage?.url}`} alt={`Gallery`} />
            </div>
          </div>
          <div className="col-12 col-lg-6 items portfolio-meta mt-3 mt-md-0">
            <div className="task">
              <h6 className="title mb-3">{product.Name}</h6>
              <span className="details"><RichText markdown={product.Description} /></span>
            </div>
            <div className="content item d-flex flex-column flex-md-row justify-content-start">
              <div className="role">
                <h6 className="title mt-0 mb-1 mb-md-3">Price</h6>
                <div className="portfolio-terms">
                    <a className="terms" href="#">
                      USD {product.Price}
                    </a>
                </div>
              </div>
              <div className="client my-3 mx-5 my-md-0">
                <h6 className="title mt-0 mb-1 mb-md-3">Color</h6>
                <span>{product.Color}</span>
              </div>
            </div>
            <div className="socials item">
              <a className="nav-link d-inline-flex swap-icon ms-0" href="#">
                Checkout Now <i className="icon bi bi-arrow-right-short"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row portfolio-content items">
          <div className="col-12">
            {/* Directly render the images from the gallery without animation */}
            {product.OtherImages.map((img, index) => (
              <div key={index} className="item">
                <img src={`${imageBaseUrl}${img?.url}`} alt={`Gallery ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSingleSection;
