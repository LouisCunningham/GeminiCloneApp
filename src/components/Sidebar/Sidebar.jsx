import {React, useContext, useState} from 'react';
import './Sidebar.css';
import {assets}  from '../../assets/assets';
import { Context } from '../../context/Context';

const Sidebar = () => {

  // Collapsing the sidebar
  const [extended,setExtended] = useState(false);
  const {onSent, prevPrompts,setRecentPrompt, newChat} = useContext(Context)


  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }





  return (
    <div className='sidebar'>
      
      <div className="top">{/* Top of sidebar start */}
        {/* Menu icon */}
        <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="menu logo" />
        {/* New chat icon */}
        <div onClick={()=>newChat()} className="new-chat">
          <img src={assets.plus_icon} alt=" new chat icon" />
          {extended?<p>New Chat</p> : null}
        </div>
        
        {/* Recent Conversations Title */}
       {extended ?  <div className="recent">
          <p className="recent-title">Recent: </p>
          {prevPrompts.map((item,index)=> {
              return (
<div onClick={()=>loadPrompt(item)} className="recent-entry">
          <img src={assets.message_icon} alt="recent chats" />
          <p>{item.slice(0,18)} ...</p>
        </div>
              )
          })}
        
        </div> : null}

      </div>{/* Top of sidebar end */}
      

      
      <div className="bottom">{/* Bottom of sidebar start */}
        {/* Questions tab */}
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question icon" />
          {extended ? <p>Help</p> : null}
        </div>
        {/* Activity tab */}
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="question icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        {/* Settings tab */}
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="question icon" />
          {extended ? <p>Settings</p> : null}
        </div>

      </div>{/* Bottom of sidebar end */}
      
    </div>
  )
}

export default Sidebar