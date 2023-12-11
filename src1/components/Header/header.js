import {React, useState} from "react";
import { Link, useLocation,  useNavigate} from "react-router-dom";

import "./assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "./assets/css/style.css";
import "./assets/lib/lightbox/css/lightbox.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { logout } from "../Admin/Auth/auth";

// import "./assets/lib/flaticon/font/flaticon.css";

const Header = () =>
{
  const navigate = useNavigate();
  const [ isSignedIn, setIssignedIn ] = useState( () =>
  {
    const userLogged = localStorage.getItem( "access_token" );
    return userLogged || false;
  } )
  const signout = () =>
  {
    setIssignedIn( false );
    logout();
    navigate("./");
  }

  const location = useLocation();
  const isLinkActive = (path) => {
    return location.pathname == path ? "active" : "";
  };
  const ClickH = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <div className="container-fluid bg-light position-relative shadow">
        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0 px-lg-5 sticky-top">
          <a
            href="/"
            className="navbar-brand font-weight-bold text-secondary"
            style={{ fontSize: "50px" }}
          >
            {/* <i className="flaticon-043-teddy-bear"></i> */}
            <span className="text-primary">KidKinder</span>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav font-weight-bold mx-auto py-0">
              <Link to="/" className={`nav-item nav-link ${isLinkActive("/")}`}>
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link ${isLinkActive("/about")}`}
              >
                About
              </Link>
              <Link
                to="/classes"
                className={`nav-item nav-link ${isLinkActive("/classes")}`}
              >
                Classes
              </Link>
              <Link
                to="/teachers"
                className={`nav-item nav-link ${isLinkActive("/teachers")}`}
              >
                Teachers
              </Link>
              <Link
                to="/gallery"
                className={`nav-item nav-link ${isLinkActive("/gallery")}`}
              >
                Gallery
              </Link>
              <div className="nav-item dropdown">
                <a
                  onClick={ClickH}
                  to="/"
                  className={`nav-link dropdown-toggle ${isLinkActive(
                    "/pages"
                  )}`}
                  data-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu rounded-0 m-0">
                  <Link to="/bloggrid" className="dropdown-item">
                    Blog Grid
                  </Link>
                  <Link to="/blogdetail" className="dropdown-item">
                    Blog Detail
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className={`nav-item nav-link ${isLinkActive("/contact")}`}
              >
                Contact
              </Link>
            </div>
            {isSignedIn ? (
              <div className="header__right__auth">
                <a
                  className="btn btn-link signbtn"
                  href="javascript:void(0)"
                  onClick={signout}
                >Sign out/
                </a>
                <a href="./dashboard">dashboard</a>
              </div>
            ) : (
              <div className="header__right__auth">
                <a href="./signin">Sign in</a>/<a href="./register">Register</a>
              </div>
            )}
            <a href="./../" className="btn btn-primary px-3 ml-1">
              Join class
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
