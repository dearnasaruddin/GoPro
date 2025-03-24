import React from 'react'
import './navbar.css'
import Container from './Container'

const Navbar = () => {
    return (
        <nav>
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="nav_img">
                        <img src="./logo.png" alt="logo.png" />
                    </div>

                    <ul className='d-flex justify-content-center align-items-center'>
                        <li className='fw-medium text-black'>Home</li>
                        <li className='fw-medium text-black'>About</li>
                        <li className='fw-medium text-black'>Company</li>
                        <li className='fw-medium text-black'>Pages</li>
                        <li className='fw-medium text-black'>Blog</li>
                        <li className='fw-medium text-black'>Shop</li>
                    </ul>

                    <div className="nav_btn_main">
                        <a href="#" className="nav_btn fw-medium text-black">Get Started<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </Container>
        </nav >
    )
}

export default Navbar