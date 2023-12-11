import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./signin.css";
import { login } from "../Auth/auth";

function Signin() {
  const navigate = useNavigate();
  let sign = async (inputs) => {
    await login(inputs);
    navigate("/");
  };
  const [inputs, setInputs] = useState([]);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    let check = await login(inputs);
    if (check) {
      navigate("/");
    } else {
      alert("Sorry! Your email address or password is not correct.");
    }
    // sign( inputs );
  };
  return (
    <div className="login-wrap">
      <div className="login-container1">
        <div className="container5 mt-5">
          <h1 className="text-center">Login Page</h1>
          <div className="u-icon">
            <span className="fa fa-user custom-icon"></span>
          </div>
          <div className="row">
            <div className="col-sm-6 login-img">
              <img
                src="assets/school-removebg-preview.png"
                className=" img-fluid"
                alt="sfdgdfg"
                style={{ height: "100%" }}
              />
            </div>
            <div className="col-sm-6">
              <form onSubmit={handleSubmit}>
                <div className="container">
                  <label for="uname">
                    <b>Email</b>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    name="email"
                    onChange={handleChange}
                    required
                  />
                  <label for="psw">
                    <b>Password</b>
                  </label>
                  <input
                    type="password"
                    placeholder="Enter  Password"
                    name="password"
                    onChange={handleChange}
                    required
                  />
                  <button type="submit">Login </button>
                </div>
                <div className="px-3 pt-0 mt-0">
                  Don't have an account? <a href="/register">Register</a> Now
                </div>
                {/* <div className="container">
                <button type="button" className="cancelbtn">
                  Cancel
                </button>
              </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// // import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css"; (You can uncomment this line if you want to include Bootstrap CSS)
// import "./signin.css"; // Import a local CSS file for additional styling
// import { login } from "../Auth/auth";

// function Signin() {
//   const navigate = useNavigate();

//   // Function to handle the login when the form is submitted
//   let sign = async (inputs) => {
//     await login(inputs); // Call the login function from "../Auth/auth" to attempt user login
//     navigate("/"); // Navigate to the root route (home) after successful login
//   };

//   // State to store form input values
//   const [inputs, setInputs] = useState({});

//   // Function to handle input changes and update the state
//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setInputs((values) => ({ ...values, [name]: value }));
//   };

//   // Function to handle form submission
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     sign(inputs); // Call the sign function with the form input values to attempt login
//   };

//   return (
//     <div className="container1">
//       <div className="container5 mt-5">
//         <div className="row">
//           <div className="col-md-6 mb-3">
//             <img src="assets/sufa.png" alt="" />
//           </div>
//           <div className="col-md-6">
//             <h3 className="signin-text mb-3 mt-5"></h3> {/* Heading */}
//             <form onSubmit={handleSubmit}>
//               <div className="form-group">
//                 <label htmlFor="email">
//                   <span style={{ fontSize: "20px" }}>Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   className="form-control"
//                   onChange={handleChange} // Call handleChange when the input changes
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <label htmlFor="password" className="text-bold">
//                   <span style={{ fontSize: "20px" }}>Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                 />
//               </div>
//               <div className="form-group form-check">
//                 <input
//                   type="checkbox"
//                   name="checkbox"
//                   className="form-check-input"
//                   id="checkbox"
//                   onChange={handleChange} // Call handleChange when the input changes
//                   required
//                 />
//                 <label htmlfor="checkbox">
//                   <span className="remembermargin" style={{ fontSize: "20px" }}>
//                     {" "}
//                     Remember Me{" "}
//                   </span>
//                 </label>
//               </div>
//               <button type="submit" className="btn btn-warning">
//                 Login
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signin;
