import React from 'react'
import Card from '../Card/Card'


import "./Services.css"

const Services = () => {
  return (
    <div className="service">
        <div className="leftserv">
            <span>
                My Service
            </span>

            <span>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                <br/>Consectetur, suscipit.
            </span>
            <button className="button cvbtn"> Download CV</button>
        </div>
        <div className="rightserv">
            <div>

                <Card
                
                heading={"Design"}
                detail ={"Adobe photoshop , illustrator"}
                
                
                
                
                />
            </div>
        </div>
       
    </div>
  )
}

export default Services