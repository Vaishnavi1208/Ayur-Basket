import React, { Component } from 'react';
import axios from 'axios';
import Joi from "joi-browser";
import { NavLink } from 'react-bootstrap';

class AddOrder extends Component {
    state = { 
        order: {
            orderDate: "",
            dispatchDate: "",
            totalCost: "",
            medicine: [
                {
                    medicineId: ""
                }
            ]
        },
        errors: {},
        errMsg: "",
     };

    schema = {
    orderDate: Joi.date().required(),
    dispatchDate: Joi.date().required(),
    totalCost: Joi.number().required(),
    medicine: [
       { 
           medicineId: Joi.number().optional()
        }
    ]
    };

    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.order,this.schema, {
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
    const newOrder = { ...this.state.order };
    newOrder[event.target.name] = event.target.value;
    this.setState({ order: newOrder });
  };

  // Send user credentials to backend for validation
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.order);
    //Step3:  validate login details with schema
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
    .post("http://localhost:8080/orders/add", this.state.order)
    .then((res) => {
        console.log(res.data);
        alert("Order Added Successfully!")
    })
    .catch((err) => {
        console.log(err);
        this.setState({errMsg: err.response.data.message});
    })

    // dispatch login action
    this.props.loginAction(this.state.order);

    
  };

    render() {
        const { errors, errMsg } = this.state; 
        return (
            <div
                style={{ marginLeft: "auto", marginRight: "auto" }}
                className= "w-25 border p-3 mt-5 shadow rounded"
            >
                <h1>Add Order</h1>
                {errMsg && (
                    <div className="alert alert-danger" role="alert">
                        {errMsg}
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                    {/* <div className="mb-3">
                        <label htmlFor="orderId" className='form-label float-start'>
                            Order Id
                        </label>
                        <input 
                            type="number" 
                            className='form-control'
                            id='orderId'
                            value={this.state.order.orderId}
                            name="orderId"
                            onChange={this.handleChange}
                        />
                        {errors && <small className='text-danger'>{errors.orderName}</small>}
                    </div> */}
                    <div className="mt-5 mb-5">
                        <label htmlFor="orderDate" className='form-label float-start'>
                            Order Date
                        </label>
                        <input 
                            type="date" 
                            className='form-control'
                            id='orderDate'
                            value={this.state.order.orderDate}
                            name="orderDate"
                            onChange={this.handleChange}
                        />
                        {errors && <small classPassword='text-danger'>{errors.orderDate}</small>}
                    </div>
                    <div className="mt-5 mb-5">
                        <label htmlFor="dispatchDate" className='form-label float-start'>
                            Dispatch Date
                        </label>
                        <input 
                            type="date" 
                            className='form-control'
                            id='dispatchDate'
                            value={this.state.order.dispatchDate}
                            name="dispatchDate"
                            onChange={this.handleChange}
                        />
                        {errors && <small classPassword='text-danger'>{errors.dispatchDate}</small>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="totalCost" className='form-label float-start'>
                            Total Cost
                        </label>
                        <input 
                            type="number" 
                            className='form-control'
                            id='totalCost'
                            value={this.state.order.totalCost}
                            name="totalCost"
                            onChange={this.handleChange}
                        />
                        {errors && <small classPassword='text-danger'>{errors.totalCost}</small>}
                    </div>
                    <div className="d-grid gap-2">
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                    <div className="d-grid gap-2 mt-3">
                    <NavLink className="d-grid gap-2" to="/order">
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
 
export default AddOrder;