import { React, useState, useEffect } from "react";
import axios from "axios";

function Result() {
  const [results, setResults] = useState([]);
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [exam, setExam] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [inputs, setInputs] = useState({
    class_id: "",
  });

  useEffect(() => {
    getClasses();
    getExam();
    getDatas();
  }, []);
  function getDatas() {
    axios.get(`${global.config.apiUrl}result`).then(function (response) {
      setResults(response.data.data);
    });
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
      .get(`${global.config.apiUrl}student?class_id=${classId}`)
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
  function getExam() {
    axios.get(`${global.config.apiUrl}exam`).then(function (response) {
      setExam(response.data.data);
    });
  };
 

  return (
    <div>
      <div className="container">
        <div className="row">
          <form className="text-centen w-75">
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
                  <label>Student</label>
                  <select
                    className="form-control"
                    name="student_id"
                    onChange={handleChange}
                    value={inputs.student_id}
                  >
                    <option value="" key="">
                      Select student
                    </option>
                    {students &&
                      students.map((student) => (
                        <option key={student.id}>{student.name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="form-group">
                  <label>Exam Name</label>
                  <select
                    className="form-control"
                    name="exam_id"
                    onChange={handleChange}
                    value={inputs.exam_id}
                  >
                    <option value="" key="">
                      Select exam
                    </option>
                    {exam.map((d, key) => (
                      <option value={d.id} key={key}>
                        {d.name}
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
            <img src="header.png" alt="adsfasf" className="img-fluid" />
          </div>
        </div>
        {results &&
          results.map((r, index) => (
            <div key={index}>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex">
                    <h4 className="mr-2">Roll Number :</h4>
                    <p>123456</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">{r.student }Student Name :</h4>
                    <p>Jasim</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">Batch Id:</h4>
                    <p>a-102</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">School :</h4>
                    <p>ABC Kinder School</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex">
                    <h4 className="mr-2">Father Name :</h4>
                    <p>XYZ</p>
                  </div>
                  <div className="d-flex">
                    <h4 className="mr-2">Mother Name :</h4>
                    <p>XYZ</p>
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
                    <tr>
                      <td>Bangla</td>
                      <td>50</td>
                      <td>50</td>
                      <td>50</td>
                      <td>150</td>
                      <td>A</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Result;
