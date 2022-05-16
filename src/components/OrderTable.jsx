import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class OrderTable extends Component {

    handleDelete = (orderId) => {
        console.log(orderId);
        axios
        .delete(`http://localhost:8080/orders/remove/${orderId}`)
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
                <h3><center>Order List</center></h3>
                <Link to="/order/add"
                type='button'
                className='btn btn-success float-mid mt-3 mb-3'
                >
                     <i className='bi bi-plus-circle'></i>
                    {" "}
                    Add Order
                </Link>
                <table className='table table-hover mt-5'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Order Id</th>
                            <th>Order Date</th>
                            <th>Order Dispatch Date</th>
                            <th>Total Cost</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.orders.map((o) => (
                            <tr key={o.orderId}>
                                <td>{o.orderId}</td>
                                <td>{o.orderDate}</td>
                                <td>{o.dispatchDate}</td>
                                <td>{o.totalCost}</td>
                                <td>
                                    <Link
                                        to={`/orders/update/${o.orderId}`}                                        
                                    >
                                        <i className='bi bi-pencil-square me-3'></i>
                                    </Link>
                                    <i
                                        className='bi bi-trash'
                                        type="button"
                                        onClick={() => this.handleDelete(o.orderId)}
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
 
export default OrderTable;