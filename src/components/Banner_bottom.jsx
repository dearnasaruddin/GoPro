import React from 'react'
import './banner_bottom.css'
import Container from './Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Banner_bottom = () => {
    return (
        <div id='banner_bottom'>
            <Container>
                <Row className="ban_bottom_img flex-wrap justify-content-around">
                    <Col lg={3}><img src="./ban_bottom_one.png" alt="ban_bottom_one.png" /></Col>
                    <Col lg={3}><img src="./ban_bottom_two.png" alt="ban_bottom_two.png" /></Col>
                    <Col lg={3}><img src="./ban_bottom_three.png" alt="ban_bottom_three.png" /></Col>
                    <Col lg={3}><img src="./ban_bottom_four.png" alt="ban_bottom_four.png" /></Col>


                    <Col lg={3}><img src="./ban_bottom_five.png" alt="ban_bottom_five.png" /></Col>
                    <Col lg={3}><img src="./ban_bottom_six.png" alt="ban_bottom_six.png" /></Col>
                    <Col lg={3}><img src="./ban_bottom_seven.png" alt="ban_bottom_seven.png" /></Col>
                    <Col lg={10} className="border-bottom"></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Banner_bottom