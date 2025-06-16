import React, {useState, useEffect} from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton';
import axios from "axios";

const Hero = ({ 

    introText = "Hello! I’m Brilio.",
    title = "Creating impactful experiences on",
    highlightedText = "visual design",
    buttonText = "Let's Talk!",
    description = "I transform ideas into impactful digital experiences, delivering innovative solutions that elevate brands and captivate audiences around the world.",
    bgImage1 = "/img/hero-bg-1.svg",
    bgImage2 = "/img/hero-bg-2.svg"
}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_STRAPI_URL;
        axios
        .get(`${apiUrl}/api/hero`)
        .then((response) => setItems(response.data.data))
        .catch((error) => console.error("Error fetching portfolio data:", error));

    }, []);
    
    return (
        <section id="home" className="hero-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* Hero Content */}
                        <div className="hero-content">
                            <span className="intro-text">{items.MicroText}</span>
                            <h1 className="title section-title mt-3 mt-md-4 mb-md-5">
                                {items.MainTitle} <span>{items.SubTitle}</span>
                            </h1>

                            {/* Content */}
                            <div className="content d-flex flex-column flex-md-row justify-content-md-between">
                                <div className="hero-button order-last order-md-first mt-4 mt-md-0">
									<MagneticButton 
										href={items.ButtonLink}
										>
										{items.ButtonText}
									</MagneticButton>
                                </div>
                                <p className="sub-title order-first order-md-last">{items.SmallText}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
