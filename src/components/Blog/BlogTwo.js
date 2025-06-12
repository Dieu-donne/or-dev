import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogTwo = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		// Fetch data from the API when the component mounts
		axios.get('https://my-json-server.typicode.com/themeland/brilio-json-2/blog')
		.then(response => {
			setBlogs(response.data);
		})
		.catch(error => {
			console.error("There was an error fetching the blog data!", error);
		});
	}, []);

	return (
		<div className="row items">
			{blogs.map(blog => (
				<div key={blog.id} className="col-12 col-md-6 col-lg-4 item">
					{/* Blog Post */}
					<div className="card blog-item">
						<div className="image-holder">
							{/* Card Thumbnail */}
							<a className="card-thumb" href={blog.link}>
								<img src={blog.image} alt={blog.title} />
							</a>
							<div className="card-overlay top fade-down">
								<div className="logo">
									<img src="/img/logo.png" alt="Logo" />
								</div>
								<div className="post-meta d-flex flex-column ms-3">
									<span>Posted by</span>
									<span className="post-author"><strong>{blog.author}</strong></span>
								</div>
							</div>
						</div>
						{/* Card Content */}
						<div className="card-content mt-3">
							<div className="heading">
								<div className="post-meta d-flex">
									<span className="post-date">
										<i className="bi bi-clock me-1"></i>{blog.date}
									</span>
								</div>
								<h4 className="title my-2">
									<a href={blog.link}>{blog.title}</a>
								</h4>
								<div className="card-terms">
									{blog.categories.map((category, index) => (
										<a key={index} className="terms badge" href="/blog">{category}</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default BlogTwo;
