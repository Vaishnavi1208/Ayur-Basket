import React, {   useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const UpdateUser = () => {
  const params = useParams();
  // console.log(params);

  // initialize the state
  const [user, setUser] = useState({
    userId: params.userId,
    userName: "",
    userType: "",
  });

  useEffect(() => {
    console.log("Inside useEffect");
    axios
      .get(`http://localhost:8080/users/view/${params.userId}`)
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleChange = (event) => {
    console.log("handleChange");
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    axios
      .put(`http://localhost:8080/users/update`,user)
      .then((res) => {
        console.log(res.data);
        alert("Updated User " + params.userId + " successfully!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      style={{ marginLeft: "auto", marginRight: "auto" }}
      className="w-50 border p-3 mt-3"
    >
      <h1>Update User</h1>
      <form onSubmit={handleSubmit}>
        {/* <div className="mb-3">
          <label htmlFor="userId" className="form-label float-start">
            User Id
          </label>
          <input
            type="number"
            className="form-control"
            id="userId"
            value={user.userId}
            name="userId"
            onChange={handleChange}
          />
        </div> */}
        <div className="mb-3">
          <label htmlFor="userName" className="form-label float-start">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="userName"
            value={user.userName}
            name="userName"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userType" className="form-label float-start">
            User Type
          </label>
          <input
            type="text"
            className="form-control"
            id="userType"
            value={user.userType}
            name="userType"
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

export default UpdateUser;