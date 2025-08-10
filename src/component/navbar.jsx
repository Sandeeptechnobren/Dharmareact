import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Modal, Nav, Tab, Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { UserContext } from "./userContext";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Navbar() {
  const { state, dispatch } = useContext(UserContext);
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
      const response = await axios.post("https://68.183.108.227/croose/public/index.php/api/users/login", {
        email,
        password
      });

      if (response.status === 200 && response.data.user) {
        toast.success("Login Successful!");
        dispatch({ type: "LOGIN", payload: response.data.user });
        handleClose();
      } else {
        toast.error("Unexpected server response. Please try again.");
      }
    } catch (error) {
      const status = error.response?.status;
      if (status === 401) toast.error("Please register first.");
      else if (status === 402) toast.error("Incorrect password.");
      else toast.error(error.response?.data?.message || "Login failed.");
    }
  };

  // const handleSignupSubmit = async (e) => {
  //   e.preventDefault();

  //   const formData = new FormData(e.target);
  //   const name = formData.get("name");
  //   const business_name = formData.get("business_name");
  //   const business_location = formData.get("business_location");
  //   const phone_number = formData.get("phone_number");
  //   const email = formData.get("email");
  //   const password = formData.get("password");
  //   const confirmPassword = formData.get("confirmPassword");

  //   if (password !== confirmPassword) {
  //     toast.error("Passwords do not match!");
  //     return;
  //   }

  //   if (!/^\d{10}$/.test(phone_number)) {
  //     toast.error("Phone number must be 10 digits.");
  //     return;
  //   }

  //   const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  //   if (!passwordRegex.test(password)) {
  //     toast.error("Password must contain at least 8 characters, including letters and numbers.");
  //     return;
  //   }

  //   const payload = {
  //     name,
  //     business_name,
  //     business_location,
  //     phone_number,
  //     email,
  //     password
  //   };

  //   try {
  //     await axios.get("https://68.183.108.227/croose/public/index.php/sanctum/csrf-cookie", {
  //       withCredentials: true,
  //     });

  //     const response = await axios.post(
  //       "https://68.183.108.227/croose/public/index.php/api/auth/register",
  //       payload,
  //       {
  //         withCredentials: true,
  //         headers: { Accept: "application/json" },
  //       }
  //     );

  //     toast.success(response.data.message || "Registration successful!");
  //     handleClose();
  //   } catch (error) {
  //     const status = error.response?.status;
  //     if (status === 408) toast.error("User already registered.");
  //     else if (status === 500) toast.error("Internal server error.");
  //     else toast.error(error.response?.data?.message || "Registration failed.");
  //   }
  // };
