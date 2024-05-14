import React from 'react'
import "./Main.css"
const Main = () => {
  return (
    <>
{/* main page right side */} 

     <div className="main-landing-page padding-web-overall">
<div className="mainland-right-sec">
    <div className="main-top-txt">
 <h1>up your <span>skills</span> <br/> to <span>advance</span> <br/> your <span>career</span> path</h1>
 <p>Learn UI-UX Design skills with weekend UX . The latest online learning system and material that help your knowledge growing.</p>
    </div>
    <div className="main-center-btns">
<button >Get Started</button>
<button id='btn'>Get Free Trial</button>
    </div>
    <div className="main-last-logos">
<div className="img">
  <img src="./src/assets/speak.png" alt="" />
  <p>Public Speaking</p>
</div>
<div className="img">
  <img src="./src/assets/idea.svg" alt="" />
  <p>Creative Thinking</p>
</div>
<div className="img">
  <img src="./src/assets/briefcase.png" alt="" />
  <p>Career-Oriented</p>
</div>
    </div>
</div>

{/* main page left side */} 

<div className="main-land-left-sec">
    <div className="main-left-circle"></div>
    <img  id='imh' src="./src/assets/03.png" alt="" />
  <img id='imt' src="./src/assets/9.png" alt="" />
  <img  id='imp' src="./src/assets/88.png" alt="" />
    <div className="img-overlay">
       <img   src="./src/assets/student.svg" alt="" />
  </div>
  
</div>
     </div>
    </>
  )
}

export default Main
