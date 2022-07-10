import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    
    constructor(props) {
        super(props);
        document.body.style = 'background: #F6CDDD;';

    }

    render() {
        return (
            <div>                
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    
                    <div className="collapse navbar-collapse">
                    <a class="navbar-brand" href="#">
      <img src={require('./logo.png')} alt="" width="200" height="60" class="d-inline-block align-text-top"></img>
      
    </a>
                        <ul className="navbar-nav mr-auto">
                            {/* <li className="navbar-item">
                                <Link to="/users" className="nav-link">Users</Link>
                            </li> */}
                            <li className="navbar-item" >
                                <NavLink  to="/register" className="nav-link" activeClassName="active" activeStyle={{color: "#cf842d", fontWeight: "bold"}} style={{fontSize: 25 +'px'}}>Register</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to="/login" className="nav-link" activeClassName="active" activeStyle={{color: "#cf842d", fontWeight: "bold"}} style={{fontSize: 25 +'px'}}>Login</NavLink>
                            </li>
                            {/* <li className="navbar-item">
                                <Link to="/profile" className="nav-link">My Profile</Link>
                            </li>                             */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
