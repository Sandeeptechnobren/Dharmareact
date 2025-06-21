import React, { useContext } from "react";
import { AdminContext } from "./adminContext";

function AdminNavbar() {
  const { adminName } = useContext(AdminContext);

  return (
    <div
      className="navbar navbar-expand-lg bg-light"
      style={{ position: "sticky", top: 0, left: 0, zIndex: 1000 }}
    >
      {/* Branding Section */}
      <a className="navbar-brand ms-2" href="#">
        <img
          className="logoimage"
          src="/dharmalogo.png" // Update the image path if incorrect
          alt="Dharma Logo"
          style={{ height: "40px", marginRight: "10px" }}
        />
        <b className="text-danger">Dharma</b> Soft-Tech
      </a>

      {/* Admin Info Section */}
      <div className="ms-auto d-flex align-items-center me-3">
        <h5 className="mb-0 me-2">Welcome, {adminName || "Guest"}</h5>
        <i
          className="fa-solid fa-user"
          style={{
            fontSize: "25px",
            paddingLeft: "5px",
            paddingRight: "5px",
            color: "#555",
          }}
          title="Admin Profile"
        ></i>
      </div>
    </div>
  );
}

export default AdminNavbar;
