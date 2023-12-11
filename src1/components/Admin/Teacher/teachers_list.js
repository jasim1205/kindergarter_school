import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../Layout/nav";
import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";

export default function Teacher_list() {
  const [teachers, setTeachers] = useState([]);
  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);
  function getDatas() {
    axios.get(`${global.config.apiUrl}teacher`).then(function (response) {
      setTeachers(response.data.data);
    });
  }

  const deleteUser = (id) => {
    axios
      .delete(`${global.config.apiUrl}teacher/delete/${id}`)
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
      .post(`${global.config.apiUrl}teacher/create`, inputs)
      .then(function (response) {
        console.log(response.data);
        getDatas();
        if (response.data.status == 1)
          document.getElementById("modelbutton").click();
      });
  };
  const clearData = () => {
    setInputs((values) => ({
      ...values,
      id: ``,
      name: ``,
      designation: ``,
      image: ``,
    }));
  };

  /* for update */

  // function TeacherEdit(id) {
  //   document.getElementById("modelbutton").click();
  //   axios
  //     .get(`http://localhost/react_api/Teacher/teacher_edit.php?id=${id}`)
  //     .then(function (response) {
  //       setInputs(response.data);
  //       setInputs((values) => ({ ...values, image: "" }));
  //     });
  // }
   function getSingleteacher(d) {
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
              <small>Teacher List</small>
            </h1>

            <button
              onClick={clearData}
              id="modelbutton"
              type="button"
              className="btn btn-primary btn-sm float-end"
              data-toggle="modal"
              data-target="#myModal"
            >
              Add Teacher
            </button>

            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.length > 0 ? (
                  teachers.map((d, key) => (
                    <tr key={key}>
                      <td>{d.id}</td>
                      <td>{d.name}</td>
                      <td>{d.designation}</td>
                      <td>
                        <img
                          src={global.config.apiUrl + d.image}
                          alt=""
                          width={50}
                        />
                      </td>
                      <td>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-primary m-2 px-4"
                          onClick={() => getSingleteacher(d)}
                        >
                          Edit
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="btn btn-danger btn-xs"
                          onClick={() => deleteUser(d.id)}
                        >
                          Delete
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <h1 className="text-center">No Teachers available</h1>
                )}
              </tbody>
            </table>

            <div className="modal" id="myModal">
              <div className="modal-dialog modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Teacher Data</h4>
                    <button
                      type="button"
                      className="btn-close"
                      data-dismiss="modal"
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
                        <div className="col-sm-4">
                          <div className="mb-3">
                            <label className="form-label">Designation</label>
                            <input
                              type="text"
                              className="form-control"
                              name="designation"
                              value={inputs.designation}
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
