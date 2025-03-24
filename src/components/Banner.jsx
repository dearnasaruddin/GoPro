import React from 'react'
import './banner.css'
import Container from './Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Banner = () => {
  return (
    <section className='banner'>
      <Container>
        <Row className="justify-content-between">
          <Col lg={7}>
            <div className="ban_text">
              <span className='fw-medium text-light'>Digital Marketing Agency</span>
              <h1 className='fw-semibold text-black'>Advanced analytics to grow your business</h1>
              <p className='fw-light'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              <a href="#" className='ban_btn_one fw-medium text-white bg-dark'>Get Started<i class="fa-solid fa-arrow-right"></i></a>
              <a href="#" className='ban_btn_two fw-medium text-black'>How it works<i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </Col>
          <Col lg={5}>
            <div className="ban_img">
              <img src="./ban_img.png" alt="ban_img.png" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner