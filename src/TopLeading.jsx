import React from 'react'
import './topLeading.css'

const TopLeading = () => {
    return (
        <div id='topLeading'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="topLeading_text">
                            <span>Top Leading Company</span>
                            <h2>Fresh Ideas for your business design, Top digital marketing service company</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                            <div className="wrapper">
                                <div className="topLeading_text_card">
                                    <div className="wrapper">
                                        <div className="topleading_text_card_img"><img src="./topleading_text_card_img_one.png" alt="topleading_text_card_img_one.png" /></div>
                                        <div className="topleading_text_card_heading"><h4>Guy Hawkins</h4></div>
                                    </div>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                                </div>
                                <div className="topLeading_text_card">
                                    <div className="wrapper">
                                        <div className="topleading_text_card_img"><img src="./topleading_text_card_img_two.png" alt="topleading_text_card_img_two.png" /></div>
                                        <div className="topleading_text_card_heading"><h4>Darlene Robertson</h4></div>
                                    </div>
                                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="topLeading_img">
                            <img src="./topLeading.png" alt="topLeading.png" />
                            <img src="./topLeading_float.png" className='topLeading_float' alt="topLeading_float.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopLeading