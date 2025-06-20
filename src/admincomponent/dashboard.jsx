import React, { useContext } from "react";
import { AdminContext } from "./adminContext";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { adminName } = useContext(AdminContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  const navigateToCoursePage = () => {
    navigate("/course");
  };

  const navigateToAddAdminPage = () => {
    navigate("/add-admin");
  };

  const navigateToTestimonialPage = () => {
    navigate("/add-testimonial");
  };

  const navigateToServicesPage = () => {
    navigate("/AddServices");
  };

  return (
    <div className="container">
      <marquee className="text-danger py-2" direction="left" scrollamount="5">
        <h6
          style={{
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
            color: "red",
          }}
        >
          Welcome to the Dharma-SoftTech Admin Dashboard!
        </h6>
      </marquee>

      <h2 className="text-center mb-4 text-success">Welcome, {adminName}</h2>

      <div className="row g-3">
        {/* Redirect to Course Page */}
        <div className="col-md-4">
          <div
            className="card shadow border-0 h-100"
            style={{ cursor: "pointer" }}
            onClick={navigateToCoursePage}
          >
            <div className="card-header bg-info text-white rounded-top">
              <h4 className="card-title">View Course Details</h4>
            </div>
            <div className="card-body">
              <p>Click to view and manage course details.</p>
            </div>
          </div>
        </div>

        {/* Redirect to Add Admin Page */}
        <div className="col-md-4">
          <div
            className="card shadow border-0 h-100"
            style={{ cursor: "pointer" }}
            onClick={navigateToAddAdminPage}
          >
            <div className="card-header bg-success text-white rounded-top">
              <h4 className="card-title">Add a New Admin</h4>
            </div>
            <div className="card-body">
              <p>Click to register a new admin to manage the platform.</p>
            </div>
          </div>
        </div>

        {/* Redirect to Add Testimonial Page */}
        <div className="col-md-4">
          <div
            className="card shadow border-0 h-100"
            style={{ cursor: "pointer" }}
            onClick={navigateToTestimonialPage}
          >
            <div className="card-header bg-warning text-white rounded-top">
              <h4 className="card-title">Add a Testimonial</h4>
            </div>
            <div className="card-body">
              <p>Click to add a new student testimonial.</p>
            </div>
          </div>
        </div>

        {/* Redirect to Services Page */}
        <div className="col-md-4">
          <div
            className="card shadow border-0 h-100"
            style={{ cursor: "pointer" }}
            onClick={navigateToServicesPage}
          >
            <div className="card-header bg-danger text-white rounded-top">
              <h4 className="card-title">Manage Services</h4>
            </div>
            <div className="card-body">
              <p>Click to manage the available services.</p>
            </div>
          </div>
        </div>

        <button className="logout-button btn btn-danger" onClick={handleLogout}>
          Logout
        </button>

        <style>
          {`
            .logout-button {
              height:50px;
              width:100px;
              position: fixed;
              bottom: 20px;
              right: 20px;
              z-index: 1000;
              padding: 10px 20px;
              font-size: 16px;
              border-radius: 50px;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            }

            .logout-button:hover {
              background-color: #d32f2f;
            }

            .card:hover {
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Dashboard;
