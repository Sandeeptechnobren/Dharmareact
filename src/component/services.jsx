import React, { useState, useEffect, useContext } from 'react'; // Corrected import for useContext
import axios from 'axios';
import { UserContext } from './userContext'; // Import UserContext

const Services = () => {
  const { state, dispatch } = useContext(UserContext); //UseContext to get the state from the UserContext
  const user = state?.user;
  const [searchInput, setSearchInput] = useState('');
  const [services, setServices] = useState([]);
  const [courses, setCourses] = useState([]);
  const [learningList, setLearningList] = useState([]); // Stores only courses
  const [showInquiryForm, setShowInquiryForm] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [inquiryDetails, setInquiryDetails] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: user?.phone || '',
    message: ''
  });
  console.log("UserContext state:", state); // Debugging statement

console.log("Logged-in user details:", user);
    useEffect(() => {
      console.log("Logged-in user details:", user);
    }, [user]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesResponse = await axios.get('http://localhost:4000/api/services');
        setServices(servicesResponse.data || []);

        const coursesResponse = await axios.get('http://localhost:4000/api/courses');
        setCourses(coursesResponse.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => setSearchInput(e.target.value.trim().toLowerCase());

  const isNew = (createdAt) => {
    const diffInDays = Math.floor((new Date() - new Date(createdAt)) / (1000 * 60 * 60 * 24));
    return diffInDays <= 7;
  };

  const addToLearningList = (course) => {
    setLearningList([...learningList, course]);
  };

  const removeFromLearningList = (index) => {
    setLearningList(learningList.filter((_, i) => i !== index));
  };

  const openInquiryForm = (service) => {
    setSelectedService(service);
    setShowInquiryForm(true);
  };

  const closeInquiryForm = () => {
    setShowInquiryForm(false);
    setInquiryDetails({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      message: ''
    });
  };

  const handleInquiryChange = (e) => {
    setInquiryDetails({ ...inquiryDetails, [e.target.name]: e.target.value });
  };

  const handleInquirySubmit = async (e) => {
    e.preventDefault();

    // Validate email format
    if (!/^\S+@\S+\.\S+$/.test(inquiryDetails.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate phone format (10-digit)
    if (!/^\d{10}$/.test(inquiryDetails.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/users/inquiry", {
        name: inquiryDetails.name,
        email: inquiryDetails.email,
        phone: inquiryDetails.phone,
        message: inquiryDetails.message,
        serviceName: selectedService?.serviceName,
      });

      if (response.status === 201) {
        alert("Inquiry submitted successfully!");
        closeInquiryForm(); // Close the form after submission
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("Failed to submit inquiry. Please try again.");
    }
  };

  const filteredServices = services.filter((service) => service.serviceName?.toLowerCase().includes(searchInput));
  const filteredCourses = courses.filter((course) => course.courseName?.toLowerCase().includes(searchInput));

  return (
    <div>
      {/* Search Bar */}
      <section id="search">
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="mt-5">Explore Our Offerings</h2>
              <hr className="w-50 mx-auto" />
              <input
                type="text"
                id="searchInput"
                value={searchInput}
                onChange={handleSearch}
                placeholder="Search for services or courses..."
                className="form-control my-3"
                style={{ border: '2px solid black', maxWidth: 400, margin: '0 auto', borderRadius: 25 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h3 className="text-center">Our Services</h3>
          <hr />
          <div className="row">
            {filteredServices.length > 0 ? (
              filteredServices.map((service) => (
                <div className="col-md-4 mb-4" key={service._id}>
                  <div className="card text-center" style={{ alignItems: 'center', position: 'relative' }}>
                    {isNew(service.createdAt) && (
                      <span className="badge bg-secondary" style={{ position: 'absolute', top: 10, right: 10 }}>
                        New
                      </span>
                    )}
                    <img src="/src/images/dharmalogo.png" className="card-img-top" alt={service.serviceName} style={{ height: 150, width: 150 }} />
                    <div className="card-body">
                      <h5 className="card-title">{service.serviceName}</h5>
                      <p className="card-text">{service.serviceDescription}</p>
                      <button className="btn btn-primary" onClick={() => openInquiryForm(service)}>
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No services available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="mt-5">
        <div className="container">
          <h3 className="text-center">Our Courses</h3>
          <hr />
          <div className="row">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <div className="col-md-4 mb-4" key={course._id}>
                  <div className="card text-center" style={{ alignItems: 'center', position: 'relative' }}>
                    {isNew(course.createdAt) && (
                      <span className="badge bg-secondary" style={{ position: 'absolute', top: 10, right: 10 }}>
                        New
                      </span>
                    )}
                    <img src="/src/images/dharmalogo.png" className="card-img-top" alt={course.courseName} style={{ height: 150, width: 150 }} />
                    <div className="card-body">
                      <h5 className="card-title">{course.courseName}</h5>
                      <p className="card-text">{course.courseDescription}</p>
                      <button className="btn btn-primary" onClick={() => addToLearningList(course)}>
                        Enroll Course
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No courses available.</p>
            )}
          </div>
        </div>
      </section>

      {/* Learning List Section */}
      {learningList.length > 0 && (
        <section id="learning-list" className="mt-5">
          <div className="container">
            <h3 className="text-center">Your Learning List</h3>
            <hr />
            <div className="row">
              {learningList.map((course, index) => (
                <div className="col-md-4" key={index}>
                  <div className="card text-center">
                    <img src="/src/images/dharmalogo.png" className="card-img-top" style={{ height: 150, width: 150 }} />
                    <div className="card-body">
                      <h5 className="card-title">{course.courseName}</h5>
                      <button className="btn btn-danger" onClick={() => removeFromLearningList(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form Modal */}
      {showInquiryForm && (
        <div className="modal fade show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Inquiry for <b><u><span className="text-danger">{selectedService?.serviceName}</span></u></b></h5>
                <button className="btn-close" onClick={closeInquiryForm}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleInquirySubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label"><strong>Full Name</strong></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="form-control"
                      placeholder="Enter your full name"
                      value={inquiryDetails.name}
                      onChange={handleInquiryChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label"><strong>Email Address</strong></label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={inquiryDetails.email}
                      onChange={handleInquiryChange}
                      required
                    />
                    {inquiryDetails.email && !/^\S+@\S+\.\S+$/.test(inquiryDetails.email) && (
                      <small className="text-danger">Please enter a valid email.</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label"><strong>Phone Number</strong></label>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Enter your phone number"
                      value={inquiryDetails.phone}
                      onChange={handleInquiryChange}
                      required
                    />
                    {inquiryDetails.phone && !/^\d{10}$/.test(inquiryDetails.phone) && (
                      <small className="text-danger">Please enter a valid 10-digit phone number.</small>
                    )}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label"><strong>Message</strong></label>
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="3"
                      placeholder="Enter your message"
                      value={inquiryDetails.message}
                      onChange={handleInquiryChange}
                    ></textarea>
                  </div>

                  <div className="d-flex justify-content-between">
                    <button type="button" className="btn btn-secondary" onClick={closeInquiryForm}>Cancel</button>
                    <button type="submit" className="btn btn-primary">Submit Inquiry</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
