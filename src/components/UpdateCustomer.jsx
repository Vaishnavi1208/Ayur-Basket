import React, {   useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateCustomer = () => {
  const params = useParams();
  // console.log(params);

  // initialize the state
  const [customer, setCustomer] = useState({
    customerId: params.customerId,
    customerName: "",
    customerPassword: "",
    user: {
      userId:""
    }
  });

  useEffect(() => {
    console.log("Inside useEffect");
    axios
      .get(`http://localhost:8080/customers/view/${params.customerId}`)
      .then((res) => {
        console.log(res.data);
        setCustomer(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (event) => {
    console.log("handleChange");
    setCustomer((customer) => ({
      ...customer,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .put(`http://localhost:8080/customers/update`,customer)
      .then((res) => {
        console.log(res.data);
        alert("Updated Customer " + params.customerId + " successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="w-25 border p-3 mt-5 mb-5 shadow rounded"
    >
      <h3>Update Customer</h3>
      <form onSubmit={handleSubmit}>
        
        <div className="mt-5 mb-5">
          <label htmlFor="customerName" className="form-label float-start">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control"
            id="customerName"
            value={customer.customerName}
            name="customerName"
            onChange={handleChange}
          />
        </div>
        <div className="mt-5 mb-5">
          <label htmlFor="customerPassword" className="form-label float-start">
            Customer Password
          </label>
          <input
            type="password"
            className="form-control"
            id="customerPassword"
            value={customer.customerPassword}
            name="customerPassword"
            onChange={handleChange}
          />
        </div>
        {/* <div className="mb-3">
          <label htmlFor="userId" className="form-label float-start">
            User Id
          </label>
          <input
            type="number"
            className="form-control"
            id="userId"
            value={customer.user && customer.user.userId}
            name="userId"
            onChange={handleChange}
          />
        </div> */}
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCustomer;