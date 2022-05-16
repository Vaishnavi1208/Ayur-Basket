import React, { Component } from "react";
import { Link, NavLink} from "react-router-dom";
import { connect } from "react-redux";
import images from "./image1.png";
import dimg from "./user.png";

// class component with constructor
class NavBar extends Component {
  state = {};
  render() {
    return ( 
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={images} alt="" width="30" height="24" 
                        className="d-inline-block align-text-top me-2" />
                        <span style={{ fontStyle: 'italic'}}>Ayur Basket</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/medicineshop">Shop Now</Link>
                            </li>
                        </ul>
                        <div className="d-flex justify-content-center">
                            { this.props.login.user.userId ? 
                            <div className="btn-group dropstart me-2">
                                <button type="button" className="btn" data-bs-toggle="dropdown" 
                                aria-expanded="false">
                                    <img src={dimg} alt="" style={{width: '50px'}}/>
                                </button>
                                <ul className="dropdown-menu">
                                    { this.props.login.user.userId != 0 && 
                                    this.props.login.user.userType == "ADMIN" && 
                                        <div>
                                            <li><Link className="dropdown-item" to="/users">
                                              <i class="bi bi-people"></i> Users</Link></li>
                                            <li><Link className="dropdown-item" to="/medicines">
                                              <i class="bi bi-plus"></i> Medicines</Link></li>
                                            <li><Link className="dropdown-item" to="/customers">
                                              <i class="bi bi-person-circle"></i> Customers</Link></li>
                                            <li><Link className="dropdown-item" to="/orders">
                                              <i class="bi bi-cart3"></i> Orders</Link></li>
                                        </div>
                                    }

                                    { this.props.login.user.userId != 0 && 
                                    this.props.login.user.userType == "CUSTOMER" && 
                                        <div>
                                            <li><Link className="dropdown-item" to="/cart">
                                              <i class="bi bi-cart3"></i> Cart</Link></li>
                                            <li><a className="dropdown-item" href="#">
                                              <i class="bi bi-credit-card"></i> Order History</a></li>
                                        </div>
                                    }
                                    <li><hr className="dropdown-divider" /></li>
                                    { this.props.login.user.userId ? 
                                        (<li><Link className="dropdown-item text-decoration-none text-dark" to="/logout">
                                          <i class="bi bi-box-arrow-left"></i> Logout</Link></li>)
                                        : null 
                                    }
                                </ul>
                            </div>
                            : null }
                            { this.props.login.user.userId ? 
                                (<div className='my-auto'>
                                    Hi, {this.props.login.user.userName}
                                </div>) :
                                (<div className='my-auto'>
                                    <Link className="text-decoration-none text-dark" to='/login'>
                                      <span className='me-3'><i className="bi bi-box-arrow-in-right"></i> 
                                      {" "}
                                      Login</span></Link>
                                </div>)
                            }

                            { this.props.login.user.userId ? 
                                null :
                                (<div className='my-auto'>
                                    <Link className="text-decoration-none text-dark" to='/register'>
                                      <span><i className="bi bi-person-plus-fill"></i> Register</span></Link>
                                </div>)
                            }
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
    return {
        login: state.login,
    };
};

export default connect(mapStateToProps)(NavBar);