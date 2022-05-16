import React,{Component} from "react";
import { Link } from "react-router-dom";
class AdminHome extends Component{
    state={};
    render(){
        return (
        <div>
            <h2 className="mt-5 mb-5">Welcome Admin!</h2>          
            <Link to="/customer" type="button" className="btn btn-primary mx-4 mt-5">
                Customer Management
            </Link>
            <Link to="/user" type="button" className="btn btn-primary mx-4 mt-5">
                User Management
            </Link>
            <Link to="/order" type="button" className="btn btn-primary mx-4 mt-5">
                Order Management
            </Link>
            <Link to="/medicine" type="button" className="btn btn-primary mx-4 mt-5">
                Medicine Management
            </Link>
        </div>

        );
    }
}

export default AdminHome;