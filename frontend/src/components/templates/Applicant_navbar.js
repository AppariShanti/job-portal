import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom';

export default class Applicant_navbar extends Component {
    
    constructor(props) {
        super(props);
        document.body.style = 'background: #F6CDDD;';
    }

    render() {
        return (
            <div>                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                        <a class="navbar-brand" href="#">
      <img src={require('./logo.png')} alt="" width="200" height="60" class="d-inline-block align-text-top"></img>
      
    </a>
                            
                            <li className="navbar-item">
                
                                <NavLink  to="/profileedit_applicant" className="nav-link" activeClassName="active" activeStyle={{color: "#cf842d", fontWeight: "bold"}}>My Profile</NavLink>

                            </li>

                            <li className="navbar-item">
                                
                                <NavLink  to="/search_job" className="nav-link" activeClassName="active" activeStyle={{color: "#cf842d", fontWeight: "bold"}}>View Jobs</NavLink>

                            </li>

                            <li className="navbar-item">
                                
                                <NavLink  to="/my_applications" className="nav-link" activeClassName="active" activeStyle={{color: "#cf842d", fontWeight: "bold"}}>My Applications</NavLink>
                            </li>
                            <li className="navbar-item">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfKnu9AupyBB9k7EdfbcZX9PxAaVOuJ5l1laAvWa48iW9VCw/viewform" className="nav-link">Find Mentor</a>
                            </li>
                            <li className="navbar-item">
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9VyvH3zJZFAnKyfzHu3b7RusK_hb2ttPlwnfQmiPTpZHGvQ/viewform" className="nav-link">Be A Mentor</a>
                            </li>

                            <li className="navbar-item">
                                <a href="https://relevel.com/" className="nav-link">Skill-O-Meter</a>
                            </li>

                            <li className="navbar-item">
                                
                                <NavLink  to="/login" className="nav-link" activeClassName="active" activeStyle={{color: "#cf842d", fontWeight: "bold"}}  onClick={() => {localStorage.clear();
                                window.location.href="/login";}}>Logout</NavLink>

                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}