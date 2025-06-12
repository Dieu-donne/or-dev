import React, { useEffect } from 'react';

const testimonials = [
  {
    name: 'Jane Doe',
    position: 'CEO, Themeland Inc.',
    image: '/img/client-1.jpg',
    content: `"We were blown away by Themeland's creativity, professionalism, and attention to detail. The results were beyond our expectations. We couldn't be happier! We would highly recommend Themeland to anyone in need of their services."`
  },
  {
    name: 'Michael Lee',
    position: 'Chief Marketing Officer, XYZ Corporation',
    image: '/img/client-2.jpg',
    content: `"Working with Themeland was an absolute dream. They brought our vision to life and exceeded all of our expectations. We can't thank them enough! They were able to take our ideas and turn them into a reality that was even better than we had imagined."`
  },
  {
    name: 'Sarah Johnson',
    position: 'Head of Design, Creative Co.',
    image: '/img/client-1.jpg',
    content: `"It was a privilege to work with Themeland on our project. They demonstrated a deep understanding of our business, our customers, and our goals. Their innovative approach and dedication to excellence resulted in a finished product that exceeded our expectations."`
  }
];

const Testimonial = () => {
  useEffect(() => {
    const swiper = new window.Swiper('.swiper-container', {
		autoplay: {
			delay: 5000,
		},
		loop: true,
		slidesPerView: 1,
		spaceBetween: 20,
		effect: "creative",
		creativeEffect: {
		prev: {
			shadow: true,
			translate: ["-120%", 0, -500],
		},
		next: {
			shadow: true,
			translate: ["120%", 0, -500],
		},
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			type: "fraction",
		},
		on: {
			slideChangeTransitionStart: function () {
				document.querySelectorAll('.testimonial-thumb img').forEach(img => {
				img.classList.remove('animated', 'zoomIn');
				img.style.opacity = '0';
				});
			},
			slideChangeTransitionEnd: function () {
				document.querySelectorAll('.testimonial-thumb img').forEach(img => {
				img.classList.add('animated', 'zoomIn');
				img.style.opacity = '1';
				});
			}
		}
    });
  }, []);

  return (
    <div className="container">
      <div className="row testimonials justify-content-center">
        <div className="col-12 col-md-10 col-lg-7">
          <div className="swiper-container slider-min items">
            <div className="swiper-wrapper">
              {testimonials.map((testimonial, index) => (
                <div className="swiper-slide item" key={index}>
                  <div className="testimonial text-center border rounded-5 p-4 p-md-0">
                    <div className="testimonial-meta">
                      <div className="testimonial-thumb">
                        <img className="rounded-circle" src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <h5 className="client-name mt-3 mb-1">{testimonial.name}</h5>
                      <span className="client-position">{testimonial.position}</span>
                    </div>
                    <div className="testimonial-content mt-4">
                      <p>{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;