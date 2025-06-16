import React from 'react';

const BreadcrumbTwo = () => {
  const breadcrumbContent = {
    title: "Shop WDYCG",
  };

  return (
    <section id="home" className="breadcrumb-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-12">
            <div className="content w-60">
              <h1 className="title">{breadcrumbContent.title}</h1>
              <div className="flex ms-auto">
                <h1 className="title">{breadcrumbContent.subheading}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadcrumbTwo;
