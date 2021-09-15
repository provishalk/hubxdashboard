import React from "react";
import { IoHourglassOutline } from "react-icons/io5";
import { UPGRADE } from "../../labels/buttons";
import "./TrialPeriod.scss";
const TrialPeriod = () => {
  return (
    <div className="trial-period">
      <div className="trial-period__left-container">
        <h6>Trial period</h6>
        <div className="trial-period__timer">
        <h5>30</h5>
        <p>DAYS LEFT</p>
        </div>
      </div>
      <div className="trial-period__right-container">
        <div className="trial-period__right-container__logo">
          <IoHourglassOutline />
        </div>
        <div className="trial-period__btn-container">
          <button className="trial-period__upgrade-btn">{UPGRADE}</button>
        </div>
      </div>
    </div>
  );
};

export default TrialPeriod;
