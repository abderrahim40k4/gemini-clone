import React from 'react'
import './main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>gemini</p>
            <img src={assets.user_icon} alt="" srcset="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Abderrahim...</span></p>
                <p>How can I help you today ? </p>
            </div>
            <div className="cards">
            <div className="card">
                <p>do you need some help in writimg your code</p>
                <img src={assets.compass_icon} alt="" srcset="" />
            </div>
            <div className="card">
                <p>do you need some help in writimg your code</p>
                <img src={assets.code_icon} alt="" srcset="" />
            </div>
            <div className="card">
                <p>do you need some help in writimg your code</p>
                <img src={assets.message_icon} alt="" srcset="" />
            </div>
            <div className="card">
                <p>do you need some help in writimg your code</p>
                <img src={assets.bulb_icon} alt="" srcset="" />
            </div>
            </div>
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" name="" id="" placeholder='enter a prompet her'/>
                    <div>
                        <img src={assets.gallery_icon} alt="" srcset="" />
                        <img src={assets.mic_icon} alt="" srcset="" />
                        <img src={assets.send_icon} alt="" srcset="" />
                    </div>
                </div>
                <div className="bottom-info">
                    some thing here
                </div>
            </div>
        </div>

    </div>
  )
}

export default Main