import { React, useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Layout/footer";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/sidebar";
function Subject() {
  const navigate = useNavigate();
  const [subject, setSubject] = useState([]);
  const [inputs, setInputs] = useState({ id: "", name: "" });
  useEffect(() => {
    getDatas();
  }, []);
  function getDatas() {
    axios
      .get(`${global.config.apiUrl}subject`)
      .then(function (response) {
        setSubject(response.data.data);
      });
  }

  const deleteSubject = (id) => {
    axios
      .delete(`${global.config.apiUrl}subject/delete/${id}`)
      .then(function (response) {
        getDatas();
      });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${global.config.apiUrl}subject/create`, inputs)
      .then(function (response) {
        console.log(response.data);
        getDatas();
        document.getElementById("modelbutton").click();
      });
  };
  const clearData = () => {
    setInputs((values) => ({
      ...values,
      id: "",
      name: "",
    }));
  };

  /* for update */

  function getSingleSubject(d) {
    document.getElementById( "modelbutton" ).click();
    setInputs(d);
    setInputs((values) => ({ ...values }));
    
    // axios
    //   .get(`http://localhost/react_api/Subject/subject_edit.php?id=${id}`)
    //   .then(function (response) {
    //     setInputs(response.data);
    //   });
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <h1 className="text-center">
              <small>Subject List</small>
            </h1>

            <button
              onClick={clearData}
              id="modelbutton"
              type="button"
              className="btn btn-primary btn-sm float-end"
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Subject
            </button>

            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {subject.length > 0 ? (
                  subject.map((d, key) => (
                    <tr key={key}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary m-2 px-4"
                          onClick={() => getSingleSubject(d)}
                        >
                          Edit
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-danger btn-xs"
                          onClick={() => deleteSubject(d.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <p>No Subjects available</p>
                )}
              </tbody>
            </table>

            <div className="modal" id="myModal">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Subject Data</h4>
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
                      </div>
                      <div className="row">
                        <div className="col-sm-3 offset-sm-3">
                          <button className="btn btn-primary">Submit</button>
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

export default Subject;
