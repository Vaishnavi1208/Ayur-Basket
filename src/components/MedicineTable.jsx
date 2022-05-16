import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class MedicineTable extends Component {

    handleDelete = (medicineId) => {
        console.log(medicineId);
        axios
        .delete(`http://localhost:8080/medicine/remove/${medicineId}`)
        .then((response) => {
            console.log(response);
            alert("Medicine Deleted Successfully!")
            this.componentDidMount();
        })
        .catch((error) => {
            console.log(error);
        });
    };

    render() { 
        return (
            <div className='w-75 mx-auto mt-5 mb-5'>
                <h3><center>Medicine List</center></h3>
                <Link to="/medicine/add"
                type='button'
                className='btn btn-success float-mid mt-3 mb-3'
                >
                     <i className='bi bi-plus-circle'></i>
                    {" "}
                    Add Medicine
                </Link>
                <table className='table table-bordered table-hover mt-5'>
                    <thead className='table-primary'>
                        <tr>
                            <th>Medicine Id</th>
                            <th>Medicine Name</th>
                            <th>Medicine Cost</th>
                            <th>Manufacture Date</th>
                            <th>Expiry Date</th>
                            <th>Company Name</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.medicines.map((c) => (
                            <tr key={c.medicineId}>
                                <td>{c.medicineId}</td>
                                <td>{c.medicineName}</td>
                                <td>&#8377; {c.medicineCost}</td>
                                <td>{c.mfd}</td>
                                <td>{c.expiryDate}</td>
                                <td>{c.companyName}</td>
                                <td>{c.category}</td>
                                <td>
                                    <Link
                                        to={`/medicine/update/${c.medicineId}`}                                        
                                    >
                                        <i className='bi bi-pencil-square me-3'></i>
                                    </Link>
                                    <i
                                        className='bi bi-trash'
                                        type="button"
                                        onClick={() => this.handleDelete(c.medicineId)}
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
 
export default MedicineTable;