import React,{Component} from "react";
import { NavLink, Link } from "react-router-dom";
import "./styles.css"
import charak from "./Charak.jpg";
import img1 from "./dhanvantri.jpg";
import img3 from "./img3.jpg";

class Home extends Component{
    state={};
    render(){
        return (
            <div className="home">
                {/* <h1>Home Page</h1> */}

                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={img1} class="d-block w-75 mx-auto mt-5" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={charak} class="d-block w-75 mx-auto mt-5" alt="..."/>
                    </div>
                    <div class="carousel-item">
                    <img src={img3} class="d-block w-75 mx-auto mt-5" alt="..."/>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
                </div>
                <div className="text">
                    <p>
                    Ayurvedic medicine (“Ayurveda” for short) is one of the world's oldest holistic (“whole-body”) healing systems. 
                    It was developed more than 3,000 years ago in India. It’s based on the belief that health and wellness depend 
                    on a delicate balance between the mind, body, and spirit. <br/> It's main goal is to promote good health, not fight 
                    disease. But treatments may be geared toward specific health problems.
                    </p>
                </div>

                {/* <nav className="navbar fixed-bottom d-flex navbar-expand-sm navbar-dark bg-dark">
                    <div className="container-fluid">
                    <ul className="navbar-nav me-auto mb-2 mb-0">
                            <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/home"
                            >
                                Contact Us
                            </NavLink>
                            </li>
                            
                            <li className="nav-item">                        
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                            <Link to="/home"><i className="bi bi-google"></i></Link>
                                
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                            <Link to="/home"><i className="bi bi-envelope"></i></Link>
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink
                                className="nav-link active"
                                aria-current="page"
                                to="/"
                            >
                            <Link to="/home"><i className="bi bi-telephone"></i></Link>
                            </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav> */}
            </div>

        );
    }
}

export default Home;