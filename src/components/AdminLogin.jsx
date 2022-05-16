// class component
// imrc - import React/Component
// cc - class component
import axios from "axios";
import React, { Component } from "react";
import { loginAction, logoutAction } from "../actions/loginactions";
import { withRouter } from "./withRouter";
import { connect } from "react-redux";
import Joi from "joi-browser";
import { Link } from "react-router-dom";

class AdminLogin extends Component {
  state = {
    user: {
      email: "",
      password: "",
      role: "",
    },
    errors: {},
  };

  //Step1:  Define schema to validate email and password
  schema = {
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    password: Joi.string().min(8).max(30).required(),
    role: Joi.string().required(),
  };
  // Step 2: Validate
  validate = () => {
    const errors = {}; //object type local variable
    const result = Joi.validate(this.state.user, this.schema, {
      abortEarly: false,
    });
    if (result.error != null)
      for (let item of result.error.details) {
        errors[item.path[0]] = item.message;
      }
    return Object.keys(errors).length === 0 ? null : errors;
  };

  // Get user input from form and update state object
  handleChange = (event) => {
    const newUser = { ...this.state.user };
    newUser[event.target.name] = event.target.value;
    this.setState({ user: newUser });
  };

  // Send user credentials to backend for validation
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.user);
    //Step3:  validate login details with schema
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;

    // dispatch login action
    this.props.loginAction(this.state.user);

    // If user enters valid credentials, display alert msg and redirect to home page
    if (this.props.login.user.login) {
      alert("User Logged in Successfully!");
      this.props.navigate("/navadmin");
    }
  };
  render() {
    const { email, password, role } = this.state.user;
    return (
      <div className="w-50 mx-auto mt-5 ">
        {this.props.login.errMsg.trim() != "" && (
          <div className="alert alert-danger" role="alert">
            {this.props.login.errMsg}
          </div>
        )}
        <p className="text-center fs-3 bg-info">Login Form</p>
        <form className="border p-3 " onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
            {this.state.errors && <small>{this.state.errors.email}</small>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onChange={this.handleChange}
              value={password}
            />
            {this.state.errors && <small>{this.state.errors.password}</small>}
          </div>
          

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-info fs-5">
              Submit
            </button>
          </div>
          <div className="dd-grid gap-2 mt-3">
            Don't have an account yet? Click <Link to="/register">here</Link> to sign up!
          </div>
        </form>
      </div>
    );
  }
}

//export default withRouter(Login);

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
)(withRouter(AdminLogin));