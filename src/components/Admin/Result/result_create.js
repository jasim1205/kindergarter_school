import { React, useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Layout/footer";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/sidebar";

function Result_create() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [exam, setExam] = useState([]);
  const [subject, setSubject] = useState([]);
  const [inputs, setInputs] = useState({ class_id: "" });
  useEffect(() => {
    getClasses();
    getSubject();
    getExam();
  }, []);

  function getClasses() {
    axios.get(`${global.config.apiUrl}classes`).then(function (response) {
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
      .get(`${global.config.apiUrl}result/by_class/${classId}`)
      .then(function (response) {
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
  function getSubject() {
    axios
      // .get("http://localhost/react_api/Subject/subject_list.php")
      .get(`${global.config.apiUrl}subject`)
      .then(function (response) {
        setSubject(response.data.data);
      });
  }
  function getExam() {
    axios
      // .get("http://localhost/react_api/Teacher/teacher_list.php")
      .get(`${global.config.apiUrl}exam`)
      .then(function (response) {
        setExam(response.data.data);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      // .post("http://localhost/react_api/Routine/routine_create.php", inputs)
      .post(`${global.config.apiUrl}result/create`, inputs)
      .then(function (response) {
        console.log(response.data);
      });
  };
  /* for update */
  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-md-10">
            <h1 className="text-center">
              <small>
                <strong>Creating Result Sheet</strong>{" "}
              </small>
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-3">
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
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>
                      <strong>Exam:</strong>
                    </label>
                    <select
                      className="form-control"
                      name="exam_id"
                      value={inputs.exam_id}
                      onChange={handleChange}
                    >
                      <option value="week">Select exam</option>
                      {exam &&
                        exam.map((e, key) => (
                          <option value={e.id} key={key}>
                            {e.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="form-group">
                    <label>
                      <strong>Subject:</strong>
                    </label>
                    <select
                      className="form-control"
                      name="subject_id"
                      value={inputs.subject_id}
                      onChange={handleChange}
                    >
                      <option value="subject">Select Subject</option>
                      {subject &&
                        subject.map((s, key) => (
                          <option value={s.id} key={key}>
                            {s.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-10">
                  <div className="form-group">
                    <label>
                      <strong>Student:</strong>
                    </label>
                    <select
                      className="form-control"
                      name="student_id"
                      value={inputs.student_id}
                      onChange={handleChange}
                    >
                      <option value="student">Select Student</option>
                      {students &&
                        students.map((s, key) => (
                          <option value={s.id} key={key}>
                            {s.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-3">
                  <label>
                    <b>subjective_marks</b>
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className=""
                    name="subjective_marks"
                  ></input>
                </div>
                <div className="col-sm-3">
                  <label>
                    <b>Objective_marks</b>
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className=""
                    name="objective_marks"
                  ></input>
                </div>
                <div className="col-sm-3">
                  <label>
                    <b>Practical_marks</b>
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className=""
                    name="practical"
                  ></input>
                </div>
                <div className="col-sm-3">
                  <label>
                    <b>Total_marks</b>
                  </label>
                  <input
                    onChange={handleChange}
                    type="number"
                    className=""
                    name="total_marks"
                  ></input>
                </div>
                <div className="col-sm-3">
                  <label>
                    <b>Grade</b>
                  </label>
                  <input
                    onChange={handleChange}
                    type="text"
                    className=""
                    name="grade"
                  ></input>
                </div>
              </div>
              <div className="form-group mt-3">
                <button className="btn btn-primary btn-sm">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Result_create;
