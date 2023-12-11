import { React, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import About from "./components/About/about";
import Classes from "./components/Classes/classes";
import Teachers from "./components/Teachers/teachers";
import Gallery from "./components/Gallery/gallery";
import Contact from "./components/Contact/contact";
import BlogGrid from "./components/Pages/bloggrid";
import Blogdetail from "./components/Pages/blogdetail";
import Signin from "./components/Admin/Signin/signin";
import Register from "./components/Admin/Register/register";
import Dashboard from "./components/Admin/Dashboard/dashboard";
import Protected from "./components/Protected";
import Teacher_list from "./components/Admin/Teacher/teachers_list";
import Teachers_create from "./components/Admin/Teacher/teachers_create";
import Teachers_edit from "./components/Admin/Teacher/teachers_edit";
import ClassesList from "./components/Admin/Classes/classes_list";
import Section from "./components/Admin/Section/section";
import Student from "./components/Admin/Student/student_list";
import Student_create from "./components/Admin/Student/student_create";
import ClassList from "./components/Admin/Classes/classes_list";
import Subject from "./components/Admin/Subject/subject";
import Attendance from "./components/Admin/Attendance/attendance_create";
import Contact_list from "./components/Admin/Contact/contact_list";
import Routine from "./components/Admin/Routine/routine_list";
import Routine_create from "./components/Admin/Routine/routine_create";
import Exam from "./components/Admin/Exam/exam";

import Result from "./components/Admin/Result/result_list";
import Result_create from "./components/Admin/Result/result_create";

function App() {
  const [isSignedIn, setIssignedIn] = useState(() => {
    const userLogged = localStorage.getItem("access_token");
    return userLogged || false;
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/bloggrid" element={<BlogGrid />} />
        <Route path="/blogdetail" element={<Blogdetail />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route
          path={"/dashboard"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Dashboard />
            </Protected>
          }
        />
        <Route
          path={"/teacher"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Teacher_list />
            </Protected>
          }
        />

        <Route
          path={"/class"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <ClassesList />
            </Protected>
          }
        />
        <Route
          path={"/section"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Section />
            </Protected>
          }
        />
        <Route
          path={"/student"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Student />
            </Protected>
          }
        />
        <Route
          path={"/subject"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Subject />
            </Protected>
          }
        />
        <Route
          path={"/attendance"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Attendance />
            </Protected>
          }
        />
        <Route
          path={"/user"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Contact_list />
            </Protected>
          }
        />
        <Route
          path={"/routine"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Routine />
            </Protected>
          }
        />
        <Route
          path={"/routine_create"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Routine_create />
            </Protected>
          }
        />
        <Route
          path={"/exam"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Exam />
            </Protected>
          }
        />
        <Route
          path={"/result_create"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Result_create/>
            </Protected>
          }
        />
        <Route
          path={"/result"}
          element={
            <Protected isSignedIn={isSignedIn}>
              <Result />
            </Protected>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
