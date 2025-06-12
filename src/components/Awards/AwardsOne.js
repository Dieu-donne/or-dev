import React, { useEffect, useState } from "react";
import axios from "axios";

const AwardsOne = () => {
	const [awardsData, setAwardsData] = useState(null);

	useEffect(() => {
		axios
		.get("https://my-json-server.typicode.com/themeland/brilio-json-2/awards")
		.then((response) => {
			setAwardsData(response.data);
		})
		.catch((error) => {
			console.error("Error fetching awards:", error);
		});
	}, []);

	return (
		<section className="awards sticky primary-bg">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-3">
						{/* Intro */}
						<div className="intro">
							<h3 className="title">
								{awardsData ? awardsData.title : "Loading..."}
							</h3>
						</div>
					</div>

					<div className="col-12 col-lg-8">
						<ul className="list-group list-group-flush">
						{awardsData && awardsData.items.length > 0 ? (
							awardsData.items.map((award, index) => (
							<li key={index} className="list-group-item">
								<div className="content">
									<h4 className="title mt-0 mb-3">{award.title}</h4>
									<span className="tags mt-3 mt-md-0">
										{award.year} - {award.award}
									</span>
								</div>
								{/* Award Button */}
								<a className="award-btn rounded-pill" href={award.link}>
									<i className="icon rotate bi bi-arrow-right-short m-0"></i>
								</a>
							</li>
							))
						) : (
							<li className="list-group-item">
								<div className="content">Loading awards...</div>
							</li>
						)}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AwardsOne;
