import React from 'react'
import { RiUserLine } from "react-icons/ri";
import { SEE_ALL } from '../../labels/buttons';
import UserProfilePic from "../../img/user-profile.PNG"
import "./OnlineUsers.scss"
const OnlineUsers = () => {
  return (
    <div className="bg-white online-users">
      <div className="online-users__header">
        <div className="online-users__header__logo">
          <RiUserLine />
        </div>
        <span className="online-users__header__title">Online users (1)</span>
        <button className="online-users__header__see-all-btn">{SEE_ALL}</button>
      </div>
      <div className="online-users__user">
        <div className="online-users__profile-pic-container">
          <img src={UserProfilePic} alt="user"></img>
        </div>
        <div className="online-users__user-name">
          <div>hubx</div>
        </div>
        <button className="online-users__contact-btn">contact</button>
      </div>
    </div>
  )
}

export default OnlineUsers
