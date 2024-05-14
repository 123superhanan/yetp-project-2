import React from 'react'
import "./Tutor.css"
import { GrInstagram } from "react-icons/gr";
import { TiSocialTwitter } from "react-icons/ti";

const Tutor = () => {
  return (
    <>
      <div className="totur-sec padding-web-overall">
        <div className="totur-sec-txt">
                <p className='p-p'>Tutors</p>
                <h1>Meet the Heroes</h1>
                <p className='grey'>On Weekend UX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.</p>
                </div>

              {/* card side  */}

              <div className="totur-sec-card">
                <div className="totur-card">
                  <img src="./src/assets/t-1.png" alt="" />
                  <p className='black'>Theresa Webb</p>
                  <p className='green' >Application Support Analyst Lead</p>
                  <p className='p-set'>Former co-founder of Opendoor. Early staff at Spotify and Clearbit.</p>
                  <div className="icons">
                  <GrInstagram />
                  <TiSocialTwitter />
                  </div>
                </div>

                <div className="totur-card">
                  <img src="./src/assets/t-2.png" alt="" />
                  <p className='black'>Courtney Henry</p>
                  <p className='green' >Director, Undergraduate Analytics and Planning</p>
                  <p className='p-set'>Lead engineering teams at Figma, Pitch, and Protocol Labs.</p>
                  <div className="icons">
                  <GrInstagram />
                  <TiSocialTwitter />
                  </div>
                </div>

                <div className="totur-card">
                  <img src="./src/assets/t-3.png" alt="" />
                  <p className='black'>Albert Flores</p>
                  <p className='green' >Career Educator</p>
                  <p className='p-set'>Former PM for Linear, Lambda School, and On Deck.</p>
                  <div className="icons">
                  <GrInstagram />
                  <TiSocialTwitter />
                  </div>
                </div>
                <div className="totur-card">
                  <img src="./src/assets/t-4.png" alt="" />
                  <p className='black'>Marvin McKinney</p>
                  <p className='green' >Co-op & Internships Program & Operations Manager</p>
                  <p className='p-set'>Former frontend dev for Linear, Coinbase, and Postscript.</p>
                  <div className="icons">
                  <GrInstagram />
                  <TiSocialTwitter />
                  </div>
                </div>

              </div>




      </div>
    </>
  )
}

export default Tutor
