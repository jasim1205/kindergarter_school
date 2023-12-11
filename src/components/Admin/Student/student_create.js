import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../Layout/nav";
import Footer from "../Layout/footer";
import { useNavigate } from "react-router-dom";

export default function Student_create ()
{
  const navigate = useNavigate();
  const [classes, setClasses] = useState([]);
  const [section, setSection] = useState([]);
  const [inputs, setInputs] = useState([]);
    useEffect(() => {
      getClasses();
      getSections();
    }, []);
  function getClasses() {
    axios
      .get("http://localhost/react_api/Classes/classes_list.php")
      .then(function (response) {
        setClasses(response.data.data);
      });
  }
  function getSections() {
    axios
      .get("http://localhost/react_api/Section/section_list.php")
      .then(function (response) {
        setSection(response.data.data);
      });
  }

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
      .post("http://localhost/react_api/Student/student_create.php", inputs)
      .then(function (response) {
        console.log( response.data );
        navigate("/student");
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
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1>
              <small>Student List</small>
            </h1>
          </div>
        </div>

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
              <button
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
            <div className="col-sm-3">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
