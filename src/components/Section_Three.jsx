import React from 'react'
import './section_three.css'
import Container from './Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Section_Three = () => {
    return (
        <div id='section_three'>
            <Container>
                <h2 className='fw-semibold text-black text-center'>Fresh Ideas for your business design.</h2>
                <p className='fw-light text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <Row>
                    <Col lg={4}>
                        <div className="speech_card d-flex">
                            <div className="speech_card_img">
                                <img src="./speech_card_one.png" alt="speech_card_one.png" />
                            </div>
                            <div className="speech_card_text">
                                <h3 className='fw-semibold text-black'>Eleanor Pena</h3>
                                <p className='fw-light'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="speech_card d-flex">
                            <div className="speech_card_img">
                                <img src="./speech_card_two.png" alt="speech_card_two.png" />
                            </div>
                            <div className="speech_card_text">
                                <h3 className='fw-semibold text-black'>Cody Fisher</h3>
                                <p className='fw-light'>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="speech_card d-flex">
                            <div className="speech_card_img">
                                <img src="./speech_card_three.png" alt="speech_card_three.png" />
                            </div>
                            <div className="speech_card_text">
                                <h3 className='fw-semibold text-black'>Leslie Alexander</h3>
                                <p className='fw-light'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Section_Three