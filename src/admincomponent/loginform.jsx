// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { AdminContext } from "./adminContext";

// function LoginForm() {
//   const { setAdminName } = useContext(AdminContext);
//   const navigate = useNavigate();

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     const email = document.getElementById("email").value;
//     const password = document.getElementById("password").value;

//     try {
//       const response = await fetch("http://localhost:4000/api/admin/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       console.log(data);

//       if (data) {
//         const username = data.admin.name;
//         setAdminName(username);
//         toast.success(`Login Successful, Welcome ${username}`);
//         navigate("/dashboard"); // Redirect to dashboard
//       } else {
//         toast.error("Invalid credentials, please try again.");
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error("Something went wrong. Please try again later.");
//     }
//   };

//   return (
//     <div
//       className="container d-flex align-items-center justify-content-center"
//       style={{ height: "100vh", background: "linear-gradient(135deg, #f3f4f6, #ffffff)" }}
//     >
//       <div className="row justify-content-center w-100">
//         <div className="col-md-5">
//           <div
//             className="card shadow-lg"
//             style={{
//               borderRadius: "15px",
//               border: "none",
//               overflow: "hidden",
//               background: "linear-gradient(135deg,rgb(113, 164, 219),rgb(12, 177, 111))",
//               color: "#fff",
//             }}
//           >
//             <div className="card-body p-4">
//               <h3 className="card-title text-center mb-4" style={{ fontWeight: "bold" }}>
//                 Admin Login
//               </h3>
//               <form>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="form-label">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control form-control-lg"
//                     id="email"
//                     placeholder="Enter your email"
//                     required
//                     style={{
//                       borderRadius: "10px",
//                       border: "1px solid rgba(255, 255, 255, 0.3)",
//                       backgroundColor: "rgba(255, 255, 255, 0.1)",
//                       color: "#fff",
//                     }}
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label htmlFor="password" className="form-label">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     className="form-control form-control-lg"
//                     id="password"
//                     placeholder="Enter your password"
//                     required
//                     style={{
//                       borderRadius: "10px",
//                       border: "1px solid rgba(255, 255, 255, 0.3)",
//                       backgroundColor: "rgba(255, 255, 255, 0.1)",
//                       color: "#fff",
//                     }}
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-light btn-lg w-100"
//                   onClick={handleLoginSubmit}
//                   style={{
//                     borderRadius: "10px",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   Login
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default LoginForm;
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./adminContext";

function LoginForm() {
  const { setAdminName } = useContext(AdminContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok && data.admin) {
        const username = data.admin.name;
        setAdminName(username);
        
        // Navigate only after toast closes
        toast.success(`Login Successful, Welcome ${username}`, {
          onClose: () => navigate("/dashboard"),
          autoClose: 1500,  // 1.5s toast
        });

      } else {
        toast.error(data.message || "Invalid credentials, please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ height: "100vh", background: "linear-gradient(135deg, #f3f4f6, #ffffff)" }}
    >
      <div className="row justify-content-center w-100">
        <div className="col-md-5">
          <div
            className="card shadow-lg"
            style={{
              borderRadius: "15px",
              border: "none",
              overflow: "hidden",
              background: "linear-gradient(135deg,rgb(113, 164, 219),rgb(12, 177, 111))",
              color: "#fff",
            }}
          >
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-4" style={{ fontWeight: "bold" }}>
                Admin Login
              </h3>
              <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{
                      borderRadius: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                    }}
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control form-control-lg"
                    id="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{
                      borderRadius: "10px",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "#fff",
                    }}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-light btn-lg w-100"
                  style={{ borderRadius: "10px", fontWeight: "bold" }}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default LoginForm;
