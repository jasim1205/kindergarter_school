import { React, useEffect, useState } from "react";
import axios from "axios";
import Nav from "../Layout/nav";
import Footer from "../Layout/footer";
import { useNavigate } from "react-router-dom";

function Teachers_create() {
  const navigate = useNavigate();
  const [teachers, setTeachers] = useState([]);
  const [inputs, setInputs] = useState([]);

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
      .post("http://localhost/react_api/Teacher/teacher_create.php", inputs)
      .then(function (response) {
        console.log(response.data);
        navigate("/teachers_list");
      });
  };
  return (
    <div>
      <Nav />
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <label for="uname">
            <b>Name</b>
          </label>
          <input
            type="text"
            placeholder="Enter Full Name"
            name="name"
            onChange={handleChange}
          />

          <label for="uname">
            <b>Designation</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email Address"
            name="designation"
            onChange={handleChange}
            required
          />

          <label for="psw">
            <b>Image</b>
          </label>
          <input
            type="file"
            className="form-control"
            name="image"
            onChange={onFileChange}
          />

          <button type="submit">Save</button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Teachers_create;