const handleSignupSubmit = async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const business_name = e.target.business_name.value;
  const business_location = e.target.business_location.value;
  const phone_number = e.target.phone_number.value;
  const email = e.target.email.value;
  const password = e.target.password.value;
  const confirmPassword = e.target.confirmPassword.value;

  if (password !== confirmPassword) {
    toast.error("Passwords do not match!");
    return;
  }

  if (!/^\d{10}$/.test(phone_number)) {
    toast.error("Phone number must be 10 digits.");
    return;
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!passwordRegex.test(password)) {
    toast.error("Password must contain at least 8 characters, including letters and numbers.");
    return;
  }

  // ✅ JSON payload exactly as you want
  const payload = {
    name,
    business_name,
    business_location,
    phone_number,
    email,
    password,
  };

  try {
    const response = await axios.post(
      "https://68.183.108.227/croose/public/index.php/api/register",
      JSON.stringify(payload),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    toast.success(response.data.message || "Registration successful!");
    handleClose();
  } catch (error) {
    const status = error.response?.status;
    if (status === 408) toast.error("User already registered.");
    else if (status === 500) toast.error("Internal server error.");
    else toast.error(error.response?.data?.message || "Registration failed.");
  }
};




  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.info("Logged out successfully.");
  };

  return (
    <div className="navbar navbar-expand-lg bg-light navbar1" style={{ position: "sticky", top: 0 }}>
      <a className="navbar-brand ms-2" href="#">
        <img className="logoimage" src="/dharmalogo.png" alt="Dharma Logo" />
        <b className="text-danger">&nbsp; Dharma </b>Soft-Tech
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item rounded"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item rounded"><Link to="/services" className="nav-link">Services/Courses</Link></li>
          <li className="nav-item rounded"><Link to="/aboutus" className="nav-link">About Us</Link></li>
          <li className="nav-item rounded"><Link to="/contactus" className="nav-link">Contact</Link></li>
          <li className="nav-item rounded"><Link to="/gallery" className="nav-link">Gallery</Link></li>

          {state.isLogin ? (
            <li className="nav-item me-1 rounded" onClick={handleLogout}>
              <div style={{ fontSize: "10px", display: "flex", flexDirection: "column" }}>
                {state.welcomeMessage}
                <button className="nav-link btn bg-danger btn-link">Logout</button>
              </div>
            </li>
          ) : (
            <li className="nav-item mx-1 rounded">
              <button onClick={handleShow} className="nav-link btn btn-link">Login/Sign-Up</button>
            </li>
          )}
        </ul>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login / Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Tab.Container defaultActiveKey="login">
            <Nav variant="tabs">
              <Nav.Item><Nav.Link eventKey="login">Login</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="signup">Signup</Nav.Link></Nav.Item>
              <Nav.Item><Nav.Link eventKey="forgetpassword">Forget Password</Nav.Link></Nav.Item>
            </Nav>
            <Tab.Content>
              {/* Login */}
              <Tab.Pane eventKey="login">
                <Form onSubmit={handleLoginSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                  </Form.Group>
                  <Button type="submit" className="mt-3 w-100" variant="primary">Login</Button>
                </Form>
              </Tab.Pane>

              {/* Signup */}
              <Tab.Pane eventKey="signup">
                <Form onSubmit={handleSignupSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter your name" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control name="business_name" type="text" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Business Location</Form.Label>
                    <Form.Control name="business_location" type="text" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control name="phone_number" type="text" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control name="email" type="email" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" required />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="confirmPassword" type="password" required />
                  </Form.Group>
                  <Button type="submit" className="mt-3 w-100" variant="primary">Sign Up</Button>
                </Form>
              </Tab.Pane>

              {/* Forget Password */}
              <Tab.Pane eventKey="forgetpassword">
                <Form onSubmit={handleCaptchaSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
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
                  <Button type="submit" className="mt-3 w-100" variant="primary">Submit</Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </div>
  );
}

export default Navbar;
// import React, { useState, useContext } from "react";
// import { Modal, Form, Button } from "react-bootstrap";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import { UserContext } from "./userContext";

// function Navbar() {
//   const { dispatch } = useContext(UserContext);
//   const [showModal, setShowModal] = useState(false);

//   const handleClose = () => setShowModal(false);
//   const handleShow = () => setShowModal(true);

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     const payload = { email, password };

//     try {
//       await axios.get('https://68.183.108.227/croose/public/index.php/sanctum/csrf-cookie', {
//           withCredentials: true,
//         });
//       const response = await axios.post(
//         "http://68.183.108.227/croose/public/index.php/api/login",
//         payload,
//         {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         }
//       );

//       if (response.status === 200 && response.data.user) {
//         toast.success("Login Successful!");
//         dispatch({ type: "LOGIN", payload: response.data.user });
//         handleClose();
//       } else {
//         toast.error("Unexpected response from server.");
//       }
//     } catch (error) {
//       const status = error.response?.status;
//       if (status === 401) toast.error("Invalid email or password.");
//       else toast.error(error.response?.data?.message || "Login failed.");
//     }
//   };

//   return (
//     <div className="navbar navbar-expand-lg bg-light" style={{ position: "sticky", top: 0 }}>
//       <a className="navbar-brand ms-2" href="#">
//         <img className="logoimage" src="/dharmalogo.png" alt="Logo" />
//         <b className="text-danger">&nbsp; Dharma </b>Soft-Tech
//       </a>

//       <button onClick={handleShow} className="btn btn-link ms-auto">
//         Login
//       </button>

//       {/* Login Modal */}
//       <Modal show={showModal} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleLoginSubmit}>
//             <Form.Group className="mb-3">
//               <Form.Label>Email</Form.Label>
//               <Form.Control name="email" type="email" required placeholder="Enter email" />
//             </Form.Group>
//             <Form.Group className="mb-3">
//               <Form.Label>Password</Form.Label>
//               <Form.Control name="password" type="password" required placeholder="Enter password" />
//             </Form.Group>
//             <Button type="submit" className="w-100" variant="primary">
//               Login
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>

//       <ToastContainer />
//     </div>
//   );
// }

// export default Navbar;
