import React from 'react'
import "./Programs.css"
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdStar } from "react-icons/io";
const Programs = () => {
  return (
    <>
      <div className="prog-sec padding-web-overall">
        <p className='p-p'>Explore Programs</p>
        <h1>Our Most Popular Class</h1>
        <p id='t-t' >Let's join our famous class, the knowledge provided will definitely be useful for you.</p>
      </div>

{/*parts for cards*/}

<div className="prog-sec-card  padding-web-overall">
    
    <div className="prog-img">
    <img src="./src/assets/prog-1.png" alt="" />
    
   
        <p className='p-p' >Design</p>
         <div className="prog-1">
          <h2>Figma UI UX Design..</h2>
         <FiArrowUpRight />
         </div>
         <p>Use Figma to get a job in UI Design, User Interface, User Experience design.</p>


         <div className="prog-2">
                <span>4:3</span>
                <div className="icon">
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                <span>(10,5670)</span>
         </div>


    <div className="prog-end">
    
        <div className="id-box">
        <img src="./src/assets/Avatar1.png" alt="" />
        <div className="id-box-txt">
          <p>Jane Cooper</p>
          <p>2001 Enrolled</p>
        </div>
       
        </div>
        <span className='p-p'>$17.04</span>
    </div>
    </div>



    <div className="prog-img">
    <img src="./src/assets/vodl.png" alt="" />
    
   
        <p className='p-p' >Design</p>
         <div className="prog-1">
          <h2>Learn With Shoaib</h2>
         <FiArrowUpRight />
         </div>
         <p>Design Web Sites and Mobile Apps that Your Users Love and Return to Again..</p>


         <div className="prog-2">
                <span>3:3</span>
                <div className="icon">
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                <span>(65,670)</span>
         </div>


    <div className="prog-end">
    
        <div className="id-box">
        <img src="./src/assets/a-2.png" alt="" />
        <div className="id-box-txt">
          <p>Jenny Wilson</p>
          <p>2001 Enrolled</p>
        </div>
       
        </div>
        <span className='p-p'>$14.00</span>
    </div>
    </div>



    <div className="prog-img">
    <img src="./src/assets/volvo.png" alt="" />
    
   
        <p className='p-p' >Design</p>
         <div className="prog-1">
          <h2>Building User Interface..</h2>
         <FiArrowUpRight />
         </div>
         <p>Learn how to apply User Experience (UX) principles to your website designs.</p>


         <div className="prog-2">
                <span>2:3</span>
                <div className="icon">
                <IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></div>
                <span>(5670)</span>
         </div>


    <div className="prog-end">
    
        <div className="id-box">
        <img src="./src/assets/5.png" alt="" />
        <div className="id-box-txt">
          <p>Esther Howard</p>
          <p>2001 Enrolled</p>
        </div>
       
        </div>
        <span className='p-p'>$13.00</span>
    </div>
    </div>

    
</div>
<div className="btuuon">
            <button>Explore All Program</button>
            </div>
    </>
  )
}

export default Programs
