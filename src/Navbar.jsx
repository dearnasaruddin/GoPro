import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className="wrapper align-items-center justify-content-between">
                <div className="nav_img">
                    <img src="./logo.png" alt="logo.png" />
                </div>
             
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Pages</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
         
                <div className="nav_btn_main">
                    <a href="#" className="nav_btn">Get Started<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar