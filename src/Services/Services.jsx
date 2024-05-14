import React from 'react'
import "./Services.css"
import { MdKeyboardArrowRight } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div className="service-sec padding-web-overall">
        <div className="service-heading">
            <p>Our Services</p>
            <h2>Fostering a playful & engaging learning environment</h2>
        </div>


        
        <div className="service-sec-card">
            <div className="sev-rd active">
                <div className="p-1">
                    <img src="./src/assets/Frame 390.png" alt="" />
                    <p>Interaction Design</p>
                </div>
                <p>
                Lessons on design that cover the most recent developments.
                </p>
                <div className="end-crd ace">
                    <p>Learn More</p>
                    <MdKeyboardArrowRight />
                </div>
                
            </div>

            <div className="sev-rd ">
                <div className="p-1">
                    <img src="./src/assets/666.png" alt="" />
                    <p>UX Design Course</p>
                </div>
                <p>
                Classes in development that cover the most recent advancements in web.
                </p>
                <div className="end-crd">
                    <p>Learn More</p>
                    <MdKeyboardArrowRight />
                </div>
                
            </div>

            <div className="sev-rd ">
                <div className="p-1">
                    <img src="./src/assets/pic-3.png" alt="" />
                    <p>User Interface Design</p>
                </div>
                <p>
                User Interface Design courses that cover the most recent trends
                </p>
                <div className="end-crd">
                    <p>Learn More</p>
                    <MdKeyboardArrowRight />
                </div>
               
            </div>
           
        </div>
        
      </div>
    </>
  )
}

export default Services
