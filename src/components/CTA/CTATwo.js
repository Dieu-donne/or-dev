import React, { useState, useEffect } from "react";
import axios from "axios";
import MagneticButton from '../Miscellaneous/MagneticButton';

const CTATwo = () => {
	const [ctaData, setCtaData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
		.get("https://my-json-server.typicode.com/themeland/brilio-json-1/cta")
		.then((response) => {
			console.log("CTA API Response:", response.data);
			setCtaData(response.data.cta || response.data); // Handle different response formats
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
		<section className="cta layout-2 primary-bg">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-md-8 col-lg-7">
						<div className="cta-text">
							<span className="sub-title">{ctaData.sub_title}</span>
							<h2 className="title mt-3 mb-0">
								{ctaData.title} <span>{ctaData.highlight}</span>
							</h2>
						</div>
					</div>
					<div className="col-12 col-md-4 col-lg-5 text-md-end mt-3 mt-md-0">
						<MagneticButton 
							href={ctaData.button?.link}
							>
							{ctaData.button?.text}
						</MagneticButton>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTATwo;
