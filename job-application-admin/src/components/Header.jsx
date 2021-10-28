import React from 'react';
import {Link} from "react-router-dom"



const NavBar=()=> {
    const navStyle={
        color:"white",
        textDecoration: "none",
        fontSize: "16px",
        padding:"15px 5px",
    }
    return (
        <div>
                <header>
                    <nav className = "Header">
                        <h1></h1>
                            <ul>
                                <li><Link to="/" style={navStyle}>Home</Link></li>
                                <li><Link to="/applicantform" style={navStyle}>Join Our Team</Link></li>
                                <li><Link to="/managersignin" style={navStyle}>Manager Signin</Link></li>
                                <li><Link to="/blog" style={navStyle}>Blog</Link></li>
                            </ul>
                   </nav>
                </header>
            </div>
    
    );    
}

export default NavBar;
