import React, {   useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateMedicine = () => {
  const params = useParams();
  // console.log(params);

  // initialize the state
  const [medicine, setMedicine] = useState({
    medicineId: params.medicineId,
    medicineName: "",
    medicineCost:"",
    mfd: "",
    expiryDate: "",
    companyName: "",
    // category{
    //   categoryId:"",
    //   categoryName:""
    // }
  });

  useEffect(() => {
    console.log("Inside useEffect");
    axios
      .get(`http://localhost:8080/medicine/view/${params.userId}`)
      .then((res) => {
        console.log(res.data);
        setMedicine(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (event) => {
    console.log("handleChange");
    setMedicine((medicine) => ({
      ...medicine,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .put(`http://localhost:8080/medicine/update`,medicine)
      .then((res) => {
        console.log(res.data);
        alert("Updated Medicine " + params.medicineId + " successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="w-25 border p-5 mt-5 mb-5 shadow rounded"
    >
      <h2>Update Medicine</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mt-5 mb-5">
          <label htmlFor="medicineName" className="form-label float-start">
            Medicine Name
          </label>
          <input
            type="text"
            className="form-control"
            id="medicineName"
            value={medicine.medicineName}
            name="medicineName"
            onChange={handleChange}
          />
        </div>
        <div className="form-outline mt-5 mb-5">
          <label htmlFor="medicineCost" className="form-label float-start">
            Medicine Cost
          </label>
          <input
            type="number"
            className="form-control"
            id="medicineCost"
            value={medicine.medicineCost}
            name="medicineCost"
            onChange={handleChange}
          />
        </div>
        <div className="form-outline mt-5 mb-5">
          <label htmlFor="mfd" className="form-label float-start">
            Manufacture Date
          </label>
          <input
            type="date"
            className="form-control"
            id="mfd"
            value={medicine.mfd}
            name="mfd"
            onChange={handleChange}
          />
        </div>
        <div className="form-outline mt-5 mb-5">
          <label htmlFor="expiryDate" className="form-label float-start">
            Expiry Date
          </label>
          <input
            type="date"
            className="form-control"
            id="expiryDate"
            value={medicine.expiryDate}
            name="expiryDate"
            onChange={handleChange}
          />
        </div>
        <div className="form-outline mt-5 mb-5">
          <label htmlFor="companyName" className="form-label float-start">
            Company Name
          </label>
          <input
            type="text"
            className="form-control"
            id="companyName"
            value={medicine.companyName}
            name="companyName"
            onChange={handleChange}
          />
        </div>
        
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMedicine;