import React from 'react';

const clientLogos = [
    "/img/brand-1.png",
    "/img/brand-2.png",
    "/img/brand-3.png",
    "/img/brand-4.png",
    "/img/brand-5.png",
    "/img/brand-6.png",
    "/img/brand-7.png"
];

const Clients = () => {
    return (
        <div className="marquee">
            <ul className="list-unstyled">
                {clientLogos.map((logo, index) => (
                    <li key={index} className="item">
                        <a href="/about" className="marquee-item rounded">
                            <div className="marquee-content">
                                <img src={logo} alt={`Brand ${index + 1}`} />
                            </div>
                        </a>
                    </li>
                ))}
                {/* Duplicate items for seamless marquee effect */}
                {clientLogos.map((logo, index) => (
                    <li key={`duplicate-${index}`} className="item">
                        <a href="/about" className="marquee-item rounded">
                            <div className="marquee-content">
                                <img src={logo} alt={`Brand ${index + 1}`} />
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Clients;
