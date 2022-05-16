import React, { Component } from 'react';
import axios from 'axios';
import Joi from "joi-browser";
import { NavLink } from 'react-router-dom';

class AddMedicine extends Component {
    state = { 
        medicine: {
            medicineName: "",
            medicineCost: "",
            mfd: "",
            expiryDate: "",
            companyName: "",
            // category: {
            //     categoryId: "",
            //     categoryName: ""
            // }
        },
        errors: {},
        errMsg: "",
     };

    schema = {
    medicineName: Joi.string().required(),
    medicineCost: Joi.number().required(),
    mfd: Joi.date().required(),
    expiryDate: Joi.date().required(),
    companyName: Joi.string().required(),
    // categoryName: Joi.string()
    };

    validate = () => {
        const errors = {};
        const result = Joi.validate(this.state.medicine,this.schema, {
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
    const newMedicine = { ...this.state.medicine };
    newMedicine[event.target.name] = event.target.value;
    this.setState({ medicine: newMedicine });
  };

  // Send user credentials to backend for validation
  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.medicine);
    //Step3:  validate login details with schema
    this.setState({ errors: this.validate() });
    console.log(this.state.errors);
    if (this.state.errors) return;
    axios
    .post("http://localhost:8080/medicine/add", this.state.medicine)
    .then((res) => {
        console.log(res.data);
        alert("Medicine Added Successfully!")
    })
    .catch((err) => {
        console.log(err);
        this.setState({errMsg: err.response.data.message});
    })

    // dispatch login action
    this.props.loginAction(this.state.medicine);

    
  };

    render() {
        const { errors, errMsg } = this.state; 
        return (
            <div
                style={{ marginLeft: "auto", marginRight: "auto" }}
                className= "w-25 border p-3 mt-3 shadow rounded"
            >
                <h3 color='blue'>Add Medicine</h3>
                {errMsg && (
                    <div className="alert alert-danger" role="alert">
                        {errMsg}
                    </div>
                )}
                <form onSubmit={this.handleSubmit}>
                {/* <!-- Email input --> */}
                <div class="form-outline mb-4">
                    <label htmlFor="medicineName" className='form-label float-start'>
                                Medicine Name
                    </label>
                    <input 
                                type="text" 
                                className='form-control'
                                id='medicineName'
                                value={this.state.medicine.medicineName}
                                name="medicineName"
                                onChange={this.handleChange}
                    />
                </div>

                {/* <!-- Password input --> */}
                <div class="form-outline mb-4">
                <label htmlFor="medicineCost" className='form-label float-start'>
                            Medicine Cost
                        </label>
                        <input                             
                            type="number" 
                            className='form-control'
                            id='medicineCost'
                            value={this.state.medicine.medicineCost}
                            placeholder="&#8377;"
                            name="medicineCost"
                            onChange={this.handleChange}
                        />
                        
                        {errors && <small classCost='text-danger'>{errors.medicineCost}</small>}
                </div>
                <div class="form-outline mb-4">
                    <label htmlFor="mfd" className='form-label float-start'>
                                Manufacture Date
                    </label>
                    <input 
                                type="date" 
                                className='form-control'
                                id='mfd'
                                value={this.state.medicine.mfd}
                                name="mfd"
                                onChange={this.handleChange}
                    />
                </div>
                <div class="form-outline mb-4">
                    <label htmlFor="expiryDate" className='form-label float-start'>
                                Expiry Date
                    </label>
                    <input 
                                type="date" 
                                className='form-control'
                                id='expiryDate'
                                value={this.state.medicine.expiryDate}
                                name="expiryDate"
                                onChange={this.handleChange}
                    />
                </div>
                <div class="form-outline mb-4">
                    <label htmlFor="companyName" className='form-label float-start'>
                        Company Name
                    </label>
                    <input 
                        type="text" 
                        className='form-control'
                        id='companyName'
                        value={this.state.medicine.companyName}
                        name="companyName"
                        onChange={this.handleChange}
                    />
                </div>
                {/* <div class="form-outline mb-4">
                    <label htmlFor="category" className='form-label float-start'>
                        Category Name
                    </label>
                    <input 
                        type="text" 
                        className='form-control'
                        id='category'
                        value={this.state.medicine.category.categoryName}
                        name="category"
                        onChange={this.handleChange}
                    />
                </div> */}
                <div className="d-grid gap-2">
                        <button type='submit' className='btn btn-success'>
                            Submit
                        </button>
                </div>
                <div className="d-grid gap-2 mt-3">
                    <NavLink className="d-grid gap-2" to="/medicine">
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
 
export default AddMedicine;