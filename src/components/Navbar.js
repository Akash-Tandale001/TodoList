import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../pages/style.css";

const Navbar = ({isLoggedIn , setIsLoggedIn}) => {
  const navigate = useNavigate();  

  const handleOnLogout=()=>{
      setIsLoggedIn(false);
      navigate("/", { replace: true });
  }

  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-light navbackground shadow p-3 mb-5 bg-body rounded">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link
          to="/"
          className="navbar-brand"
          style={{
            fontSize: "4vh",
            fontWeight: "bold",
          }}
        >
          Todo list
        </Link>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-link active"
                aria-current="page"
                style={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                }}
              >
                About
              </Link>             
            </li>
            <li>
              {isLoggedIn ? <Link to="/todolist" className="nav-link active"
                aria-current="page"
                style={{
                  fontSize: "3vh",
                  fontWeight: "bold",
                }}>Create TODO</Link>: <p></p>}
            </li>
          </ul>
          {!isLoggedIn ? <button className=" d-flex btn btn-dark" onClick={() => navigate('./login', { replace: true })}> Register</button> : <button className=" d-flex btn btn-dark" type="submit" onClick={handleOnLogout}>
           Logout
          </button> }        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
