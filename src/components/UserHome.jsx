import React,{Component} from "react";
import { Link } from "react-router-dom";

class UserHome extends Component{
    state={};
    render(){
        return (
        <div>
            <h2 className="user mt-5 mb-5">Welcome User!</h2>          
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

export default UserHome;