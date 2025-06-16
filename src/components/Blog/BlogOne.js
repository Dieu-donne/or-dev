import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BlogOne = () => {
	const [blogs, setBlogs] = useState([]);
  	const imageBaseUrl = process.env.REACT_APP_STRAPI_URL;

	useEffect(() => {
    const apiUrl = process.env.REACT_APP_STRAPI_URL;

		// Fetch data from the API when the component mounts
		axios
		.get(`${apiUrl}/api/blog-post-dynamics?populate=*&pagination[pageSize]=3&pagination[page]=1`)
		.then(response => {
			// Slice the first 3 blog posts
			setBlogs(response.data.data);
		})
		.catch(error => {
			console.error("There was an error fetching the blog data!", error);
		});
	}, []);
      console.log(blogs);

	return (
		<div className="row items">
			{blogs.map(blog => (
				<div key={blog.id} className="col-12 col-md-6 col-lg-4 item">
					{/* Blog Post */}
					<div className="card blog-item">
						<div className="image-holder">
							{/* Card Thumbnail */}
							<a className="card-thumb" href={`/blog-single/${blog.documentId}`}>
								<img src={`${imageBaseUrl}${blog.CoverImage?.url}`} alt={blog.Title} />
							</a>
							<div className="card-overlay top fade-down">
								<div className="post-meta d-flex flex-column ms-3">
									<span>Authored by</span>
									{blog.authors.map((category, index) => (
									<span className="post-author"><strong>{category.name}</strong></span>
									))}
								</div>
							</div>
						</div>
						{/* Card Content */}
						<div className="card-content mt-3">
							<div className="heading">
								<div className="post-meta d-flex">
									<span className="post-date">
										<i className="bi bi-clock me-1"></i>{blog.Date}
									</span>
								</div>
								<h4 className="title my-2">
									<a href={blog.link}>{blog.Title}</a>
								</h4>
								<div className="card-terms">
									{blog.blog_tags.map((category, index) => (
										<a key={index} className="terms badge" href="/blog">{category.Title}</a>
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

export default BlogOne;
