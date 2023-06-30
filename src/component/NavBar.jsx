import React from 'react';

import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {

  return (
    <>
    <header className="header_section">
  <div className="container">
    <nav className="navbar navbar-expand-lg custom_nav-container ">   
     <Link className="navbar-brand" to="/"><span>Helath+</span></Link> 
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className=""> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
          <Link className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>

          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link"> Departments</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link">Doctors</Link>

          </li>
          <li className="nav-item">
              <Link className="nav-link"> Contact Us</Link>
          </li>
          <form className="form-inline">
            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</header>
<Outlet></Outlet>
    </>      
  )
}

export default NavBar