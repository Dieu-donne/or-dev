import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const SkillsSection = () => {
  const [skillsData, setSkillsData] = useState(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/themeland/brilio-json-1/skills')
      .then(response => {
        setSkillsData(response.data);
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
          <h3 className="title">{skillsData.title}</h3>
        </div>
      </div>
      <div className="col-12 col-lg-8">
        <div className="row items">
          {skillsData.items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 item">
              <div className="content">
                <div className="heading d-flex align-items-center">
                  <i className={`icon ${item.icon}`}></i>
                  <h2 className="title m-0 ms-2">{item.value}</h2>
                </div>
                <span>{item.label}</span>
                <p className="mt-3">{item.description}</p>
              </div>
            </div>
          ))}
          {skillsData.skillsProgress.map((skill, index) => (
            <div key={index} className="col-12 col-md-6 item align-self-center">
              <div className="content mt-5 mt-md-0">
                <div className="progress">
                  <span className="title">{skill.title}</span>
                  <div
                    className="progress-bar"
                    data-progress={skill.progress}
                    style={{ opacity: 0, width: '0%' }}
                  >
                    <span>{skill.progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;