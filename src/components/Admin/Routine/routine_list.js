import { React, useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Layout/footer";
import Routinetd from "./routine";
import Sidebar from "../Layout/sidebar";
function Routine() {
  const [classes, setClasses] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [period, setPeriod] = useState([]);
  const [weekday, setWeekday] = useState([]);
  const [routine, setRoutine] = useState([]);
  const [classId, setclassId] = useState("");
  useEffect(() => {
    getPeriod();
    getWeekday();
    getClasses();
    getRoutinesByClass(1);
  }, []);

  function getClasses() {
    axios.get(`${global.config.apiUrl}classes`).then(function (response) {
      setClasses(response.data.data);
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
  function getWeekday() {
    axios
      // .get("http://localhost/react_api/Weekday/weekday_list.php")
      .get(`${global.config.apiUrl}weekday`)
      .then(function (response) {
        setWeekday(response.data.data);
      });
  }
  /* for update */

  // function getSingleclass(class_id) {
  //   axios.get( `${ global.config.apiUrl }routine/index/${ class_id }` ).then( function ( response )
  //   {
  //     setRoutine( response.data.data );
  //   });
  // }
  function getRoutinesByClass(cid) {
    setclassId(cid);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />

          <div className="col-md-9">
            <h1 className="text-center">
              <small>Class Routine</small>
            </h1>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Routine for :</label>
                  <select
                    className="form-control"
                    name="class_id"
                    onChange={(e) => {
                      getRoutinesByClass(e.target.value);
                    }}
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
            </div>

            <a
              href="/routine_create"
              className="btn btn-primary btn-sm float-end d-block"
            >
              Add Routine
            </a>

            <table className="table table-hover table-bordered">
              <thead>
                <tr>
                  <th>Week Day/Period</th>
                  {period.map((pe, key) => (
                    <th key={key}>
                      {pe.name} <br />
                      {pe.duration}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {weekday &&
                  weekday.map((d, key) => (
                    <tr key={key}>
                      <td>{d.day}</td>
                      {period.map((pe, key) => (
                        <Routinetd
                          class_id={classId}
                          wday={d.id}
                          period={pe.id}
                        />
                      ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Routine;
