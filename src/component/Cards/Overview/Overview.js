import React from "react";
import { RiUserLine } from "react-icons/ri";
import {
  HiOutlineRefresh,
  HiOutlineShoppingBag,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { GiAlarmClock } from "react-icons/gi";
import { VscTag } from "react-icons/vsc";

import "./Overview.scss";
import OverViewCard from "./OverviewCard/OverViewCard";

const Overview = () => {
  return (
    <div className="overview">
      <OverViewCard count={1} tag={"All users"}>
        <RiUserLine />
      </OverViewCard>
      <OverViewCard count={0} tag={"Conversions"} unit={"%"}>
        <HiOutlineRefresh />
      </OverViewCard>
      <OverViewCard count={0} tag={"30 days sales"}>
        <HiOutlineShoppingBag />
      </OverViewCard>
      <OverViewCard count={0} tag={"Avg time"} unit={"min"}>
        <GiAlarmClock />
      </OverViewCard>
      <OverViewCard count={0} tag={"Courses"}>
        <HiOutlineClipboardList />
      </OverViewCard>
      <OverViewCard count={0} tag={"Course categories"}>
        <VscTag />
      </OverViewCard>
    </div>
  );
};

export default Overview;
