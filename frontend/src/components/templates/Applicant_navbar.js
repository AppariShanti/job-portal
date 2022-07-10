import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

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
                                <Link to="/login" className="nav-link" onClick={() => {localStorage.clear();
                                window.location.href="/login";}}>Logout</Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/profileedit_applicant" className="nav-link">My Applicant Profile</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/search_job" className="nav-link">View Jobs</Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/my_applications" className="nav-link">My Applications</Link>
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

                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}