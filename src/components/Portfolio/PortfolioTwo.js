import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const PortfolioTwo = () => {
  const [categories, setCategories] = useState([]);
  const [productData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);
  const shuffleInstance = useRef(null);
  const imageBaseUrl = process.env.REACT_APP_STRAPI_URL;

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_STRAPI_URL;

    const fetchCategories = axios.get(`${apiUrl}/api/shop-category-globals`);
    const fetchProducts = axios.get(`${apiUrl}/api/products?populate=*`);

    Promise.all([fetchCategories, fetchProducts])
      .then(([catRes, prodRes]) => {
        setCategories(catRes.data.data);
        setProductData(prodRes.data.data);
      })
      .catch(error => {
        console.error("There was an error loading data:", error);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🔄 Initialize Shuffle.js after data is loaded
  useEffect(() => {
    if (!loading && containerRef.current && window.Shuffle) {
      if (shuffleInstance.current) {
        shuffleInstance.current.destroy();
      }

      shuffleInstance.current = new window.Shuffle(containerRef.current, {
        itemSelector: '.filter-item',
        buffer: 1,
      });

      // Setup filtering
      document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.addEventListener('change', (e) => {
          if (e.target.checked) {
            shuffleInstance.current.filter(e.target.value);
          }
        });
      });
    }
  }, [loading, productData]);

  const allCategories = [{ id: "all", Label: "All" }, ...categories];

  const getCategoryCount = (categoryId) => {
    const count =
      categoryId === "all"
        ? productData.length
        : productData.filter((item) =>
            Array.isArray(item.shop_category_globals) &&
            item.shop_category_globals.some(cat => cat?.id === categoryId)
          ).length;
    return count.toString().padStart(2, "0");
  };

  if (loading) {
    return <div className="container text-center py-5">Loading products...</div>;
  }

  return (
    <section className="works explore-area portfolio-filter pt-0">
      <div className="container p-0">
        <div className="row justify-content-center text-center">
          <div className="col-12">
            <div className="btn-group filter-menu" role="group" aria-label="Basic radio toggle button group">
              {allCategories.map(({ id, Label }) => (
                <div key={id} className="input-item d-flex">
                  <div className="content">
                    <input
                      type="radio"
                      className="btn-check filter-btn"
                      name="shuffle-filter"
                      id={id}
                      value={id}
                      defaultChecked={id === "all"}
                    />
                    <label className="btn" htmlFor={id}>{Label}</label>
                  </div>
                  <span className="count">{getCategoryCount(id)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row filter-items items inner" ref={containerRef}>
          {productData.map((item) => (
            <div
              key={item.id}
              className="col-12 col-lg-4 item filter-item"
              data-groups={JSON.stringify(
                item.shop_category_globals?.map((cat) => cat.id.toString()) || []
              )}
            >
              <div className="card portfolio-item layout-2 scale has-shadow">
                <div className="image-holder">
                  <a className="card-thumb" href={`/shop-single/${item.documentId}`}>
                    <img
                      src={`${item.CoverImage?.url}`}
                      alt={item.Name}
                    />
                  </a>
                </div>
                <div className="card-content p-2">
                  <div className="heading">
                    <h4 className="title mt-2 mt-md-3 mb-3">{item.Name}</h4>
                    <p className="title">USD {item.Price}</p>
                    <div className="show-project">
                      <div className="project-link">
                        <a href={`/shop-single/${item.documentId}`}>Show Product Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioTwo;
