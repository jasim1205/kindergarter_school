import { React, useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Layout/footer";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/sidebar";
import { flushSync } from "react-dom";
import { valHooks } from "jquery";
function ClassList() {
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [inputs, setInputs] = useState({ id: "", name: "" });
  useEffect(() => {
    getDatas();
  }, []);
  function getDatas() {
    axios
      .get(`${global.config.apiUrl}classes`)
      .then(function (response) {
        setClasses(response.data.data);
      });
  }

  const deleteClasses = (id) => {
    axios
      .delete(`${global.config.apiUrl}classes/delete/${id}`)
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
      .post(`${global.config.apiUrl}classes/create`, inputs)
      .then(function (response) {
        console.log( response.data );
        getDatas();
        document.getElementById( "modelbutton" ).click();
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

  // function getSingleClasses(id) {
  //   document.getElementById("modelbutton").click();
  //   axios
  //     .get(`http://localhost/react_api/Classes/classes_edit.php?id=${id}`)
  //     .then(function (response) {
  //       setInputs(response.data);
  //     });
  // }
  function getSingleClasses ( d )
  {
    document.getElementById( 'modelbutton' ).click();
    setInputs( d );
    setInputs((values)=>({...values}))
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <h1 className="text-center">
              <small>Classes List</small>
            </h1>

            <button
              onClick={clearData}
              id="modelbutton"
              type="button"
              className="btn btn-primary btn-sm float-end"
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Classes
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
                {classes.length > 0 ? (
                  classes.map((d, key) => (
                    <tr key={key}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary m-2 px-4"
                          onClick={() => getSingleClasses(d)}
                        >
                          Edit
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-danger"
                          onClick={() => deleteClasses(d.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h1>No classes available</h1>
                )}
              </tbody>
            </table>

            <div className="modal" id="myModal">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Classes Data</h4>
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

export default ClassList;
