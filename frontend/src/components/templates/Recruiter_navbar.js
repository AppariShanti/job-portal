import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

export default class Recruiter_navbar extends Component {
    
    constructor(props) {
        super(props);
        document.body.style = 'background: #F6CDDD;';

    }

    render() {
        return (
            <div>                
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse">
                    <a class="navbar-brand" href="#">
      <img src={require('./logo.png')} alt="" width="200" height="60" class="d-inline-block align-text-top"></img>
      
    </a>
                        <ul className="navbar-nav mr-auto">
                            <li className="navbar-item">
                                <Link to="/login" className="nav-link" onClick={() => {localStorage.clear();
                                window.location.href="/login";}}>Logout</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/profileedit_recruiter" className="nav-link">My recruiter Profile</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/addjob" className="nav-link">add job</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/job-listings" className="nav-link">job listings</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/my-employees" className="nav-link">my employees</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}