import React from 'react';
// import { Link } from 'react-router-dom';
const Navbar = (props) => {

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
      <div className="container-fluid">
        {/* Here using a and to instead of a and href so that page doesnot reload */}
        <span className="navbar-brand">{props.title}</span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-a active nav-link" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-a" href="/About">About</a>
            </li> */}
          </ul>
          <div className={`form-check form-switch text-${props.Mode==='dark'?'light':'dark'}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.Mode}</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar