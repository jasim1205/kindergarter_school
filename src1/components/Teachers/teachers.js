import React,{useState, useEffect} from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import TestimonialCarousel from "../Carousel/carousel";
import { Teacher } from '../../api/teachers';

function Teachers() {
  const [teachersData, setTeachersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Teacher();
        setTeachersData(data);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);
  
  
  return (
    <div>
      <Header />
      <div className="container-fluid bg-primary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "400px" }}
        >
          <h3 className="display-3 font-weight-bold text-white">
            Our Teachers
          </h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <a className="text-white" href="./">
                Home
              </a>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Our Teachers</p>
          </div>
        </div>
      </div>
      {/* <!-- Team Start --> */}
      <div className="container-fluid pt-5">
        <div className="container">
          <div className="text-center pb-2">
            <p className="section-title px-5">
              <span className="px-2">Our Teachers</span>
            </p>
            <h1 className="mb-4">Meet Our Teachers</h1>
          </div>
          <div className="row">
            {teachersData.map((teacher, index) => (
              <div
                className="col-md-6 col-lg-3 text-center team mb-5"
                key={index}
              >
                <div
                  className="position-relative overflow-hidden mb-4"
                  style={{ borderRadius: "100%" }}
                >
                  <img
                    className="img-fluid w-100"
                    src={global.config.apiUrl + teacher.image}
                    alt={teacher.name}
                  />
                  <div className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute">
                    <a
                      className="btn btn-outline-light text-center mr-2 px-0"
                      style={{ width: "38px", height: "38px" }}
                      href="#"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      className="btn btn-outline-light text-center mr-2 px-0"
                      style={{ width: "38px", height: "38px" }}
                      href="#"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      className="btn btn-outline-light text-center px-0"
                      style={{ width: "38px", height: "38px" }}
                      href="#"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
                <h4>{teacher.name}</h4>
                <i>{teacher.designation}</i>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

      <TestimonialCarousel />

      {/* <!-- Back to Top --> */}
      <a href="./" className="btn btn-primary p-3 back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>

      <Footer />
    </div>
  );
}

export default Teachers;
