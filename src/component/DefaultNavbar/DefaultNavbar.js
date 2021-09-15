import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { GrAdd } from "react-icons/gr";
import { AiOutlineEye } from "react-icons/ai";
import { BiPowerOff } from "react-icons/bi";
import { BsQuestion } from "react-icons/bs";
import {
  CREATE_COURSE,
  DASHBOARD,
  HELP,
  PREVIEW_AFTER_LOGIN,
  PREVIEW_HOME,
  VIEW_WELCOME_SCREEN,
} from "../../labels/buttons";
import "./DefaultNavbar.scss";

const DefaultNavbar = () => {
  return (
    <Navbar expand="lg" className="default-navbar">
      <Navbar.Brand href="#home" className="default-navbar__brand-name">
        {DASHBOARD}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className="d-flex">
            <div className="default-navbar__btn-logo">
              <GrAdd />
            </div>
            <label className="default-navbar__btn-label">{CREATE_COURSE}</label>
          </Nav.Link>
          <Nav.Link href="#previewHome" className="d-flex">
            <div className="default-navbar__btn-logo">
              <AiOutlineEye />
            </div>
            <label className="default-navbar__btn-label">{PREVIEW_HOME}</label>
          </Nav.Link>
          <Nav.Link href="#AfterLogin" className="d-flex">
            <div className="default-navbar__btn-logo">
              <AiOutlineEye />
            </div>
            <label className="default-navbar__btn-label">
              {PREVIEW_AFTER_LOGIN}
            </label>
          </Nav.Link>
          <Nav.Link href="#WelcomeScreen" className="d-flex">
            <div className="default-navbar__btn-logo">
              <BiPowerOff />
            </div>
            <label className="default-navbar__btn-label">
              {VIEW_WELCOME_SCREEN}
            </label>
          </Nav.Link>
        </Nav>
        <Nav.Link href="#home" className="d-flex">
          <div className="default-navbar__help-logo">
            <BsQuestion />
          </div>
          <label className="default-navbar__btn-label default-navbar__help">
            {HELP}
          </label>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default DefaultNavbar;