import React from 'react'
import './footerLink.css'

const FooterLink = () => {
  return (
    <div id='footerLink'>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3">
            <a href="#"> <img src="./footer_logo.png" alt="footer_logo.png" /></a>
            <h4>Eleanor Pena</h4>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
          </div>
          <div className="col-lg-2">
            <h3>ABOUT US</h3>
            <ul>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>Mission & vision</a></li>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>our comapny</a></li>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>our projects</a></li>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>Our Team</a></li>
            </ul>
          </div>
          <div className="col-lg-2">
            <h3>DISCOVER</h3>
            <ul>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>Projects & Research</a></li>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>Clients Review</a></li>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>our projects</a></li>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>Our Team</a></li>
            </ul>
          </div>
          <div className="col-lg-3">
            <h3>USEFUL LINKS</h3>
            <ul>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>Contact Us</a></li>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>Terms & Conditions</a></li>
              <li><a href="#"><i class="fa-solid fa-angle-right"></i>Review</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterLink