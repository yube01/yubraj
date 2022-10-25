import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="body">
        
            <div className="body-first">
                 <div className="creater-name"> Yubraj </div>
                <span> toggle</span>
            </div>
            
        
        <div className="leftbody">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Experience</li>
                <li>Blog</li>
            </ul>
            <button className="button nbtn"> Contact us </button>
        </div>
     
    </div>
  )
}

export default Navbar