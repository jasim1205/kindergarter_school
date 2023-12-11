import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../Layout/sidebar";


function Result() {
  const [results, setResults] = useState([]);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [subject, setSubject] = useState([]);
  const [exam, setExam] = useState([]);
  const [inputs, setInputs] = useState({ class_id: "" });
  useEffect(() => {
    getClasses();
    getSubject();
    getExam();
    getDatas();
  }, []);

  function getDatas() {
    if (inputs.class_id && inputs.student_id && inputs.exam_id) {
      axios
        .get(
          `${global.config.apiUrl}result/${inputs.student_id}/${inputs.class_id}/${inputs.exam_id}`
        )
        .then(function (response) {
          setResults(response.data.data);
        });
    }
  }

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

  function getExam() {
    axios.get(`${global.config.apiUrl}exam`).then(function (response) {
      setExam(response.data.data);
    });
  }

  function getSubject() {
    axios.get(`${global.config.apiUrl}subject`).then(function (response) {
      setSubject(response.data.data);
    });
  }
function calculateGrade(result) {
  const totalMarks =
    result.subjectiveMarks + result.objectiveMarks + result.practicalMarks;

  if (totalMarks >= 90) {
    return "A+";
  } else if (totalMarks >= 80) {
    return "A";
  } else if (totalMarks >= 70) {
    return "B";
  } else if (totalMarks >= 60) {
    return "C";
  } else if (totalMarks >= 50) {
    return "D";
  } else {
    return "F";
  }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-1"></div>
        <div className="col-md-9">
          <div className="container">
            <div className="row">
              <form className="text-center w-100 p1" style={{border:'2px solid black'}}>
                <h1>Search For individual Result</h1>
                <div className="row">
                  <div className="col-sm-4">
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
                  <div className="col-sm-4">
                    <div className="form-group">
                      <label>
                        <strong>Student:</strong>
                      </label>
                      <select
                        className="form-control"
                        name="subject_id"
                        value={inputs.student_id}
                        onChange={handleChange}
                      >
                        <option value="subject">Select Student</option>
                        {students &&
                          students.map((s, key) => (
                            <option value={s.id} key={key}>
                              {s.name}
                            </option>
                          ))}
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-4">
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
                </div>
              </form>
            </div>
          </div>

          <div className="container" style={{ border: "2px solid black" }}>
            <div className="row">
              <div className="col-md-8">
                <h1 className="text-center">Online MarkSheet</h1>
                <h3 className="text-center">Midterm Exam-2023</h3>
              </div>
              <div className="col-md-4">
                <img src="assets/img/user.jpg" alt="adsfasf" />
              </div>
            </div>

            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex">
                    <h4 className="mr-2">Roll Number :</h4>
                    <p>1234</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">Student Name :</h4>
                    <p>{results.student}</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">Batch Id:</h4>
                    <p>{results.cname}</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">School :</h4>
                    <p>ABC Kinder School</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <h4 className="mr-2">Father Name :</h4>
                    <p>abul kalam</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">Mother Name :</h4>
                    <p>hosne ara begum</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">Date of Birth:</h4>
                    <p>12/07/1999</p>
                  </div>
                </div>
              </div>

              <h3 className="text-center">Obtained Marks & Grades</h3>
              <div className="row">
                <table className="table table-bordered">
                  <thead className="bg-dark text-white">
                    <tr>
                      <th>Subjects</th>
                      <th>Subjective Marks</th>
                      <th>Objective Marks</th>
                      <th>Practical</th>
                      <th>Total</th>
                      <th>Grade</th>
                      <th>Result</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subject &&
                      subject.map((subj, index) => (
                        <tr key={index}>
                          <td>{subj.sname}</td>
                          <td>{results.subjectiveMarks}</td>
                          <td>{results.objectiveMarks}</td>
                          <td>{results.practicalMarks}</td>
                          <td>
                            {results.subjectiveMarks +
                              results.objectiveMarks +
                              results.practicalMarks}
                          </td>
                          <td>{calculateGrade(results)}</td>
                          <td>
                            {/* Add the result or pass/fail status here */}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Result;
