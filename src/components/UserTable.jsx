import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class UserTable extends Component {

    handleDelete = (userId) => {
        console.log(userId);
        axios
        .delete(`http://localhost:8080/users/remove/${userId}`)
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
                <h3><center>User List</center></h3>
                <Link to="/user/add"
                type='button'
                className='btn btn-success float-mid mt-3 mb-3'
                >
                     <i className='bi bi-plus-circle'></i>
                    {" "}
                    Add user
                </Link>
                <table className='table table-bordered table-hover mt-5'>
                    <thead className='table-primary'>
                        <tr>
                            <th>User ID</th>
                            <th>User Name</th>
                            <th>User Type</th>                            
                            <th>User Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.users.map((c) => (
                            <tr key={c.userId}>
                                <td>{c.userId}</td>
                                <td>{c.userName}</td>
                                <td>{c.userType}</td>
                                <td>{c.userPassword}</td>
                                <td>
                                    <Link
                                        to={`/users/update/${c.userId}`}                                        
                                    >
                                        <i className='bi bi-pencil-square me-3'></i>
                                    </Link>
                                    <i
                                        className='bi bi-trash'
                                        type="button"
                                        onClick={() => this.handleDelete(c.userId)}
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
 
export default UserTable;