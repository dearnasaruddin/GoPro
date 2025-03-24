import React from 'react'
import './footerLink.css'
import Container from './Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const FooterLink = () => {
  return (
    <div id='footerLink'>
      <Container>
        <Row className="justify-content-between">
          <Col lg={3}>
            <a href="#"> <img src="./footer_logo.png" alt="footer_logo.png" /></a>
            <h4 className='fw-semibold text-black'>Eleanor Pena</h4>
            <p className='fw-light'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
          </Col>
          <Col lg={2}>
            <h3 className='fw-semibold text-black'>ABOUT US</h3>
            <ul>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>Mission & vision</li>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>our comapny</li>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>our projects</li>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>Our Team</li>
            </ul>
          </Col>
          <Col lg={2}>
            <h3 className='fw-semibold text-black'>DISCOVER</h3>
            <ul>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>Projects & Research</li>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>Clients Review</li>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>our projects</li>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>Our Team</li>
            </ul>
          </Col>
          <Col lg={3}>
            <h3 className='fw-semibold text-black'>USEFUL LINKS</h3>
            <ul>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>Contact Us</li>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>Terms & Conditions</li>
              <li className='fw-semibold text-capitalize'><i class="fa-solid fa-angle-right"></i>Review</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default FooterLink