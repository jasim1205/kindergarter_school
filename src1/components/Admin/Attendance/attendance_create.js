import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";

function Attendance() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [inputs, setInputs] = useState({
    att_date: "",
    class_id: "",
    att_status: {},
  });

  useEffect(() => {
    getClasses();
  }, []);

  function getClasses() {
    axios
      .get("http://localhost/react_api/Classes/classes_list.php")
      .then(function (response) {
        setClasses(response.data.data);
        if (response.data.data.length > 0) {
          getStudentsByClass(response.data.data[0].id);
          setInputs((values) => ({
            ...values,
            class_id: response.data.data[0].id,
          }));
        }
      });
  }

  function getStudentsByClass(classId) {
    axios
      .get(
        `http://localhost/react_api/Student/student_list.php?class_id=${classId}`
      )
      .then(function (response) {
        console.log(response.data.data);
        setStudents(response.data.data);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs((values) => ({
      ...values,
      [name]: value,
    }));

    if (name === "class_id") getStudentsByClass(value);
  };

  const handleStatusChange = (studentId, status) => {
    setInputs((values) => ({
      ...values,
      att_status: {
        ...values.att_status,
        [studentId]: status,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${ global.config.apiUrl}attendance/create`,
        inputs
      )
      .then(function (response) {
        console.log(response.data);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <form onSubmit={handleSubmit} className="text-centen w-75">
            <h1>Student Attendance</h1>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Attendance Date:</label>
                  <input
                    type="date"
                    value={inputs.att_date}
                    name="att_date"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Class</label>
                  <select
                    className="form-control"
                    name="class_id"
                    onChange={handleChange}
                    value={inputs.class_id}
                  >
                    <option value="" key="">
                      Select Class
                    </option>
                    {classes.map((d, key) => (
                      <option value={d.id} key={key}>
                        {d.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <table className="table table-hover table-bordered">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th>Student</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students &&
                      students.map((student) => (
                        <tr key={student.id}>
                          <td>{student.name}</td>
                          <td>
                            <select
                              name={`att_status[${student.id}]`}
                              className="form-control"
                              onChange={(e) =>
                                handleStatusChange(student.id, e.target.value)
                              }
                              value={inputs.att_status[student.id] || ""}
                            >
                              <option value="1">Present</option>
                              <option value="0">Absent</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <button type="submit" className="btn btn-primary px-5 py-2 my-2">
              Save
            </button>
          </form>
          </div>
          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Attendance;
