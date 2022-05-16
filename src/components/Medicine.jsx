import React, { Component } from 'react';
import axios from 'axios';
import MedicineTable from './MedicineTable';

class Medicine extends Component {
    state = { 
        medicines : [],
     };
    
    componentDidMount(){
        console.log("componentDidMount");
        axios
        .get("http://localhost:8080/medicine/show")
        .then((response) => {
            console.log(response);
            this.setState({medicines: response.data});
        })
    }
    render() { 
        return (
            <div>
                <MedicineTable medicines = {this.state.medicines}/>
            </div>
        );
    }
}
 
export default Medicine;