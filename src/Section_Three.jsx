import React from 'react'
import './section_three.css'

const Section_Three = () => {
    return (
        <div id='section_three'>
            <div className="container">
                <h2>Fresh Ideas for your business design.</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="speech_card wrapper">
                            <div className="speech_card_img">
                            <img src="./speech_card_one.png" alt="speech_card_one.png" />
                            </div>
                            <div className="speech_card_text">
                                <h3>Eleanor Pena</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="speech_card wrapper">
                            <div className="speech_card_img">
                            <img src="./speech_card_two.png" alt="speech_card_two.png" />
                            </div>
                            <div className="speech_card_text">
                                <h3>Cody Fisher</h3>
                                <p>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="speech_card wrapper">
                            <div className="speech_card_img">
                            <img src="./speech_card_three.png" alt="speech_card_three.png" />
                            </div>
                            <div className="speech_card_text">
                                <h3>Leslie Alexander</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section_Three