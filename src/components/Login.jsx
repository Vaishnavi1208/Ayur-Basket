// class component
// imrc - import React/Component
// cc - class component
import axios from "axios";
import React, { Component } from "react";
import { loginAction, logoutAction } from "../actions/loginactions";
import { withRouter } from "./withRouter";
import { connect } from "react-redux";
import logo from "./image1.png";

class Login extends Component {
  state = {
    user: {
        userName: "",
        userType: "",
        customer: {
            customerName: "",
            customerPassword: ""
        },
        admin: {
            password: ""
        }
    },
}

  
  // Get user input from form and update state object
  handleChange = (event) => {
    const newUser = { ...this.state.user };
    newUser[event.target.name] = event.target.value;
    this.setState({ user: newUser });
  };


  // to dynamically set properties of admin on input change
  setAdmin = (event) => {
    var user = { ...this.state.user }
    user.admin.password = event.target.value;
    user.customer = null;
    this.setState({ user })
}

// to dynamically set properties of customer on input change
  setCustomer = (event) => {
      var user = { ...this.state.user }
      user.customer[event.target.name] = event.target.value;
      user.admin = null;
      this.setState({ user })
  }

  // Send user credentials to backend for validation
  handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(this.state.user);

    // dispatch login action
    this.props.loginAction(this.state.user);

    // If user enters valid credentials, display alert msg and redirect to home page
    if (this.props.login.user.userId) {
        alert("User Logged in Successfully!");
        this.props.navigate("/");
    } else {
        this.props.navigate("/login");
    }
};

  render() {
    const { errors, errMsg } = this.state;
    return (
        <div className="col-lg-4 col-md-6 col-sm-8 col-11 mx-auto my-5 bg-light p-5 rounded shadow">
            <form className="" onSubmit={this.handleSubmit}>
                <img className="mb-4" src={logo} alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Welcome!</h1>
                {this.props.login.errMsg != "" && (
                    <div className="alert alert-danger p-0" role="alert">
                        {this.props.login.errMsg}
                    </div>
                )}
                <div className="mb-3">
                    <label htmlFor="username" className="sr-only my-2">Username</label>
                    <input
                        type="text" id="username"
                        className="form-control" placeholder="username"
                        name='userName'
                        value={this.state.user.userName}
                        onChange={this.handleChange}
                        required="" />
                    {errors && <small className="text-danger">{errors.userName}</small>}
                </div>

                <div className="mb-3">
                    <label htmlFor="userType" className="sr-only my-2">
                        User Type
                    </label>
                    <select
                        className="form-control"
                        id="userType"
                        name="userType"
                        onChange={this.handleChange}>
                        <option>Choose...</option>
                        <option value="ADMIN">Admin</option>
                        <option value="CUSTOMER">Customer</option>
                    </select>
                    {errors && <small className="text-danger">{errors.userType}</small>}
                </div>
                {
                    this.state.user.userType === "ADMIN" &&
                    <div>
                        <label htmlFor="password" className="sr-only my-2">Password</label>
                        <input
                            type="password" id="password"
                            className="form-control" placeholder="Password"
                            name='password'
                            value={this.state.user.admin.password}
                            onChange={this.setAdmin}
                            required/>
                        {errors && <small className="text-danger">{errors.admin}</small>}
                    </div>
                }

                {
                    this.state.user.userType === "CUSTOMER" &&
                    <div>
                        <label htmlFor="customerPassword" className="sr-only my-2">Password</label>
                        <input
                            type="password" id="customerPassword"
                            className="form-control" placeholder="Password"
                            name='customerPassword'
                            value={this.state.user.customer.customerPassword}
                            onChange={this.setCustomer}
                            required />
                        {errors && <small className="text-danger">{errors.customer}</small>}
                    </div>
                }
                <br />
                <button className="btn btn-success btn-block" type="submit">Login</button>
            </form>
        </div>
    );
}
}

// funtion to get updates from store
const mapStateToProps = (state) => {
return {
    login: state.login,
};
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
return {
    loginAction,
    logoutAction,
};
};

export default connect(
mapStateToProps,
mapDispatchToProps()
)(withRouter(Login));