import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Layout/nav";
import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";
import "./dashboard.css";
import { logout } from "../Auth/auth";

// import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

function Dashboard() {
  const userLogged = JSON.parse(localStorage.getItem("userdata"));

  return (
    <div>
      {" "}
      <div className="container">
        <div className="row">
          <Sidebar />

          <div className="col-md-9 col-sm-12">
            <h1 className="text-center mt-5">Welcome to Admin Dashboard</h1>

            <div className="container justify-conten-center mt-5 ml-5">
              <div className="row">
                <a
                  href="./dashboard"
                  className="col-3 text-white text-center dash1 mx-3"
                >
                  Dashboard
                </a>
                <a
                  href="./teacher"
                  className="col-3 text-white text-center dash1 mx-3"
                >
                  Teacher
                </a>
                <a
                  href="./student"
                  className="col-3 text-white text-center dash2 mx-3"
                >
                  Student
                </a>
              </div>

              <div className="row mt-5">
                <a
                  href="./result"
                  className="col-3 text-white text-center dash9 mx-3"
                >
                  Result
                </a>

                <a
                  href="./attendance"
                  className="col-3 text-white text-center dash8 mx-3"
                >
                  Attendance
                </a>
                <a
                  href="./routine"
                  className="col-3 text-white text-center dash9 mx-3"
                >
                  Routine
                </a>
              </div>
              <div className="row mt-5">
                <a
                  href="./result_create"
                  className="col-3 text-white text-center dash9 mx-3"
                >
                  Result_create
                </a>
                <a
                  href="./class"
                  className="col-3 text-white text-center dash4 mx-3"
                >
                  Classes
                </a>
                <a
                  href="./subject"
                  className="col-3 text-white text-center dash5 mx-3"
                >
                  Subject
                </a>
              </div>

              <div className="row mt-5">
                
                <a
                  href="./section"
                  className="col-3 text-white text-center dash6 mx-3"
                >
                  Section
                </a>
                <a
                  href="./exam"
                  className="col-3 text-white text-center dash9 mx-3"
                >
                  Exam
                </a>
                <a
                  href="./user"
                  className="col-3 text-white text-center dash7 mx-3"
                >
                  User Message
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard;
