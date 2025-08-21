import React, {useState, useEffect} from 'react';
import MagneticButton from '../Miscellaneous/MagneticButton';
import axios from "axios";

const Hero = ({ 

    introText = "By Or Foundation",
    title = "The Messy Truth: Where Your Clothes Go",
    highlightedText = "to 'die'",
    buttonText = "Learn More",
    buttonLink = "https://atmos.earth/the-messy-truth/",
    description = "The Global North’s relationship with textile waste is marked by sensationalism, fetishization, and denial—anything but responsibility. It’s time that changed.",
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
                            <span className="intro-text">{items?.MicroText || introText}</span>
                            <h1 className="title section-title mt-3 mt-md-4 mb-md-5">
                                {items?.MainTitle || title} <span>{items?.SubTitle || highlightedText}</span>
                            </h1>

                            {/* Content */}
                            <div className="content d-flex flex-column flex-md-row justify-content-md-between">
                                <div className="hero-button order-last order-md-first mt-4 mt-md-0">
									<MagneticButton 
										href={items?.ButtonLink || buttonLink}
										>
										{items?.ButtonText || buttonText}
									</MagneticButton>
                                </div>
                                <p className="sub-title order-first order-md-last">{items?.SmallText || description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
