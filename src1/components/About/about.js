import React,{useState, useEffect} from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Abouts } from '../../api/about';

function About() {
    const [aboutsData, setAboutsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Abouts();
        setAboutsData(data);

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
            class="d-flex flex-column align-items-center justify-content-center"
            style={{ minHeight: "400px" }}
          >
            <h3 className="display-3 font-weight-bold text-white">About Us</h3>
            <div className="d-inline-flex text-white">
              <p className="m-0">
                <a class="text-white" href="./">
                  Home
                </a>
              </p>
              <p className="m-0 px-2">/</p>
              <p className="m-0">About Us</p>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <img
                  className="img-fluid rounded mb-5 mb-lg-0"
                  src="assets/img/about-1.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-7">
                <p className="section-title pr-5">
                  <span className="pr-2">Learn About Us</span>
                </p>
                <h1 className="mb-4">Best School For Your Kids</h1>
                <p>
                  Invidunt lorem justo sanctus clita. Erat lorem labore ea,
                  justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea
                  justo. Erat justo sed sed diam. Ea et erat ut sed diam sea
                  ipsum est dolor
                </p>
                <div className="row pt-2 pb-4">
                  <div className="col-6 col-md-4">
                    <img
                      className="img-fluid rounded"
                      src="assets/img/about-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-6 col-md-8">
                    <ul className="list-inline m-0">
                      <li className="py-2 border-top border-bottom">
                        <i className="fa fa-check text-primary mr-3"></i>Labore
                        eos amet dolor amet diam
                      </li>
                      <li className="py-2 border-bottom">
                        <i className="fa fa-check text-primary mr-3"></i>Etsea
                        et sit dolor amet ipsum
                      </li>
                      <li className="py-2 border-bottom">
                        <i className="fa fa-check text-primary mr-3"></i>Diam
                        dolor diam elitripsum vero.
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="" className="btn btn-primary mt-2 py-2 px-4">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid pt-5">
          <div className="container pb-3">
            <div className="row">
              {aboutsData.map((about, index) => (
                <div className="col-lg-4 col-md-6 pb-1" key={index}>
                  <div
                    className="d-flex bg-light shadow-sm border-top rounded mb-4"
                    style={{ padding: "30px" }}
                  >
                    <i
                      className={`${about.image} h1 font-weight-normal text-primary mb-3`}
                    ></i>
                    <div className="pl-4">
                      <h4>{about.title}</h4>
                      <p className="m-0">{about.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          </div>
        </div>

        <div className="container-fluid pt-5">
          <div className="container">
            <div className="text-center pb-2">
              <p className="section-title px-5">
                <span className="px-2">Our Teachers</span>
              </p>
              <h1 className="mb-4">Meet Our Teachers</h1>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3 text-center team mb-5">
                <div
                  className="position-relative overflow-hidden mb-4"
                  style={{ borderRadius: "100%" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assets/img/team-1.jpg"
                    alt=""
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
                <h4>Julia Smith</h4>
                <i>Music Teacher</i>
              </div>
              <div className="col-md-6 col-lg-3 text-center team mb-5">
                <div
                  className="position-relative overflow-hidden mb-4"
                  style={{ borderRadius: "100%" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assets/img/team-2.jpg"
                    alt=""
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
                <h4>Jhon Doe</h4>
                <i>Language Teacher</i>
              </div>
              <div className="col-md-6 col-lg-3 text-center team mb-5">
                <div
                  className="position-relative overflow-hidden mb-4"
                  style={{ borderRadius: "100%" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assets/img/team-3.jpg"
                    alt=""
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
                <h4>Mollie Ross</h4>
                <i>Dance Teacher</i>
              </div>
              <div className="col-md-6 col-lg-3 text-center team mb-5">
                <div
                  className="position-relative overflow-hidden mb-4"
                  style={{ borderRadius: "100%" }}
                >
                  <img
                    className="img-fluid w-100"
                    src="assets/img/team-4.jpg"
                    alt=""
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
                <h4>Donald John</h4>
                <i>Art Teacher</i>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-primary p-3 back-to-top">
          <i className="fa fa-angle-double-up"></i>
        </a>

        <Footer />
      </div>
    );
}

export default About;
