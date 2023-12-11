import React,{useState,useEffect} from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Class } from '../../api/classes';

function Classes() {
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
  return (
    <div>
        <Header/>
        <div class="container-fluid bg-primary mb-5">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        style={{minHeight: '400px'}}
      >
        <h3 class="display-3 font-weight-bold text-white">Our Classes</h3>
        <div class="d-inline-flex text-white">
          <p class="m-0"><a class="text-white" href="./">Home</a></p>
          <p class="m-0 px-2">/</p>
          <p class="m-0">Our Classes</p>
        </div>
      </div>
    </div>
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
                                    <img className="card-img-top mb-2" src={classes.image} alt={classes.name} />
                                    <div className="card-body text-center">
                                        <h4 className="card-title">{classes.className}</h4>
                                        <p className="card-text">{classes.description}
                                            
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
          {/* <!-- Registration End --> */ }
          
          {/* <!-- Back to Top --> */}
                <a href="./" className="btn btn-primary p-3 back-to-top"
                ><i className="fa fa-angle-double-up"></i
                ></a>

                <Footer/>

    </div>
  )
}

export default Classes
