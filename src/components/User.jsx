import React, { Component } from 'react';
import axios from 'axios';
import UserTable from './UserTable';

class User extends Component {
    state = { 
        users : [],
     };
    
    componentDidMount(){
        console.log("componentDidMount");
        axios
        .get("http://localhost:8080/users/show")
        .then((response) => {
            console.log(response);
            this.setState({users: response.data});
        })
    }
    render() { 
        return (
            <div>
                <UserTable users = {this.state.users}/>
            </div>
        );
    }
}
 
export default User;