import React from 'react'
import user from "../assets/rab.jpeg"
import resume from "../assets/IT-Resume.pages.pdf"

export const Hero = () => {
  return (
    <>
    <section className="section1 grid">
  <div className="left flex">
    <img src={user} alt="profile pic" />
  </div>
  <div className="right flex">
    <div className="flex">
    </div>
    <div>
        <h2 className="name">Rabindra</h2>
        <p className="tag">Web Developer</p>
    </div>
    <button>
        <a href={resume} download={true}>Download CV <span><i className="fa-solid fa-download"></i></span></a>
    </button>
  </div>
  </section>
  <section className="section2">
<div className="info-container flex">
    <div className="info-lists flex">
<div className="info-content flex">
    <div className="icon-container flex">
        <i className="fa-solid fa-award"></i>
    </div>
    <span>
        <h5>IT</h5>
        <p>Graduate</p>
    </span>
</div>
<div className="info-divider"></div>

<div className="info-content flex">
    <div className="icon-container flex">
        <i className="fa-solid fa-award"></i>
    </div>
    <span>
        <h5>5+ Projects
        </h5>
        <p>Completed</p>
    </span>
    
</div>
<div className="info-divider"></div>
   
<div className="info-content flex">
    <div className="icon-container flex">
        <i className="fa-solid fa-award"></i>
    </div>
    <span>
        <h5>CCNA </h5>
        <p>Certified</p>
    </span>
</div>

</div>
</div>
  </section>
  </>
  )
}
export default Hero
