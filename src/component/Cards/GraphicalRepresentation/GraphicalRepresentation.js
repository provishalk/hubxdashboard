import React from "react";
import { IoCalendarOutline } from "react-icons/io5";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  ACTIVE_LEARNERS,
  NEW_SIGNUP,
  PRODUCT_SALES,
  REVENUE,
} from "../../../labels/buttons";
import { LAST_7DAYS, LAST_MONTH, LAST_YEAR } from "../../../labels/options";
import { YOUR_SCHOOL } from "../../../utils/constants";
import "./GraphicalRepresentation.scss";

const data = [
  {
    date: "2021-02-03",
    user: 0,
  },
  {
    date: "2021-02-04",
    user: 0,
  },
  {
    date: "2021-02-05",
    user: 0,
  },
  {
    date: "2021-02-06",
    user: 0,
  },
  {
    date: "2021-02-07",
    user: 0,
  },
  {
    date: "2021-02-08",
    user: 0,
  },
  {
    date: "2021-02-09",
    user: 0,
  },
  {
    date: "",
    user: 1,
  },
];

const GraphicalRepresentation = () => {
  return (
    <div className="graphical-representation">
      <div className="graphical-representation__container__navbar">
        <div className="graphical-representation__container__navbar__brand">
          <div className="graphical-representation__container__navbar__brand__btn-logo">
            <IoCalendarOutline />
          </div>
          <label className="graphical-representation__container__navbar__brand__btn-label">
            {YOUR_SCHOOL}
          </label>
        </div>
        <div className="graphical-representation__container__navbar__list">
          <div className="graphical-representation__container__navbar__list__items">
            {NEW_SIGNUP}
          </div>
          <div className="graphical-representation__container__navbar__list__items">
            {REVENUE}
          </div>
          <div className="graphical-representation__container__navbar__list__items">
            {PRODUCT_SALES}
          </div>
          <div className="graphical-representation__container__navbar__list__items">
            {ACTIVE_LEARNERS}
          </div>
          <select>
            <option>{LAST_7DAYS}</option>
            <option>{LAST_MONTH}</option>
            <option>{LAST_YEAR}</option>
          </select>
        </div>
      </div>
      <div className="graphical-representation__graph">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={100} data={data}>
            <XAxis dataKey="date" tick={{ fontSize: "14px" }} />
            <YAxis allowDecimals={true} tick={{ fontSize: "14px" }} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey={"user"}
              stroke="#55CCC1"
              strokeWidth={2}
              fill="#82ca9d"
              dot={{ strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GraphicalRepresentation;
