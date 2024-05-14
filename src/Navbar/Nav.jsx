import React from 'react'
import "./Nav.css"
const Nav = () => {


  return (
    <>
      

    <div className="nav-bar-section padding-web-overall">
        <img src="./src/assets/image 2.png" alt="" />

        <div className="nav-bar-sec-placeholder">
            <div className="nav-bar-sec">
                <img src="./src/assets/icon.png" alt="" />
            <input type="text" placeholder='Want to learn?' />
            </div>
            {/*<label for="explore">explore</label>*/}
            <div className="select">
            <span>explore</span>
                        <select name="explore" id="explore">
                            <option value="volvo"></option>
                            <option value="saab"> Web Design</option>
                            <option value="opel">web developnment</option>
                            <option value="audi">OOPS</option>
                        </select>
                        </div>

                        
        </div>

        <div className="nav-bar-list">
                            <ul>
                                <li><a href="#" id='active'>Home</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Courses</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQ's</a></li>
                            </ul>

                        </div>

                        <div className="nab-bar-last">
<p>Sign In</p>
<button>create free account</button>
                        </div>
    </div>




    </>
  )
}

export default Nav
