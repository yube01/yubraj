import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png"
import Insta from "../../img/insta.png"

const Intro = () => {
  return (
    <div className="Intro">
        <div className="left">
            <span> Hey, It's Me </span>
            <span> Yubraj Adhikari </span>
            <span> Frontend developer experience in React JS framework</span>
        

        <div className=" nlogo">
            <div className="logo">
                <a href="https://github.com/yube01">
                <img src={Github}alt="" />
                </a>
                <a href="https://www.instagram.com/yubraj__adhikari/">
                <img src={Insta} alt="" />
                </a>
            
            </div>
         
        </div>
        
        
        </div>


        <div className="right">
            <h1> right side</h1>
        </div>
    </div>
  )
}

export default Intro