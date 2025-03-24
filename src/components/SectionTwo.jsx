import React from 'react'
import './sectionTwo.css'
import Container from './Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SectionTwo = () => {
    return (
        <div id='sectionTwo'>
            <Container>
                <Row>
                    <Col lg={6}>
                        <div className="sectionTwo_img position-relative">
                            <img src="./sectionTwo_img.png" alt="sectionTwo_img.png" />
                            <img src="./sectionTwo_img_float.png" className='sectionTwo_img_float position-absolute z-2' alt="sectionTwo_img_float.png" />
                        </div>
                    </Col>
                    <Col lg={{ span: 5, offset: 1 }}>
                        <div className="sectionTwo_text">
                            <span className='fw-medium text-black d-inline-block'>Digital Marketing Agency</span>
                            <h2 className='fw-semibold text-black'>Fresh Ideas for your business design.</h2>
                            <p className='fw-light'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <div className="subSection d-flex">
                                <div className="subSection_img"><img src="./subSection_img_one.png" alt="subSection_img_one.png" /></div>
                                <div className="subSection_text">
                                    <h3 className='fw-semibold text-black'>Garddy</h3>
                                    <p className='fw-light text-black'>Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum quod nulla, inventore numquam recusandae dolores minima omnis voluptas?</p>
                                </div>
                            </div>
                            <div className="subSection d-flex">
                                <div className="subSection_img"><img src="./subSection_img_two.png" alt="subSection_img_two.png" /></div>
                                <div className="subSection_text">
                                    <h3 className='fw-semibold text-black'>Herdric</h3>
                                    <p className='fw-light text-black'>Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum quod nulla, inventore numquam recusandae dolores minima omnis voluptas?</p>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SectionTwo