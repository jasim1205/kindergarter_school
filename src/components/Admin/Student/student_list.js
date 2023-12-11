import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/sidebar";
import Footer from "../Layout/footer";
export default function Student() {
  const [students, setStudents] = useState([]);
  const [classes, setClasses] = useState([]);
  const [section, setSection] = useState([]);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);
  function getDatas() {
    axios.get(`${global.config.apiUrl}student`).then(function (response) {
      setStudents(response.data.data);
    });
  }
  function getClasses() {
    axios
      .get(`${global.config.apiUrl}classes`)
      .then(function (response) {
        setClasses(response.data.data);
      });
  }
  function getSections() {
    axios.get(`${global.config.apiUrl}section`).then(function (response) {
      setSection(response.data.data);
    });
  }

  const deleteStudent = (id) => {
    axios
      .delete(`${global.config.apiUrl}student/delete/${id}`)
      .then(function (response) {
        getDatas();
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const onFileChange = (e) => {
    let files = e.target.files;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(files[0]);

    fileReader.onload = (event) => {
      const name = "image";
      const value = event.target.result;
      setInputs((values) => ({ ...values, [name]: value }));
    };
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${global.config.apiUrl}student/create`, inputs)
      .then(function (response) {
        console.log( response.data );
        getDatas();
        document.getElementById("modelbutton").click();
        
      });
  };
  const clearData = () => {
    getClasses();
    getSections();
    setInputs((values) => ({
      ...values,
      id: "",
      name: "",
      b_date: "",
      father_name: "",
      mother_name: "",
      class_id: "",
      section_id: "",
      batch_id: "",
      address: "",
    }));
  };

  /* for update */

  // function getSingleStudent(id) {
  //   document.getElementById("modelbutton").click();
  //   axios
  //     .get(`http://localhost/react_api/Student/student_edit.php?id=${id}`)
  //     .then(function (response) {
  //       setInputs(response.data);
  //       setInputs((values) => ({ ...values, image: "" }));
  //     });
  // }
   function getSingleStudent(d) {
     document.getElementById("modelbutton").click();
     setInputs(d);
     setInputs((values) => ({ ...values, image: "" }));
   }

  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <h1 className="text-center">
              <small>Student List</small>
            </h1>

            <button
              onClick={clearData}
              id="modelbutton"
              type="button"
              className="btn btn-primary btn-sm float-end"
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Student
            </button>

            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Batch_id</th>
                  <th>Picture</th>
                  <th>Father Name</th>
                  <th>Mother Name</th>
                  <th>Birth Date</th>
                  <th>Address</th>
                  <th>Class</th>
                  <th>Section</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  students.map((d, key) => (
                    <tr key={key}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.batch_id}</td>
                      <td>
                        <img src={global.config.apiUrl + d.image} alt="" width={50} />
                      </td>
                      <td>{d.father_name}</td>
                      <td>{d.mother_name}</td>
                      <td>{d.b_date}</td>
                      <td>{d.address}</td>
                      <td>{d.cname}</td>
                      <td>{d.sname}</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary mb-1 px-4"
                          onClick={() => getSingleStudent(d)}
                        >
                          Edit
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-danger btn-xs"
                          onClick={() => deleteStudent(d.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h1 className="text-center">No Student available</h1>
                )}
              </tbody>
            </table>

            <div className="modal" id="myModal">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Student Data</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                    ></button>
                  </div>

                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                              value={inputs.name}
                              type="text"
                              className="form-control"
                              name="name"
                              onChange={handleChange}
                            />
                            <input value={inputs.id} type="hidden" name="id" />
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="mb-3">
                            <label className="form-label">Class</label>
                            <select
                              className="form-control"
                              name="class_id"
                              onChange={handleChange}
                            >
                              <option value="" key="">
                                Select Class
                              </option>
                              {classes.map((d, key) => (
                                <option
                                  selected={d.id == inputs.class_id}
                                  value={d.id}
                                  key={key}
                                >
                                  {d.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-3">
                          <div className="mb-3">
                            <label className="form-label">Section</label>
                            <select
                              className="form-control"
                              name="section_id"
                              onChange={handleChange}
                            >
                              <option value="" key="">
                                Select section
                              </option>
                              {section.map((d, key) => (
                                <option
                                  selected={d.id == inputs.section_id}
                                  value={d.id}
                                  key={key}
                                >
                                  {d.name}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="mb-3">
                            <label className="form-label">Batch Id</label>
                            <input
                              className="form-control"
                              name="batch_id"
                              onChange={handleChange}
                              value={inputs.batch_id}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="mb-3">
                            <label className="form-label">Father Name</label>
                            <input
                              className="form-control"
                              name="father_name"
                              onChange={handleChange}
                              value={inputs.father_name}
                            />
                          </div>
                        </div>
                        <div className="col-sm-12">
                          <div className="mb-3">
                            <label className="form-label">Mother Name</label>
                            <input
                              className="form-control"
                              name="mother_name"
                              onChange={handleChange}
                              value={inputs.mother_name}
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="mb-3">
                            <label className="form-label">Birth Date</label>
                            <input
                              type="date"
                              className="form-control"
                              name="b_date"
                              value={inputs.b_date}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="mb-3">
                            <label className="form-label">Address</label>
                            <input
                              type="text"
                              className="form-control"
                              name="address"
                              value={inputs.address}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="mb-3">
                            <label className="form-label">Image</label>
                            <input
                              type="file"
                              className="form-control"
                              name="image"
                              onChange={onFileChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-3 offset-sm-3">
                          <button type="submit" className="btn btn-primary">
                            Submit
                          </button>
                        </div>
                        <div className="col-sm-3">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
