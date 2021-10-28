import React from 'react';
import {Link} from "react-router-dom"
// import logo from "../Images/chef.png"


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
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/applicantform">Join Our Team</Link></li>
                                <li><Link to="/managersignin">Manager Signin</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                   </nav>
                </header>
            </div>
        // <div>
            
        //     <nav id="nav-bar">
        //         <div>
        //             <a href="">
        //             {/* <Link to="/"><img src={logo}/></Link> */}
                    
        //             </a>
        //         {/* <h3><Link to="/" style={navStyle}>Purr-Fect Foods</Link></h3> */}
        //         </div>
                

        //         <h3> Future is Here</h3>
        //         <div className="nav-links">
                    
        //             <div><Link to="/" style={navStyle}>HOME</Link></div>
        //             <div><Link to="applicantform" style={navStyle}>Upload Resume</Link></div>
        //             <div><Link to="managersignin" style={navStyle}>Manager Signin</Link></div>
        //             <div><Link to="blog" style={navStyle}>Blog</Link></div>
        //         </div>                
        //     </nav>
        // </div>
    );    
}

export default NavBar;
