import React, { useState, useEffect } from "react";
import axios from "axios";
import MagneticButton from '../Miscellaneous/MagneticButton';

const CTAOne = () => {
	const [ctaData, setCtaData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
		.get("https://my-json-server.typicode.com/themeland/brilio-json-1/cta")
		.then((response) => {
			console.log("Full API Response:", response.data);
			setCtaData(response.data.cta || response.data);
			setLoading(false);
		})
		.catch((error) => {
			console.error("Error fetching CTA data:", error);
			setLoading(false);
		});
	}, []);

	if (loading) return <p>Loading CTA...</p>;
	if (!ctaData || Object.keys(ctaData).length === 0) return <p>Error loading CTA.</p>;

	return (
		<section className="cta border-top border-light-subtle">
			<div className="container">
				<div className="row justify-content-center text-center">
					<div className="col-12 col-md-10 col-lg-7">
						<h2 className="title mb-0 mb-md-2">{ctaData.title}</h2>
						<div className="cta-text">
							<span className="line-item">{ctaData.highlight}</span>
							<span className="line"></span>
							<MagneticButton 
								href={ctaData.button?.link}
								>
								{ctaData.button?.text}
							</MagneticButton>
						</div>

						{/* Socials */}
						<div className="socials mt-5">
							<nav className="nav justify-content-center">
								{ctaData.socials?.length > 0 ? (
								ctaData.socials.map((social, index) => (
									<a key={index} className="nav-link swap-icon" href={social.link}>
									{social.name} <i className="icon rotate bi bi-arrow-right-short"></i>
									</a>
								))
								) : (
								<p>No social links available.</p>
								)}
							</nav>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTAOne;
