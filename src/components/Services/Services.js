import React from 'react';

const services = [
    {
        id: "01",
        title: "Branding",
        description: "I craft distinctive brand identities that resonate and endure. Through strategic insight and meticulous design, I build a unified visual language that captures your essence and speaks to your audience."
    },
    {
        id: "02",
        title: "UI/UX",
        description: "Designing intuitive and engaging user experiences that seamlessly blend form and function. I focus on creating interfaces that are not only visually appealing but also deeply functional and user-centric."
    },
    {
        id: "03",
        title: "App Design",
        description: "Transforming ideas into captivating app experiences. I design with precision and creativity, ensuring every interaction is smooth and every visual element enhances user delight and engagement."
    }
];

const Services = () => {
    return (
        <div className="row service-wrapper items mt-md-5">
            {services.map((service, index) => (
                <div key={index} className="col-12 col-md-6 col-lg-4">
                    <div className="item d-flex align-items-start">
                        <div className="item-count">{service.id}</div>
                        <div className="content">
                            <h4 className="mt-0">{service.title}</h4>
                            <p>{service.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Services;
