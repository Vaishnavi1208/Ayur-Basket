import React, { Component } from 'react';
import axios from 'axios';
import Joi from "joi-browser";
import { NavLink } from 'react-bootstrap';

class AddCustomer extends Component {
    state = { 
        customer: {
            customerName: "",
            customerPassword: "",
            // user:{
            //     userId:"",
            // }
        },
        errors: {},
        errMsg: "", 
     };

    schema = {
    customerName: Joi.string().required(),
    customerPassword: Joi.string().required(),
    };

    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.customer,this.schema, {
            abortEarly: false,
        });
        console.log(result);
        if( result.error != null)
            for (let item of result.error.details) {
                errors[item.path[0]] = item.message;
            }
        return Object.keys(errors).length === 0 ? null : errors;
    };

    // Get user input from form and update state object
  handleChange = (event) => {
    const newCustomer = { ...this.state.customer };
    newCustomer[event.target.name] = event.target.value;
    this.setState({ customer: newCustomer });
  };

  // Send user credentials to backend for validation
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.customer);
    //Step3:  validate login details with schema
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
    .post("http://localhost:8080/customers/add", this.state.customer)
    .then((res) => {
        console.log(res.data);
        alert("Customer Added Successfully!")
    })
    .catch((err) => {
        console.log(err);
        this.setState({errMsg: err.response.data.message});
    })

    // dispatch login action
    this.props.loginAction(this.state.customer);

    
  };

    render() {
        const { errors, errMsg } = this.state; 
        return (
            <div
                style={{ marginLeft: "auto", marginRight: "auto" }}
                className= "w-25 border p-3 mt-5 shadow rounded"
            >
                <h3>Add Customer</h3>
                {errMsg && (
                    <div className="alert alert-danger" role="alert">
                        {errMsg}
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                    <div className="mt-5">
                        <label htmlFor="customerName" className='form-label float-start'>
                            Customer Name
                        </label>
                        <input 
                            type="text" 
                            className='form-control'
                            id='customerName'
                            value={this.state.customer.customerName}
                            name="customerName"
                            onChange={this.handleChange}
                        />
                        {errors && <small className='text-danger'>{errors.customerName}</small>}
                    </div>
                    <div className="mt-5 mb-5">
                        <label htmlFor="customerPassword" className='form-label float-start'>
                            Customer Password
                        </label>
                        <input 
                            type="password" 
                            className='form-control'
                            id='customerPassword'
                            value={this.state.customer.customerPassword}
                            name="customerPassword"
                            onChange={this.handleChange}
                        />
                        {errors && <small classPassword='text-danger'>{errors.customerPassword}</small>}
                    </div>
                    {/* <div>
                        <label htmlfor="user" className="form-label">
                            UserId Of the person
                        </label>
                        <input
                            type="text"
                            value={this.state.customer.user.userId}
                            name="user"
                            onChange={this.handleChange}
                            placeholder="Enter the userId of that person"
                            className="form-control"
                            id="user"
                            />
                            {errors && <small classPassword='text-danger'>{errors.customerPassword}</small>}
                    </div> */}
                    <div className="d-grid gap-2 mt-3">
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                    <NavLink className="d-grid gap-2" to="/customer">
                    <button type='submit' className='btn btn-primary'>
                        Go Back
                    </button>
                    </NavLink>
                </div>
                </form>
            </div>
        );
    }
}
 
export default AddCustomer;