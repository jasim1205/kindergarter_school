import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../Layout/footer";
import Sidebar from "../Layout/sidebar";

function Attendance_list() {
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [inputs, setInputs] = useState({
    att_date: "",
    class_id: "",
    att_status: {},
  });

  useEffect(() => {
    getClasses();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
                 <table class="table">
        <tr>
            <th>#SL</th>
            <th>Date</th>
            <th>Present</th>
            <th>Absent</th>
           
        </tr>
       
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            
        </tr>
       
       
    </table>
                </div>
              </div>
      </div>
      <Footer />
    </div>
  );
}

export default Attendance_list;
