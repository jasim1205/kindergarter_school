import { React, useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Layout/footer";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/sidebar";
function Routine_create() {
  const [classes, setClasses] = useState([]);
  const [period, setPeriod] = useState([]);
  const [weekday, setWeekday] = useState([]);
  const [subject, setSubject] = useState([]);
  const [teacher, setTeacher] = useState([]);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    getClasses();
    getWeekday();
    getSubject();
    getTeacher();
    getPeriod();
  }, []);
  function getClasses() {
    axios
      // .get("http://localhost/react_api/Classes/classes_list.php")
      .get(`${global.config.apiUrl}classes`)
      .then(function (response) {
        setClasses(response.data.data);
      });
  }
  function getWeekday() {
    axios
      // .get("http://localhost/react_api/Weekday/weekday_list.php")
      .get(`${global.config.apiUrl}weekday`)
      .then(function (response) {
        setWeekday(response.data.data);
      });
  }
  function getSubject() {
    axios
      // .get("http://localhost/react_api/Subject/subject_list.php")
      .get(`${global.config.apiUrl}subject`)
      .then(function (response) {
        setSubject(response.data.data);
      });
  }
  function getTeacher() {
    axios
      // .get("http://localhost/react_api/Teacher/teacher_list.php")
      .get(`${global.config.apiUrl}teacher`)
      .then(function (response) {
        setTeacher(response.data.data);
      });
  }
  function getPeriod() {
    axios
      // .get("http://localhost/react_api/Period/period_list.php")
      .get(`${global.config.apiUrl}period`)
      .then(function (response) {
        setPeriod(response.data.data);
      });
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      // .post("http://localhost/react_api/Routine/routine_create.php", inputs)
      .post(`${global.config.apiUrl}routine/create`, inputs)
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
          <div className="col-10">
            <h1 className="text-center">
              <small>
                {" "}
                <strong>Class Routine</strong>{" "}
              </small>
            </h1>
            <div className="row">
              <div className="col-sm-10">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>
                      <strong>Class:</strong>
                    </label>
                    <select
                      className="form-control"
                      name="class_id"
                      value={inputs.class_id}
                      onChange={handleChange}
                    >
                      <option value="class">Select Class</option>
                      {classes.map((c, key) => (
                        <option value={c.id} key={key}>
                          {c.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      <strong>Weakday:</strong>
                    </label>
                    <select
                      className="form-control"
                      name="week_id"
                      value={inputs.week_id}
                      onChange={handleChange}
                    >
                      <option value="week">Select Weekday</option>
                      {weekday &&
                        weekday.map((w, key) => (
                          <option value={w.id} key={key}>
                            {w.day}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>
                      <strong>Period No:</strong>
                    </label>
                    <select
                      className="form-control"
                      name="period_id"
                      value={inputs.period_id}
                      onChange={handleChange}
                    >
                      <option value="period">Select period</option>
                      {period &&
                        period.map((p, key) => (
                          <option value={p.id} key={key}>
                            {p.name}
                          </option>
                        ))}
                    </select>
                  </div>
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
                  <div className="form-group">
                    <label>
                      <strong>Teacher:</strong>
                    </label>
                    <select
                      className="form-control"
                      name="teacher_id"
                      value={inputs.teacher_id}
                      onChange={handleChange}
                    >
                      <option value="week">Select Teacher</option>
                      {teacher &&
                        teacher.map((t, key) => (
                          <option value={t.id} key={key}>
                            {t.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary btn-sm">Save</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Routine_create;
