import React from "react";

const portfolioData = [
  {
    id: 1,
    title: "App Redesign",
    image: "/img/case-1.jpg",
    categories: '["app-design", "ui-ux"]',
    projectLink: "/portfolio-single"
  },
  {
    id: 2,
    title: "Revitalizing a Classic Brand",
    image: "/img/case-2.jpg",
    categories: '["branding"]',
    projectLink: "/portfolio-single"
  },
  {
    id: 3,
    title: "Brand Refresh",
    image: "/img/case-3.jpg",
    categories: '["ui-ux", "app-design"]',
    projectLink: "/portfolio-single"
  },
  {
    id: 4,
    title: "STU Digital Experience",
    image: "/img/case-4.jpg",
    categories: '["branding", "app-design"]',
    projectLink: "/portfolio-single"
  },
  {
    id: 5,
    title: "E-Commerce Website",
    image: "/img/case-5.jpg",
    categories: '["branding", "app-design"]',
    projectLink: "/portfolio-single"
  },
  {
    id: 6,
    title: "Mobile App Development",
    image: "/img/case-6.jpg",
    categories: '["branding", "ui-ux", "app-design"]',
    projectLink: "/portfolio-single"
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "branding", label: "Branding" },
  { id: "ui-ux", label: "UI/UX" },
  { id: "app-design", label: "App Design" }
];

const getCategoryCount = (category) => {
  const count =
    category === "all"
      ? portfolioData.length
      : portfolioData.filter((item) => JSON.parse(item.categories).includes(category)).length;
  return count.toString().padStart(2, "0"); // Adds leading zero if count < 10
};

const PortfolioTwo = () => {

  return (
    <section className="works explore-area portfolio-filter pt-0">
      <div className="container p-0">
		<div className="row justify-content-center text-center">
			<div className="col-12">
				<div className="btn-group filter-menu" role="group" aria-label="Basic radio toggle button group">
				{categories.map(({ id, label }) => (
					<div key={id} className="input-item d-flex">
					<div className="content">
						<input type="radio" className="btn-check filter-btn" name="shuffle-filter" id={id} defaultValue={id} defaultChecked={id === "all"} />
						<label className="btn" htmlFor={id}>{label}</label>
					</div>
					<span className="count">{getCategoryCount(id)}</span>
					</div>
				))}
				</div>
			</div>
		</div>

        <div className="row filter-items items inner">
          {/* Dynamically rendering Portfolio Items */}
          {portfolioData.map((item) => (
            <div key={item.id} className="col-12 col-lg-4 item filter-item" data-groups={item.categories}>
              {/* Portfolio Item */}
              <div className="card portfolio-item layout-2 scale has-shadow">
                <div className="image-holder">
                  {/* Card Thumb */}
                  <a className="card-thumb" href={item.projectLink}>
                    <img src={item.image} alt={item.title} />
                  </a>
                </div>
                {/* Card content */}
                <div className="card-content p-2">
                  <div className="heading">
                    <h4 className="title mt-2 mt-md-3 mb-3">{item.title}</h4>
                    <div className="show-project">
						<div className="card-terms">
						{typeof item.categories === "string" 
							? JSON.parse(item.categories).map((category, index) => (
								<a key={index} className="terms badge" href="/portfolio">
								{category.replace("-", " ")}
								</a>
							)) 
							: null}
						</div>
                      <div className="project-link">
                        <a href={item.projectLink}>Show Project</a>
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
