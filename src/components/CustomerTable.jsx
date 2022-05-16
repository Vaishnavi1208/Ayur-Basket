import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class CustomerTable extends Component {

    handleDelete = (customerId) => {
        console.log(customerId);
        axios
        .delete(`http://localhost:8080/customers/remove/${customerId}`)
        .then((response) => {
            console.log(response);
            this.componentDidMount();
        })
        .catch((error) => {
            console.log(error);
        });
        
    };

    render() { 
        return (
            <div className='w-75 mx-auto mt-5 mb-5'>
                <h3><center>Customer List</center></h3>
                <Link to="/customer/add"
                type='button'
                className='btn btn-success float-mid mt-3 mb-3'
                >
                    <i className='bi bi-plus-circle'></i>
                    {" "}
                    Add Customer
                </Link>
                <table className='table table-bordered table-hover mt-5'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.customers.map((c) => (
                            <tr key={c.customerId}>
                                <td>{c.customerId}</td>
                                <td>{c.customerName}</td>
                                {/* <td>
                                    {c.user!= null && c.user.userId}</td> */}
                                <td>
                                    <Link
                                        to={`/customer/update/${c.customerId}`}                                        
                                    >
                                        <i className='bi bi-pencil-square me-3'></i>
                                    </Link>
                                    
                                    <i
                                        className='bi bi-trash'
                                        type="button"
                                        onClick={() => this.handleDelete(c.customerId)}
                                    ></i>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default CustomerTable;