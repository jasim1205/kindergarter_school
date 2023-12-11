import React, {useState, useEffect} from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Blog } from '../../api/blog';

function BlogGrid() {
  const [blogsData, setBlogsData]= useState([]);
  useEffect (() => {
    const fetchData = async () =>{
      try{
        const data = await Blog();
        setBlogsData(data);
      }catch(error){
        console.error(error.message)
      }

    };
    fetchData();
  }, []);
  return (
    <div>
      <Header />

      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-primary mb-5">
        <div
          className="d-flex flex-column align-items-center justify-content-center"
          style={{ minHeight: "400px" }}
        >
          <h3 className="display-3 font-weight-bold text-white">Our Blog</h3>
          <div className="d-inline-flex text-white">
            <p className="m-0">
              <a className="text-white" href="./">
                Home
              </a>
            </p>
            <p className="m-0 px-2">/</p>
            <p className="m-0">Our Blog</p>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}

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
            {blogsData.map((blog, index) => (
              <div className="col-lg-4 mb-4" key={index}>
                <div className="card border-0 shadow-sm mb-2">
                  <img
                    className="card-img-top mb-2"
                    src={blog.image}
                    alt={blog.name}
                  />
                  <div className="card-body bg-light text-center p-4">
                    <h4 className="">{blog.title}</h4>
                    <div className="d-flex justify-content-center mb-3">
                      <small className="mr-3">
                        <i className="fa fa-user text-primary"></i> Admin
                      </small>
                      <small className="mr-3">
                        <i className="fa fa-folder text-primary"></i> Web Design
                      </small>
                      <small className="mr-3">
                        <i className="fa fa-comments text-primary"></i> 15
                      </small>
                    </div>
                    <p>{blog.description}</p>
                    <a href="" className="btn btn-primary px-4 mx-auto my-2">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <!-- Blog End --> */}

      {/* <!-- Back to Top --> */}
      <a href="./" className="btn btn-primary p-3 back-to-top">
        <i className="fa fa-angle-double-up"></i>
      </a>
      <Footer />
    </div>
  );
}

export default BlogGrid;

