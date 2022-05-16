import React, { Component } from 'react';
import axios from 'axios';
import CustomerTable from './CustomerTable';

class Customer extends Component {
    state = { 
        customers : [],
     };
    
    componentDidMount(){
        console.log("componentDidMount");
        axios
        .get("http://localhost:8080/customers/show")
        .then((response) => {
            console.log(response);
            this.setState({customers: response.data});
        })
    }
    render() { 
        return (
            <div>
                <CustomerTable customers = {this.state.customers}/>
            </div>
        );
    }
}
 
export default Customer;