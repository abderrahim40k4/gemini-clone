import React, { useState } from 'react'
import "./sidebar.css"
import {assets} from "../../assets/assets"

const SideBar = () => {

    const [extanded,setextanded] = useState(false)
  return (
    <div className='sideBare'>
        <div className='top'>
            <img className='menu' onClick={()=>setextanded(perv => !perv)} src={assets.menu_icon} alt="" srcset="" />
            <div className='new-chat'>
                <img src={assets.plus_icon} alt="" srcset="" />
                {extanded?<p>New Chat</p>:null}
            </div>
            {extanded?
            <div className="recent">
                <p className="recent-title">Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon} alt="" srcset="" />
                    <p>What is React</p>
                </div>
            </div>:null}
        </div>
        <div className='bottom'>
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" srcset="" />
                {extanded?<p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" srcset="" />
                {extanded?<p>Activity</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" srcset="" />
                {extanded?<p>Setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default SideBar