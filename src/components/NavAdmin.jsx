import React, { Component } from "react";
import { Link, NavLink} from "react-router-dom";

// class component with constructor
class NavBar extends Component {
  state = {};
  render() {
    return ( 
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            
          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
            
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
                    <li className="nav-item">
                    <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/home"
                    >
                        <i className="bi bi-basket"></i>
                        {" "}
                        Ayur Basket &#8482;
                        {" "}
                    </NavLink>
                    </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/customer">
                    Customers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/medicine">
                    Medicines
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/user">
                    Users
                  </NavLink>
                </li>
              </ul>

              <form class="d-flex">
                  <input class="form-control me-2 input-lg" id="inputlg" type="search" placeholder="Search for medicine and wellness" aria-label="Search"/>                
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>

            <ul className="navbar-nav ms-auto">
           
                {/* <li className="nav-item">
                  <NavLink className="nav-link active" to="/cart">
                    Cart
                    {" "}
                    <i class="bi bi-cart-plus"></i>
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        <nav className="navbar fixed-bottom navbar-expand-xl navbar-dark bg-dark">
            <div className="container-fluid">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/home"
                    >
                        Contact Us
                    </NavLink>
                    </li>
                    
                    <li className="nav-item">                        
                    <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                    >
                    <Link to="/home"><i className="bi bi-google"></i></Link>
                        
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                    >
                    <Link to="/home"><i className="bi bi-envelope"></i></Link>
                    </NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="/"
                    >
                    <Link to="/home"><i className="bi bi-telephone"></i></Link>
                    </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;