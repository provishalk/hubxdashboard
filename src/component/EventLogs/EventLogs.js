import React from "react";
import { IoIosPulse } from "react-icons/io";
import { GoKey } from "react-icons/go";
import { SEE_ALL } from "../../labels/buttons";
import { EVENT_LOG } from "../../utils/constants";
import "./EventLogs.scss";

const EventLogs = () => {
  return (
    <div className="bg-white event-logs">
      <div className="event-logs__header">
        <div className="event-logs__header__logo">
          <IoIosPulse />
        </div>
        <span className="event-logs__header__title">{EVENT_LOG}</span>
        <button className="event-logs__header__see-all-btn">{SEE_ALL}</button>
      </div>
      <div className="event-logs__items">
        <div className="event-logs__items_item">
          <div>
            <GoKey />
          </div>
          <div className="event-logs__items_item__user">
            <p>hubx</p>
            <p>Logged in</p>
            <p>more info</p>
          </div>
        </div>
        <div className="event-logs__items_item__time">
          <p>22 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default EventLogs;
