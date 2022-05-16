import React, { useEffect, useState } from 'react';
import axios from "axios";
import img from "./ayurveda.jpg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {useCart} from "react-use-cart";

const MedicineShop = () => {
    const [ medicine, setMedicine ] = useState([]);

    const user = useSelector((state) => state.login.user);

    const {addItem} = useCart();

    useEffect(() => {
        axios
            .get("http://localhost:8080/medicine/show")
            .then((response) => {
                console.log(response);
                setMedicine(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div class="row ms-3 me-3">
            {medicine.map((m) => (
                <div className="my-4 col-lg-3 col-12 col-sm-6 col-md-4 rounded shadow">
                    <img className="card-img-top w-25 p-3 mx-3" src={img} alt=""/>
                    <div className="card-body">
                        <h5 className="card-title fst-italic">{ m.medicineName }</h5>
                        <h3 className="text-danger">{ m.medicineCost } <span className='fs-1'>₹</span></h3>
    
                        <hr/>
                        <span class="text-uppercase">Mfd Date : { m.mfd }</span>
                        <p class="text-uppercase">Exp Date : { m.expiryDate }</p>
                        <hr/>
                        <p className="card-text">A { m.category ? m.category.categoryName : "Product" } by { m.companyName }</p>
                        
                        { user.userId !=0 && user.userType != "ADMIN" && 
                            <div>
                                <button className='btn btn-primary' onClick={() => addItem(m)}>
                                    <i className='bi bi-cart3'>
                                        {" "}
                                    </i>
                                    Add to Cart
                                </button>
                                <Link to={`/medicines/update/${m.medicineId}`} type="button" className="btn btn-warning m-2">
                                    <i class="bi bi-cash-coin"></i> Buy now
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MedicineShop;