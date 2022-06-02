import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../../App.css"
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
  <div className="container">
  <Link to="/" className="fs-3 ubuntu navbar-brand">
        Rick & Morty <span className="text-primary">
          WiKi
        </span>
  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>

      <style jsx>
        {`
          button[aria-expanded="false"] > .close{
            display: none;
          }
          button[aria-expanded="true"] > .open{
            display: none;
          }
        `}
      </style>
      <i class="fas fa-times close fw-bold text-dark"></i>
      
    </button>

    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <div className="navbar-nav fs-5">
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link active" to="/" >
            Characters
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/episodes">
            Episodes
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="location">
            Location
          </NavLink>
        </li>
      </div>
    </div>
  </div>
</nav>
  )
} 

export default Navbar
