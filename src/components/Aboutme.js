import React from 'react'

export const Aboutme = () => {
  return (
    <>
    <section className="section5 flex" id="about">
    <h1 className="title">About me</h1>
    <div className="about-container flex">
        <div className="left">
            <div className="bg"></div>
            <img src="assets/dad.avif" alt="" />
        </div>
        <div className="right flex">
            <h1>Rabindra babu kunwar</h1>
            <p>I grew up in Nepal and completed my bachelor in Australia as software Developer</p>
            <p>Sydney, Australia</p>
            <a href="">Connect with me</a>
            <div className="flex">
                <div className="tag">Interests</div>
                    <div>
                        <span>Coding</span>
                        <span>Football</span>
                        <span>Movies</span>
                        </div>
                    </div>
                </div>
            </div>

  </section>
    </>
  )
}
export default Aboutme