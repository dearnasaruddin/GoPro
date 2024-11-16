import React from 'react'
import './banner_bottom.css'

const Banner_bottom = () => {
    return (
        <div id='banner_bottom'>
            <div className="container">
                <div className="row ban_bottom_img flex-wrap justify-content-around">
                    <div className="col-lg-3"><img src="./ban_bottom_one.png" alt="ban_bottom_one.png" /></div>
                    <div className="col-lg-3"><img src="./ban_bottom_two.png" alt="ban_bottom_two.png" /></div>
                    <div className="col-lg-3"><img src="./ban_bottom_three.png" alt="ban_bottom_three.png" /></div>
                    <div className="col-lg-3"><img src="./ban_bottom_four.png" alt="ban_bottom_four.png" /></div>

                    {/* </div> */}
                    {/* <div className="row justify-content-around"> */}
                    <div className="col-lg-3"><img src="./ban_bottom_five.png" alt="ban_bottom_five.png" /></div>
                    <div className="col-lg-3"><img src="./ban_bottom_six.png" alt="ban_bottom_six.png" /></div>
                    <div className="col-lg-3"><img src="./ban_bottom_seven.png" alt="ban_bottom_seven.png" /></div>
                    <div className="col-lg-10 border-bottom"></div>
                </div>
            </div>
        </div>
    )
}

export default Banner_bottom