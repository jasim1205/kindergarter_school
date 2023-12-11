import React,{useState, useEffect} from "react";
import Header from '../Header/header';
import Footer from '../Footer/footer';
import TestimonialCarousel from "../Carousel/carousel";
import { HomeTeacher } from "../../api/teachers";
import { HomeBlog } from "../../api/blog";
import { Class } from "../../api/classes";
import { Abouts } from "../../api/about";


const Home = () => {
    const [hometeachersData, setHometeashersData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await HomeTeacher();
        setHometeashersData(data);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);


    const [homeblogsData, setHomeblogsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await HomeBlog();
        setHomeblogsData(data);

      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);


  const [ classesData, setClassesData]=useState([]);
    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const data = await Class();
                setClassesData(data);
            }catch(error){
                console.error(error.message);
            }
        };
        fetchData();
    }, []);

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
            <div>

                <Header />

                {/* <!-- Header Start --> */}
                <div className="container-fluid bg-primary px-0 px-md-5 mb-5">
                    <div className="row align-items-center px-3">
                        <div className="col-lg-6 text-center text-lg-left">
                            <h4 className="text-white mb-4 mt-5 mt-lg-0">Kids Learning Center</h4>
                            <h1 className="display-3 font-weight-bold text-white">
                                New Approach to Kids Education
                            </h1>
                            <p className="text-white mb-4">
                                Sea ipsum kasd eirmod kasd magna, est sea et diam ipsum est amet sed
                                sit. Ipsum dolor no justo dolor et, lorem ut dolor erat dolore sed
                                ipsum at ipsum nonumy amet. Clita lorem dolore sed stet et est justo
                                dolore.
                            </p>
                            <a href="" className="btn btn-secondary mt-1 py-3 px-5">Learn More</a>
                        </div>
                        <div className="col-lg-6 text-center text-lg-right">
                            <img className="img-fluid mt-5" src="assets/img/header.png" alt="" />
                        </div>
                    </div>
                </div>
                {/* <!-- Header End --> */}

                {/* <!-- Facilities Start --> */}
                <div className="container-fluid pt-5">
                    <div className="container pb-3">
                        <div className="row">
                        {aboutsData.map((about, index)=>(
                            <div className="col-lg-4 col-md-6 pb-1" key={index}>
                                <div
                                    className="d-flex bg-light shadow-sm border-top rounded mb-4"
                                    style={{ padding: '30px' }}
                                >
                                    <i
                                        className={`${about.image} h1 font-weight-normal text-primary mb-3`}
                                    ></i>
                                    <div className="pl-4">
                                        <h4>{about.title}</h4>
                                        <p className="m-0">{about.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
                {/* <!-- Facilities Start --> */}

                {/* <!-- About Start --> */}
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
                                    Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                                    dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                                    Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                    dolor
                                </p>
                                <div className="row pt-2 pb-4">
                                    <div className="col-6 col-md-4">
                                        <img className="img-fluid rounded" src="assets/img/about-2.jpg" alt="" />
                                    </div>
                                    <div className="col-6 col-md-8">
                                        <ul className="list-inline m-0">
                                            <li className="py-2 border-top border-bottom">
                                                <i className="fa fa-check text-primary mr-3"></i>Labore eos amet
                                                dolor amet diam
                                            </li>
                                            <li className="py-2 border-bottom">
                                                <i className="fa fa-check text-primary mr-3"></i>Etsea et sit
                                                dolor amet ipsum
                                            </li>
                                            <li className="py-2 border-bottom">
                                                <i className="fa fa-check text-primary mr-3"></i>Diam dolor diam
                                                elitripsum vero.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a href="" className="btn btn-primary mt-2 py-2 px-4">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- About End --> */}

                {/* <!-- className Start --> */}
                <div className="container-fluid pt-5">
                    <div className="container">
                        <div className="text-center pb-2">
                            <p className="section-title px-5">
                                <span className="px-2">Popular Classess</span>
                            </p>
                            <h1 className="mb-4">Class for Your Kids</h1>
                        </div>
                        <div className="row">
                        {classesData.map((classes, index) => (
                            <div className="col-lg-4 mb-5" key={index}>
                                <div className="card border-0 bg-light shadow-sm pb-2">
                                    <img className="card-img-top mb-2" src={classes.image} alt="" />
                                    <div className="card-body text-center">
                                        <h4 className="card-title">{classes.className}</h4>
                                        <p className="card-text">
                                        {classes.description}
                                            
                                        </p>
                                    </div>
                                    <div className="card-footer bg-transparent py-4 px-5">
                                        <div className="row border-bottom">
                                            <div className="col-6 py-1 text-right border-right">
                                                <strong>Age of Kids</strong>
                                            </div>
                                            <div className="col-6 py-1">{classes.age_of_kids}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6 py-1 text-right border-right">
                                                <strong>Total Seats</strong>
                                            </div>
                                            <div className="col-6 py-1">{classes.total_seats}</div>
                                        </div>
                                        <div className="row border-bottom">
                                            <div className="col-6 py-1 text-right border-right">
                                                <strong>className Time</strong>
                                            </div>
                                            <div className="col-6 py-1">{classes.class_time}</div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6 py-1 text-right border-right">
                                                <strong>Tution Fee</strong>
                                            </div>
                                            <div className="col-6 py-1">${classes.tution_fees} / Month</div>
                                        </div>
                                    </div>
                                    <a href="" className="btn btn-primary px-4 mx-auto mb-4">Join Now</a>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* <!-- className End --> */}

                {/* <!-- Registration Start --> */}
                <div className="container-fluid py-5">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 mb-5 mb-lg-0">
                                <p className="section-title pr-5">
                                    <span className="pr-2">Book A Seat</span>
                                </p>
                                <h1 className="mb-4">Book A Seat For Your Kid</h1>
                                <p>
                                    Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                                    dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo.
                                    Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                                    dolor
                                </p>
                                <ul className="list-inline m-0">
                                    <li className="py-2">
                                        <i className="fa fa-check text-success mr-3"></i>Labore eos amet
                                        dolor amet diam
                                    </li>
                                    <li className="py-2">
                                        <i className="fa fa-check text-success mr-3"></i>Etsea et sit dolor
                                        amet ipsum
                                    </li>
                                    <li className="py-2">
                                        <i className="fa fa-check text-success mr-3"></i>Diam dolor diam
                                        elitripsum vero.
                                    </li>
                                </ul>
                                <a href="" className="btn btn-primary mt-4 py-2 px-4">Book Now</a>
                            </div>
                            <div className="col-lg-5">
                                <div className="card border-0">
                                    <div className="card-header bg-secondary text-center p-4">
                                        <h1 className="text-white m-0">Book A Seat</h1>
                                    </div>
                                    <div className="card-body rounded-bottom bg-primary p-5">
                                        <form>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Your Name"
                                                    required="required"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control border-0 p-4"
                                                    placeholder="Your Email"
                                                    required="required"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <select
                                                    className="custom-select border-0 px-4"
                                                    style={{ height: '47px' }}
                                                >
                                                    <option selected>Select A className</option>
                                                    <option value="1">className 1</option>
                                                    <option value="2">className 1</option>
                                                    <option value="3">className 1</option>
                                                </select>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn-secondary btn-block border-0 py-3"
                                                    type="submit"
                                                >
                                                    Book Now
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Registration End --> */}

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
                            {hometeachersData.map((hometeacher,index)=>(
                            <div className="col-md-6 col-lg-3 text-center team mb-5" key={index}>
                                <div
                                    className="position-relative overflow-hidden mb-4"
                                    style={{ borderRadius: '100%' }}
                                >
                                    <img className="img-fluid w-100" src={global.config.apiUrl + hometeacher.image} alt="" />
                                    <div
                                        className="team-social d-flex align-items-center justify-content-center w-100 h-100 position-absolute"
                                    >
                                        <a
                                            className="btn btn-outline-light text-center mr-2 px-0"
                                            style={{ width: '38px', height: '38px' }}
                                            href="#"
                                        ><i className="fab fa-twitter"></i
                                        ></a>
                                        <a
                                            className="btn btn-outline-light text-center mr-2 px-0"
                                            style={{ width: '38px', height: '38px' }}
                                            href="#"
                                        ><i className="fab fa-facebook-f"></i
                                        ></a>
                                        <a
                                            className="btn btn-outline-light text-center px-0"
                                            style={{ width: '38px', height: '38px' }}
                                            href="#"
                                        ><i className="fab fa-linkedin-in"></i
                                        ></a>
                                    </div>
                                </div>
                                <h4>{hometeacher.name}</h4>
                                <i>{hometeacher.designation}</i>
                            </div>
                            ))}
                            
                        </div>
                    </div>
                </div>
                {/* <!-- Team End --> */}

                {/* <!-- Testimonial Start --> */}
                
                <TestimonialCarousel />

                {/* <!-- Testimonial End --> */}

                {/* <!-- Blog Start --> */}
                <div className="container-fluid pt-5">
                    <div className="container">
                        <div className="text-center pb-2">
                            <p className="section-title px-5">
                                <span className="px-2">Latest Blog</span>
                            </p>
                            <h1 className="mb-4">Latest Articles From Blog</h1>
                        </div>
                        <div className="row pb-3">
                            {homeblogsData.map((homeblog,index)=>(
                            <div className="col-lg-4 mb-4" key={index}>
                                <div className="card border-0 shadow-sm mb-2">
                                    <img className="card-img-top mb-2" src={homeblog.image} alt="" />
                                    <div className="card-body bg-light text-center p-4">
                                        <h4 className="">{homeblog.title}</h4>
                                        <div className="d-flex justify-content-center mb-3">
                                            <small className="mr-3"
                                            ><i className="fa fa-user text-primary"></i> Admin</small
                                            >
                                            <small className="mr-3"
                                            ><i className="fa fa-folder text-primary"></i> Web Design</small
                                            >
                                            <small className="mr-3"
                                            ><i className="fa fa-comments text-primary"></i> 15</small
                                            >
                                        </div>
                                        <p>{homeblog.description}
                                            
                                        </p>
                                        <a href="" className="btn btn-primary px-4 mx-auto my-2"
                                        >Read More</a
                                        >
                                    </div>
                                </div>
                            </div>
                            ))};
                        </div>
                    </div>
                </div>
                {/* <!-- Blog End --> */}
                <Footer />

                {/* <!-- Back to Top --> */}
                <a href="./" className="btn btn-primary p-3 back-to-top"
                ><i className="fa fa-angle-double-up"></i
                ></a>
            </div>
        </div>
    );
};
export default Home;