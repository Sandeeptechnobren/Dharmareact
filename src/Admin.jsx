import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminNavbar from "./admincomponent/adminnavbar";
import LoginForm from "./admincomponent/loginform";
import Dashboard from "./admincomponent/dashboard";
import { AdminProvider } from "./admincomponent/adminContext";
import AddAdmin from "./admincomponent/addadmin";
import AddServices from "./admincomponent/addservices";
import Testimonial from "./admincomponent/addtestimonial";
import Courses from "./admincomponent/addcourses";

function Admin() {
  return (
    <AdminProvider>
      <Router>
        <AdminNavbar />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course" element={<Courses />} /> {/* Corrected this path */}
          <Route path="/add-course" element={<Courses />} /> {/* Corrected this path */}
          <Route path="/add-admin" element={<AddAdmin />} /> {/* Corrected this path */}
          <Route path="/add-testimonial" element={<Testimonial />} /> {/* Corrected this path */}
          <Route path="/AddServices" element={<AddServices />} /> {/* Corrected this path */}
      

          {/* Handle the /admin route */}
          <Route path="/admin" element={<Navigate to="/" />} />
          
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AdminProvider>
  );
}

export default Admin;
