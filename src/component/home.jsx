import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [error, setError] = useState(null);

  // Fetch testimonials from the backend API
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/testimonials");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Sort testimonials to show the latest first (assuming testimonials have a `date` property)
        const sortedTestimonials = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        // Take only the first 3 testimonials
        const latestTestimonials = sortedTestimonials.slice(0, 3);

        setTestimonials(latestTestimonials);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <>
      <div>
        {/* Hero Section */}
        <header className="hero-section text-center">
          <div className="container containerheader">
            <h1><b>Innovative software solutions</b></h1>
            <p className="lead">Empowering Learnings through technology and innovation</p>
            <a href="#features" id="featuresbtn" className="btn btn-primary btn-lg"><b>Our Services</b></a>
          </div>
        </header>

        {/* Features Section */}
        <Link to="/services">
          <section id="features" className="py-5">
            <div className="container">
              <h2 className="text-center">Explore our Offerings</h2>
              <div className="row">
                <div className="col-md-4 card_decor">
                  <div className="feature-box">
                    <img src="/softwaredev.jpg" className="serviceimage" alt="Software Development" />
                    <h3>Software Development</h3>
                    <p>Tailored software solutions to meet your unique business needs.</p>
                  </div>
                </div>
                <div className="col-md-4 card_decor">
                  <div className="feature-box">
                    <img src="src/images/appdev.jpg" alt="Mobile App Development" className="serviceimage" />
                    <h3>Mobile App Development</h3>
                    <p>Creating user-friendly mobile apps for iOS and Android platforms.</p>
                  </div>
                </div>
                <div className="col-md-4 card_decor">
                  <div className="feature-box">
                    <img src="/clouddev.jpg" alt="Cloud Integration" className="serviceimage" />
                    <h3>Cloud Integration</h3>
                    <p>Seamless integration of cloud services to enhance business operations.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Link>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center">What Our Clients Say</h2>
            {error ? (
              <p className="text-danger text-center">{error}</p>
            ) : (
              <div className="row">
                {testimonials.map((testimonial, index) => (
                  <div className="col-md-4" key={testimonial._id}>
                    <div
                      className="testimonial-card text-center"
                      style={{
                        maxWidth: "300px",
                        height: "250px",
                        border: "1px solid #ddd",
                        padding: "15px",
                        margin: "15px auto",
                        borderRadius: "8px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                        overflow: "hidden",
                      }}
                    >
                      {/* Add the "New" badge to the latest testimonial */}
                      {index === 0 && (
                        <span
                          style={{
                            position: "absolute",
                            top: "10px",
                            right: "10px",
                            backgroundColor: "#ff4757",
                            color: "#fff",
                            padding: "5px 10px",
                            borderRadius: "20px",
                            fontSize: "12px",
                          }}
                        >
                          New
                        </span>
                      )}
                      <img
                        src={testimonial.image || "/default.png"}
                        alt={`Client ${testimonial.stdName}`}
                        className="testimonial-image"
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          objectFit: "cover",
                          margin: "0 auto",
                        }}
                      />
                      <h5 className="mt-3">{testimonial.stdName}</h5>
                      <p
                        className="font-italic"
                        style={{
                          fontSize: "14px",
                          height: "auto",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical",
                        }}
                      >
                        "{testimonial.testimonialContent}"
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
