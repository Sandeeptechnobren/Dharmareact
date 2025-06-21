import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal, Nav, Tab, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "./userContext";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Navbar() {
  const { state, dispatch } = useContext(UserContext); // Access user state and dispatch
  const [showModal, setShowModal] = useState(false);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [captchaValid, setCaptchaValid] = useState(true);

  const handleClose = () => setShowModal(false);
  const handleShow = () => {
    regenerateCaptcha();
    setShowModal(true);
  };

  const regenerateCaptcha = () => {
    const randomNum1 = Math.floor(Math.random() * 10) + 1;
    const randomNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(randomNum1);
    setNum2(randomNum2);
    setUserAnswer("");
    setCaptchaValid(true);
  };

  const handleCaptchaSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = num1 + num2;
    if (parseInt(userAnswer) === correctAnswer) {
      toast.success("Captcha verification successful!");
      setCaptchaValid(true);
    } else {
      setCaptchaValid(false);
      toast.error("Captcha verification failed. Please try again.");
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const response = await axios.post("http://localhost:4000/api/users/login", { email, password });

      if (response.status === 200 && response.data.user) {
        toast.success("Login Successful!");
        dispatch({ type: 'LOGIN', payload: response.data.user });
        handleClose();
      }
      else{
        toast.error("Unexpected server response. Please try again.");
      }
    } catch (error) {
      const status = error.response?.status;
      if (status === 401) toast.error("Please register first.");
      else if (status === 402) toast.error("Incorrect password.");
      else toast.error(error.response?.data?.message || "Login failed.");
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const Dob = formData.get("Dob");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      toast.error("Password must contain at least 8 characters, including letters and numbers.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/users/register", {
        name,
        phone,
        email,
        Dob,
        password,
      });
      toast.success(response.data.message || "Registration successful!");
      handleClose();
    } catch (error) {
      const status = error.response?.status;
      if (status === 408) toast.error("User already registered. Use another phone number.");
      else if (status === 500) toast.error("Internal server error.");
      else toast.error(error.response?.data?.message || "Registration failed.");
    }
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    toast.info("Logged out successfully.");
  };

  return (
    <div className="navbar navbar-expand-lg bg-light navbar1" style={{ position: "sticky", top: 0, left: 0 }}>
      <a className="navbar-brand ms-2" href="#">
        <img className="logoimage" src="/dharmalogo.png" alt="Dharma Logo" />
        <b className="text-danger">&nbsp; Dharma </b>Soft-Tech
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item rounded">
            <Link to="/" className="nav-link rounded">Home</Link>
          </li>
          <li className="nav-item rounded">
            <Link to="/services" className="nav-link">Services/Courses</Link>
          </li>
          <li className="nav-item rounded">
            <Link to="/aboutus" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item rounded">
            <Link to="/contactus" className="nav-link">Contact</Link>
          </li>
          <li className="nav-item rounded">
            <Link to="/gallery" className="nav-link">Gallery</Link>
          </li>
          <li className="nav-item rounded">
            <Link to="/admin" className="nav-link">Admin</Link>
          </li>
          {state.isLogin ? (
            <>
            <li className="nav-item me-1 rounded"
            onClick={handleLogout}
            >
              <div style={{fontSize:"10px",display:"flex", flexDirection:"column"}}>
                {state.welcomeMessage}
              
                <button className="nav-link btn bg-danger btn-link">Logout</button>
              </div>
            </li>

            </>
          ) : (
            <li className="nav-item mx-1 rounded">
              <button onClick={handleShow} className="nav-link btn btn-link">Login/Sign-Up</button>
            </li>
          )}
        </ul>
      </div>

      {/* Modal for Login/Signup */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login/Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container defaultActiveKey="login">
            <Nav variant="tabs">
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="signup">Signup</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="forgetpassword">Forget Password</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Form onSubmit={handleLoginSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                  </Form.Group>
                  <Form.Check type="checkbox" label="Remember me" />
                  <Button variant="primary" type="submit" className="mt-3 w-100">Login</Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <Form onSubmit={handleSignupSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <div className="input-group">
                      <select className="form-control" style={{ width: "80px" }}>
                        <option value="+1">+1</option>
                        <option value="+91">+91</option>
                      </select>
                      <Form.Control name="phone" type="text" placeholder="Your phone number" required />
                    </div>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter your email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control name="Dob" type="date" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Enter password" required />
                    <Form.Text className="text-danger">Password must contain both letters and numbers.</Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmPassword" type="password" placeholder="Confirm password" required />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-3 w-100">Sign Up</Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="forgetpassword">
                <Form onSubmit={handleCaptchaSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Captcha</Form.Label>
                    <div>
                      What is <b>{num1}</b> + <b>{num2}</b>?
                      <input
                        type="text"
                        className={`form-control mt-2 ${!captchaValid ? "is-invalid" : ""}`}
                        value={userAnswer}
                        onChange={(e) => setUserAnswer(e.target.value)}
                        required
                      />
                      {!captchaValid && <div className="invalid-feedback">Incorrect captcha answer.</div>}
                    </div>
                  </Form.Group>
                  <Button variant="primary" type="submit" className="mt-3 w-100">Submit</Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default Navbar;
