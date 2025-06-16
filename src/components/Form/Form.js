import React, { useState } from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton';

const Form = () => {
  const contactInfo = {
    title: 'Schedule a call with us',
    description: 'Whether you’re looking to start a new project or simply want to chat, feel free to reach out to me!',
    phone: '+233.000.000.0000',
    email: 'hello@theor.org',
    address: 'Unit 2C, 603 Southern Liberia Rd, Accra',
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    website: '',
    interest: '',
    budget: '',
    timeline: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="contact-area primary-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 order-last order-md-first">
            <div className="contact-info">
              <h3>{contactInfo.title}</h3>

              <div className="content contact-form">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <i className="icon icon-phone"></i>
                    <a className="content" href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-envelope-open"></i>
                    <a className="content" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                  </li>
                  <li className="list-group-item">
                    <i className="icon icon-location-pin"></i>
                    <a className="content" href="/#">{contactInfo.address}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Form;
