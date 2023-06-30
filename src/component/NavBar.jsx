import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import SimpleDialog from './SimpleDialog';

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState("emails[1]");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

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
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/department"> Departments</Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/doctor">Doctors</Link>

          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/contact"> Contact Us</Link>
          </li>
          <form className="form-inline">
            <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
          <li className="nav-item">
          <Button variant="outlined"className="nav-link" onClick={handleClickOpen}>
 Sigh Up
</Button>
          </li>
        </ul>
        
      </div>
    </nav>
  </div>
</header>
<SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </>      
  )
}

export default NavBar