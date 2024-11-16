import React from 'react'
import './banner.css'

const Banner = () => {
  return (
    <div id='banner'>
      <div className="container">
      <div className="row justify-content-between">
            <div className="col-lg-7">
                <div className="ban_text">
                    <span>Digital Marketing Agency</span>
                    <h1>Advanced analytics to grow your business</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    <a href="#" className='ban_btn_one'>Get Started<i class="fa-solid fa-arrow-right"></i></a>
                    <a href="#" className='ban_btn_two'>How it works<i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="ban_img">
                <img src="./ban_img.png" alt="ban_img.png" />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner