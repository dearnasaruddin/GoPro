import React from 'react'
import './topLeading.css'
import Container from './Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const TopLeading = () => {
    return (
        <div id='topLeading'>
            <Container>
                <Row>
                    <Col lg={7}>
                        <div className="topLeading_text">
                            <span className='d-inline-block text-black fw-medium'>Top Leading Company</span>
                            <h2 className='fw-semibold text-black'>Fresh Ideas for your business design, Top digital marketing service company</h2>
                            <p className='fw-light'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div className="colGap d-flex">
                                <div className="topLeading_text_card">
                                    <div className="colGap d-flex align-items-center">
                                        <div className="topleading_text_card_img"><img src="./topleading_text_card_img_one.png" alt="topleading_text_card_img_one.png" /></div>
                                        <div className="topleading_text_card_heading"><h4 className='fw-medium text-black'>Guy Hawkins</h4></div>
                                    </div>
                                    <p className='fw-light'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                                </div>
                                <div className="topLeading_text_card">
                                    <div className="colGap d-flex align-items-center">
                                        <div className="topleading_text_card_img"><img src="./topleading_text_card_img_two.png" alt="topleading_text_card_img_two.png" /></div>
                                        <div className="topleading_text_card_heading"><h4 className='fw-medium text-black'>Darlene Robertson</h4></div>
                                    </div>
                                    <p className='fw-light'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="topLeading_img position-relative">
                            <img src="./topLeading.png" alt="topLeading.png" />
                            <img src="./topLeading_float.png" className='topLeading_float position-absolute' alt="topLeading_float.png" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TopLeading