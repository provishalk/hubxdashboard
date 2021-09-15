import React from "react";
import { GiBookmark } from "react-icons/gi";
import { SEE_ALL } from "../../labels/buttons";
import { BsDot } from "react-icons/bs";
import "./Courses.scss";

const COURSE_LIST = [
  {
    _id: 1,
    name: "Blended Learning: What it is, Why it matters & How to Apply",
    time: "7 days ago",
  },
  {
    _id: 2,
    name: "Join the Course Sales Bootcamp [Free Live Workshops]",
    time: "12 days ago",
  },

  {
    _id: 3,
    name: "12 Steps to Creating Awesome Live Classes in 2021",
    time: "20 days ago",
  },
  {
    _id: 4,
    name: "Guy Kawasaki on the Future of Business in the Midst of a Pandemic",
    time: "22 days ago",
  },
  {
    _id: 5,
    name: "What is Educational Marketing & How to Use it to Grow with Examples",
    time: "23 days ago",
  },
];

const Courses = () => {
  return (
    <div className="bg-white courses">
      <div className="courses__header">
        <div className="courses__header__logo">
          <GiBookmark />
        </div>
        <span className="courses__header__title">How to sell courses blog</span>
        <button className="courses__header__see-all-btn">{SEE_ALL}</button>
      </div>
      {COURSE_LIST.map((course) => (
        <div className="courses__course-list" key={course._id}>
          <div className="courses__course-title">
            <BsDot />
            <p>{course.name}</p>
          </div>
          <div className="courses__timing">
            <p>{course.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;
