import React from "react";
import GraphicalRepresentation from "../../component/Cards/GraphicalRepresentation/GraphicalRepresentation";
import Overview from "../../component/Cards/Overview/Overview";
import Courses from "../../component/Courses/Courses";
import DefaultNavbar from "../../component/DefaultNavbar/DefaultNavbar";
import EventLogs from "../../component/EventLogs/EventLogs";
import NewUsers from "../../component/NewUsers/NewUsers";
import OnlineUsers from "../../component/OnlineUsers/OnlineUsers";
import TrialPeriod from "../../component/TrialPeriod/TrialPeriod";
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <DefaultNavbar />
      <div className="dashboard__split-card">
        <GraphicalRepresentation />
        <Overview />
      </div>
      <div className="dashboard__lists">
        <div className="dashboard__lists__list">
          <NewUsers />
        </div>
        <div className="dashboard__lists__list">
          <Courses />
        </div>
        <div className="dashboard__lists__list">
          <EventLogs />
        </div>
        <div className="dashboard__lists__list">
          <TrialPeriod />
          <OnlineUsers />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
