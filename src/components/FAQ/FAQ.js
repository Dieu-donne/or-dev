import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      question: "What services do you offer?",
      answer: "I offer a range of services including web design, branding, digital marketing, UI/UX design etc. Each project is tailored to meet your unique needs and goals.",
    },
    {
      question: "How do I get started on a project with you?",
      answer: "Getting started is simple! Just reach out via the contact form on my website with your project details, and I’ll schedule a consultation to discuss how we can work together to achieve your vision.",
    },
    {
      question: "Can you help with creative direction or ideas?",
      answer: "Absolutely! Whether you have a clear vision or need help developing ideas, I offer creative direction to guide your project and ensure it reflects your brand or personal style.",
    },
    {
      question: "What is your pricing structure?",
      answer: "Pricing varies depending on the scope and complexity of the project. After an initial discussion, I’ll provide you with a customized quote that aligns with your specific requirements.",
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes, I work with clients from around the world. Thanks to remote collaboration tools, we can easily communicate and work together regardless of your location.",
    },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="intro">
              <h3 className="title">Frequently Asked Questions</h3>
            </div>
          </div>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-12 col-md-10">
            <div className="accordion accordion-flush" id="brilio-accordion">
              {faqData.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h4 className="accordion-header">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index + 1}`}
                    >
                      {faq.question}
                    </button>
                  </h4>
                  <div
                    id={`collapse${index + 1}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    data-bs-parent="#brilio-accordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
