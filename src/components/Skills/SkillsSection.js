import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const apiUrl = process.env.REACT_APP_STRAPI_URL;

    axios
    .get(`${apiUrl}/api/global-web-snapshot`)
      .then(response => {
        setSkillsData(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching skills data:', error);
      });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.progress-bar');
            progressBars.forEach(progressBar => {
              const value = progressBar.getAttribute('data-progress');
              progressBar.style.opacity = 1;
              progressBar.style.width = `${value}%`;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, [skillsData]);

  if (!skillsData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row justify-content-between" ref={skillsRef}>
      <div className="col-12 col-lg-3">
        <div className="intro">
          <h3 className="title">{skillsData.Title}</h3>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="row items">
            <div key="1" className="col-12 col-md-6 item">
              <div className="content">
                <div className="heading d-flex align-items-center">
                  <i className={`icon ${skillsData.MetricOneIcon}`}></i>
                  <h2 className="title m-0 ms-2">{skillsData.MetricOneTitle}</h2>
                </div>
                <span>{skillsData.MetricOneSub}</span>
                <p className="mt-3">{skillsData.MetricOneDesc}</p>
              </div>
            </div>
            <div key="2" className="col-12 col-md-6 item">
              <div className="content">
                <div className="heading d-flex align-items-center">
                  <i className={`icon ${skillsData.MetricTwoIcon}`}></i>
                  <h2 className="title m-0 ms-2">{skillsData.MetricTwoTitle}</h2>
                </div>
                <span>{skillsData.MetricTwoSub}</span>
                <p className="mt-3">{skillsData.MetricTwoDesc}</p>
              </div>
            </div>
            <div key="3" className="col-12 col-md-6 item">
              <div className="content">
                <div className="heading d-flex align-items-center">
                  <i className={`icon ${skillsData.MetricThreeIcon}`}></i>
                  <h2 className="title m-0 ms-2">{skillsData.MetricThreeTitle}</h2>
                </div>
                <span>{skillsData.MetricThreeSub}</span>
                <p className="mt-3">{skillsData.MetricThreeDesc}</p>
              </div>
            </div>
            
            <div key="4" className="col-12 col-md-6 item align-self-center">
              <div className="content mt-5 mt-md-0">
                <div className="progress">
                  <span className="title">{skillsData.BarTitle}</span>
                  <div
                    className="progress-bar"
                    data-progress={skillsData.BarPercentage}
                    style={{ opacity: 0, width: '0%' }}
                  >
                    <span>{skillsData.BarPercentage}%</span>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;