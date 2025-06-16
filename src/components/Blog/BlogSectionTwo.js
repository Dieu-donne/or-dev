import React from 'react';
import BlogOne from './BlogOne';

const BlogSection = ({ title = "Insights", viewAllLink = "/blog" }) => {
return (
	<section className="blog pt-0">
		<div className="container">
			{/* BlogOne Component */}
			<BlogOne />
		</div>
	</section>
);
};

export default BlogSection;
