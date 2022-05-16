import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutAction } from "../actions/loginactions";
import { useSelector, useDispatch } from "react-redux";
import bye from "./bye.png";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.login.user);

  useEffect(() => {
    dispatch(logoutAction(user));

    if(user.userId == 0){
      return navigate('/login');
    }
  }, []);
  return (
    <div>
      <img className="img-fluid mt-5" src={bye} alt="" style={{width: '100px'}}/>
            <h1 className="mt-5">
               Thank you for visiting us!
            </h1>
            <Link to='/' type="button" className="btn btn-primary m-2">
                <i class="bi bi-house-fill"></i> Home
            </Link>
            <Link to='/login' type="button" className="btn btn-success m-2">
                <i class="bi bi-box-arrow-in-right"></i> Login
            </Link>
    </div>
  );
};

export default Logout;