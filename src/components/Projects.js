import React from 'react'

export const Projects = () => {
  return (
    <>
    <section className="section4 flex" id="projects">
    <h1 className="title">My Recent Work</h1>
    <div className="project-container grid">
        <div className="project-card flex">
            <div className="top">
                <img src="assets/mom.avif" alt="" />
            </div>
            <div className="bottom">
                <p>Dec 15, 2022</p>
                <p>Full-stack web application built using React and firebase</p>
            </div>
        </div>
        <div className="project-card flex">
            <div className="top">
                <img src="assets/dad.avif" alt="" />
            </div> 
            <div className="bottom">
                <p>Dec 15, 2022</p>
                <p>Full-stack web application built using React and firebase</p>
            </div>
        </div>
        <div className="project-card flex">
            <div className="top">
                <img src="assets/rab.avif" alt="" />
            </div>
            <div className="bottom">
                <p>Dec 15, 2022</p>
                <p>Full-stack web application built using React and firebase</p>
            </div>
        </div>
    </div>
  </section>
    </>
  )
}
export default Projects
