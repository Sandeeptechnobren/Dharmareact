import React from 'react';

function Location() {
  return (
    <div className="container my-5 p-3">
      {/* Our Location Heading Section */}
      <div
        className=" text-dark text-center"
        style={{
          background: "linear-gradient(90deg, rgb(233, 234, 237) 0%, rgb(237, 228, 230) 100%)",
          borderRadius: "10px 10px 0px 0px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
      
      </div>

      {/* Main Card */}
      <div className="card shadow-lg border-0">
        <div className="row g-0">
          {/* Map Section */}
          <div className="col-md-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m13!1m11!1m3!1d404.42493476794954!2d82.58390640766979!3d25.56461237262758!2m2!1f0!2f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1726773369653!5m2!1sen!2sin"
              className="w-100 h-100 rounded-start"
              style={{
                height: "100%",
                minHeight: "300px",
                border: "0",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Address and Links Section */}
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold mb-3">Visit Us</h5>
              <p className="card-text fs-5 mb-4 text-muted">
                74, Seer, Seur, Mariahu Jaunpur, <br />
                Uttar Pradesh 222161
              </p>

              {/* Buttons for Links */}
              <div className="d-flex flex-column align-items-center gap-3">
                <a
                  href="/careers"
                  className="btn btn-primary w-75 shadow"
                >
                  Work With Us 
                </a>
                <a
                  href="/services"
                  className="btn btn-success w-75 shadow"
                >
                  Get Our Services
                </a>
              </div>

              <hr className="my-4" />

              {/* Footer Text */}
              <p className="text-muted mb-0">
                &copy; <b>Dharma </b>Soft-tech || All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
