import React from 'react'
import './sectionTwo.css'

const SectionTwo = () => {
    return (
        <div id='sectionTwo'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="sectionTwo_img">
                            <img src="./sectionTwo_img.png" alt="sectionTwo_img.png" />
                            <img src="./sectionTwo_img_float.png" className='sectionTwo_img_float' alt="sectionTwo_img_float.png" />
                        </div>
                    </div>
                    <div className="col-lg-5 offset-lg-1">
                        <div className="sectionTwo_text">
                            <span>Digital Marketing Agency</span>
                            <h2>Fresh Ideas for your business design.</h2>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                            <div className="subSection wrapper">
                               <div className="subSection_img"><img src="./subSection_img_one.png" alt="subSection_img_one.png" /></div>
                               <div className="subSection_text">
                                <h3>Garddy</h3>
                                <p>Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum quod nulla, inventore numquam recusandae dolores minima omnis voluptas?</p>
                               </div>
                            </div>
                            <div className="subSection wrapper">
                               <div className="subSection_img"><img src="./subSection_img_two.png" alt="subSection_img_two.png" /></div>
                               <div className="subSection_text">
                                <h3>Herdric</h3>
                                <p>Dicta maiores architecto rerum optio fugit iste tenetur fuga debitis sit quis sunt atque itaque, reiciendis sapiente porro ipsa, laborum quod nulla, inventore numquam recusandae dolores minima omnis voluptas?</p>
                               </div>
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo