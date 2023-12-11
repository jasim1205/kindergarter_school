import { React, useState, useEffect } from "react";
import axios from "axios";

function Routinetd({ class_id, wday, period }) {
  const [routine, setRoutine] = useState([]);

  useEffect(() => {
    getDatas();
    console.log(routine);
  }, [class_id]);
  function getDatas() {
    axios
      .get(`${global.config.apiUrl}routine/index/${wday}/${period}/${class_id}`)
      .then(function (response) {
        if (response.data.status) setRoutine(response.data.data);
        else setRoutine([]);
      });
  }

  return (
    <td>
      {routine.sname} <br /> {routine.tname}
    </td>
  );
}

export default Routinetd;
