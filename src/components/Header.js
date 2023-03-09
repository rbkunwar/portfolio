import React from 'react'

export const Header = () => {
  return (
    <>
    <header className="primary-header flex">
            <div className="logo flex">
                <div>
                    <h1>Rabindra</h1>
                </div>
                <div>
                    <h1 className="line">Web Developer</h1>
                </div>
                <div className="right">
                    <input type="checkbox" id="check" /> <label htmlFor="check" className="menu-icon"><i className="fa-solid fa-burger"></i></label>
                    <ul className="navigation flex">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="">Skills</a>
                        </li>
                        <li>
                            <a href="#projects">Projects</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>

                    </ul>
                </div>
            </div>
        </header></>
  )
}
export default Header
