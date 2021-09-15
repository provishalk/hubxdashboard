import React from 'react'
import { RiUserLine } from "react-icons/ri";
import { SEE_ALL } from '../../labels/buttons';
import UserProfilePic from "../../img/user-profile.PNG"
import "./NewUsers.scss";
const NewUsers = () => {
  return (
    <div className="bg-white new-user">
      <div className="new-user__header">
        <div className="new-user__header__logo"><RiUserLine /></div>
        <span className="new-user__header__title">New User</span>
        <button className="new-user__header__see-all-btn">{SEE_ALL}</button>
      </div>
      <div className="new-user__user">
        <div className="new-user__profile-pic-container">
          <img src={UserProfilePic} alt="user"></img>
        </div>
        <div className="new-user__user-name">
          <div>hubx</div>
          <div className="new-user__user-name__timing">24 minutes</div>
        </div>
      </div>
    </div>
  )
}

export default NewUsers
