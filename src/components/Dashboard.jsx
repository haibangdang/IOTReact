import React, { Component } from "react";
import { Link, useParams } from "react-router-dom";

const Dashboard = (props) => {
  // const { deviceId } = useParams();
  // const {a, b ,c} = this.props.match.params

  return (
    <body>
      <div className="theme-loader">
        <div className="ball-scale">
          <div className="contain">
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
            <div className="ring">
              <div className="frame" />
            </div>
          </div>
        </div>
      </div>
      <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box" />
        <div className="pcoded-container navbar-wrapper">
          <nav className="navbar header-navbar pcoded-header">
            <div className="navbar-wrapper">
              <div className="navbar-logo">
                <a className="mobile-menu" id="mobile-collapse" href="#!">
                  <i className="feather icon-menu" />
                </a>
                <a href="/">
                  <img
                    className="img-fluid"
                    src="images\logo.png'"
                    alt="Theme-Logo"
                    width="50px"
                    height="50px"
                  />
                </a>
                <a className="mobile-options">
                  <i className="feather icon-more-horizontal" />
                </a>
              </div>
              <div className="navbar-container container-fluid">
                <ul className="nav-left">
                  <li className="header-search">
                    <div className="main-search morphsearch-search">
                      <div className="input-group">
                        <span className="input-group-addon search-close">
                          <i className="feather icon-x" />
                        </span>
                        <input type="text" className="form-control" />
                        <span className="input-group-addon search-btn">
                          <i className="feather icon-search" />
                        </span>
                      </div>
                    </div>
                  </li>
                  <li>
                    <a href="#!" onclick="javascript:toggleFullScreen()">
                      <i className="feather icon-maximize full-screen" />
                    </a>
                  </li>
                </ul>
                <ul className="nav-right">
                  <li className="header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="dropdown-toggle" data-toggle="dropdown">
                        <i className="feather icon-bell" />
                        <span className="badge bg-c-pink">5</span>
                      </div>
                      <ul
                        className="show-notification notification-view dropdown-menu"
                        data-dropdown-in="fadeIn"
                        data-dropdown-out="fadeOut"
                      >
                        <li>
                          <h6>Notifications</h6>
                          <label className="label label-danger">New</label>
                        </li>
                        <li>
                          <div className="media">
                            <img
                              className="d-flex align-self-center img-radius"
                              src="libraries\assets\images\avatar-4.jpg"
                              alt="Generic placeholder image"
                            />
                            <div className="media-body">
                              <h5 className="notification-user">John Doe</h5>
                              <p className="notification-msg">
                                Lorem ipsum dolor sit amet, consectetuer elit.
                              </p>
                              <span className="notification-time">
                                30 minutes ago
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img
                              className="d-flex align-self-center img-radius"
                              src="libraries\assets\images\avatar-3.jpg"
                              alt="Generic placeholder image"
                            />
                            <div className="media-body">
                              <h5 className="notification-user">
                                Joseph William
                              </h5>
                              <p className="notification-msg">
                                Lorem ipsum dolor sit amet, consectetuer elit.
                              </p>
                              <span className="notification-time">
                                30 minutes ago
                              </span>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="media">
                            <img
                              className="d-flex align-self-center img-radius"
                              src="libraries\assets\images\avatar-4.jpg"
                              alt="Generic placeholder image"
                            />
                            <div className="media-body">
                              <h5 className="notification-user">
                                Sara Soudein
                              </h5>
                              <p className="notification-msg">
                                Lorem ipsum dolor sit amet, consectetuer elit.
                              </p>
                              <span className="notification-time">
                                30 minutes ago
                              </span>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-globe" />
                        <span className="badge bg-simple-c-blue">En</span>
                      </div>
                    </div>
                  </li>
                  <li className="user-profile header-notification">
                    <div className="dropdown-primary dropdown">
                      <div className="dropdown-toggle" data-toggle="dropdown">
                        <img
                          src="libraries\assets\images\avatar-4.jpg"
                          className="img-radius"
                          alt="User-Profile-Image"
                        />
                        <span>John Doe</span>
                        <i className="feather icon-chevron-down" />
                      </div>
                      <ul
                        className="show-notification profile-notification dropdown-menu"
                        data-dropdown-in="fadeIn"
                        data-dropdown-out="fadeOut"
                      >
                        <li>
                          <a href="#!">
                            <i className="feather icon-settings" /> Settings
                          </a>
                        </li>
                        <li>
                          <a href="/user-profile">
                            <i className="feather icon-user" /> Profile
                          </a>
                        </li>
                        <li>
                          <a href="email-inbox.htm">
                            <i className="feather icon-mail" /> My Messages
                          </a>
                        </li>
                        <li>
                          <a href="auth-normal-sign-in.htm">
                            <i className="feather icon-log-out" /> Logout
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div id="sidebar" className="users p-chat-user showChat">
            <div className="had-container">
              <div className="card card_main p-fixed users-main">
                <div className="user-box">
                  <div className="chat-inner-header">
                    <div className="back_chatBox">
                      <div className="right-icon-control">
                        <input
                          type="text"
                          className="form-control  search-text"
                          placeholder="Search Friend"
                          id="search-friends"
                        />
                        <div className="form-icon">
                          <i className="icofont icofont-search" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="main-friend-list">
                    <div
                      className="media userlist-box"
                      data-id={1}
                      data-status="online"
                      data-username="Josephin Doe"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Josephin Doe"
                    >
                      <a className="media-left" href="#!">
                        <img
                          className="media-object img-radius img-radius"
                          src="libraries\assets\images\avatar-3.jpg"
                          alt="Generic placeholder image "
                        />
                        <div className="live-status bg-success" />
                      </a>
                      <div className="media-body">
                        <div className="f-13 chat-header">Josephin Doe</div>
                      </div>
                    </div>
                    <div
                      className="media userlist-box"
                      data-id={2}
                      data-status="online"
                      data-username="Lary Doe"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Lary Doe"
                    >
                      <a className="media-left" href="#!">
                        <img
                          className="media-object img-radius"
                          src="libraries\assets\images\avatar-2.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="live-status bg-success" />
                      </a>
                      <div className="media-body">
                        <div className="f-13 chat-header">Lary Doe</div>
                      </div>
                    </div>
                    <div
                      className="media userlist-box"
                      data-id={3}
                      data-status="online"
                      data-username="Alice"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Alice"
                    >
                      <a className="media-left" href="#!">
                        <img
                          className="media-object img-radius"
                          src="libraries\assets\images\avatar-4.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="live-status bg-success" />
                      </a>
                      <div className="media-body">
                        <div className="f-13 chat-header">Alice</div>
                      </div>
                    </div>
                    <div
                      className="media userlist-box"
                      data-id={4}
                      data-status="online"
                      data-username="Alia"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Alia"
                    >
                      <a className="media-left" href="#!">
                        <img
                          className="media-object img-radius"
                          src="libraries\assets\images\avatar-3.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="live-status bg-success" />
                      </a>
                      <div className="media-body">
                        <div className="f-13 chat-header">Alia</div>
                      </div>
                    </div>
                    <div
                      className="media userlist-box"
                      data-id={5}
                      data-status="online"
                      data-username="Suzen"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Suzen"
                    >
                      <a className="media-left" href="#!">
                        <img
                          className="media-object img-radius"
                          src="libraries\assets\images\avatar-2.jpg"
                          alt="Generic placeholder image"
                        />
                        <div className="live-status bg-success" />
                      </a>
                      <div className="media-body">
                        <div className="f-13 chat-header">Suzen</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showChat_inner">
            <div className="media chat-inner-header">
              <a className="back_chatBox">
                <i className="feather icon-chevron-left" /> Josephin Doe
              </a>
            </div>
            <div className="media chat-messages">
              <a className="media-left photo-table" href="#!">
                <img
                  className="media-object img-radius img-radius m-t-5"
                  src="libraries\assets\images\avatar-3.jpg"
                  alt="Generic placeholder image"
                />
              </a>
              <div className="media-body chat-menu-content">
                <div className>
                  <p className="chat-cont">
                    I'm just looking around. Will you tell me something about
                    yourself?
                  </p>
                  <p className="chat-time">8:20 a.m.</p>
                </div>
              </div>
            </div>
            <div className="media chat-messages">
              <div className="media-body chat-menu-reply">
                <div className>
                  <p className="chat-cont">
                    I'm just looking around. Will you tell me something about
                    yourself?
                  </p>
                  <p className="chat-time">8:20 a.m.</p>
                </div>
              </div>
              <div className="media-right photo-table">
                <a href="#!">
                  <img
                    className="media-object img-radius img-radius m-t-5"
                    src="libraries\assets\images\avatar-4.jpg"
                    alt="Generic placeholder image"
                  />
                </a>
              </div>
            </div>
            <div className="chat-reply-box p-b-20">
              <div className="right-icon-control">
                <input
                  type="text"
                  className="form-control search-text"
                  placeholder="Share Your Thoughts"
                />
                <div className="form-icon">
                  <i className="feather icon-navigation" />
                </div>
              </div>
            </div>
          </div>
          <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <nav className="pcoded-navbar">
                <div className="pcoded-inner-navbar main-menu">
                  <div className="pcoded-navigatio-lavel">Navigation</div>
                  <ul className="pcoded-item pcoded-left-item">
                    <li>
                      <a href="/">
                        <span className="pcoded-micon">
                          <i className="feather icon-home" />
                        </span>
                        <span className="pcoded-mtext">Dashboard</span>
                      </a>
                    </li>
                    <li className>
                      <a href="/navbar-light">
                        <span className="pcoded-micon">
                          <i className="feather icon-server" />
                        </span>
                        <span className="pcoded-mtext">Projects</span>
                      </a>
                    </li>
                    <li className>
                      <a href="/navbar-light">
                        <span className="pcoded-micon">
                          <i className="feather icon-layers" />
                        </span>
                        <span className="pcoded-mtext">Stations</span>
                      </a>
                    </li>
                    <li className="active">
                      <a href="/devices">
                        <span className="pcoded-micon">
                          <i className="feather icon-instagram" />
                        </span>
                        <span className="pcoded-mtext">Devices</span>
                      </a>
                    </li>
                    <li className>
                      <a href="/navbar-light">
                        <span className="pcoded-micon">
                          <i className="feather icon-bell" />
                        </span>
                        <span className="pcoded-mtext">Notifications</span>
                      </a>
                    </li>
                    <li className>
                      <a href="/navbar-light">
                        <span className="pcoded-micon">
                          <i className="feather icon-check" />
                        </span>
                        <span className="pcoded-mtext">Tasks</span>
                      </a>
                    </li>
                    <li className>
                      <a href="/navbar-light">
                        <span className="pcoded-micon">
                          <i className="feather icon-briefcase" />
                        </span>
                        <span className="pcoded-mtext">Reports</span>
                      </a>
                    </li>
                    <li className>
                      <a href="/navbar-light">
                        <span className="pcoded-micon">
                          <i className="feather icon-settings" />
                        </span>
                        <span className="pcoded-mtext">Settings</span>
                      </a>
                    </li>
                  </ul>
                  <div className="pcoded-navigatio-lavel">Support</div>
                  <ul className="pcoded-item pcoded-left-item">
                    <li className>
                      <a
                        href="http://html.codedthemes.com/Adminty/doc"
                        target="_blank"
                      >
                        <span className="pcoded-micon">
                          <i className="feather icon-monitor" />
                        </span>
                        <span className="pcoded-mtext">Documentation</span>
                      </a>
                    </li>
                    <li className>
                      <a href="#" target="_blank">
                        <span className="pcoded-micon">
                          <i className="feather icon-help-circle" />
                        </span>
                        <span className="pcoded-mtext">Submit Issue</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  <div className="main-body">
                    <div className="page-wrapper">
                      <div className="page-header">
                        <div className="row align-items-end">
                          <div className="col-lg-8">
                            <div className="page-header-title">
                              <div className="d-inline">
                                <h4>DEVICES</h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4">
                            <div className="page-header-breadcrumb">
                              <ul className="breadcrumb-title">
                                <li className="breadcrumb-item">
                                  <a href="/">
                                    {"{"}" "{"}"}
                                    <i className="feather icon-home" />
                                    {"{"}" "{"}"}
                                  </a>
                                </li>
                                <li className="breadcrumb-item">
                                  <a href="#!">Devices</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="page-body">
                        <div className="card">
                          <div className="card-header" />
                          <div
                            className="dropdown-primary dropdown"
                            style={{ marginleft: "94%", width: "100px" }}
                          >
                            <div data-toggle="dropdown">
                              <button
                                type="button"
                                className="btn btn-primary waves-effect"
                                data-toggle="modal"
                                data-target="#large-Modal"
                              >
                                +
                              </button>
                            </div>
                            <ul
                              className="show-notification notification-view dropdown-menu"
                              data-dropdown-in="fadeIn"
                              data-dropdown-out="fadeOut"
                            >
                              <li>
                                <div className="media">
                                  <div className="media-body">
                                    <button
                                      id="addNewDeviceBtn"
                                      type="button"
                                      className="btn btn-primary waves-effect"
                                      style={{ width: "100%" }}
                                      data-toggle="modal"
                                      data-target="#addDeviceModal"
                                    >
                                      Add new device
                                    </button>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="media">
                                  <div className="media-body">
                                    <button
                                      id="importDeviceBtn"
                                      type="button"
                                      className="btn btn-primary waves-effect"
                                      data-toggle="modal"
                                      data-target="#large-Modal"
                                      style={{ width: "100%" }}
                                    >
                                      Import device
                                    </button>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div
                            className="modal fade"
                            id="large-Modal"
                            tabIndex={-2}
                            role="dialog"
                          >
                            <div
                              className="modal-dialog modal-lg"
                              role="document"
                            >
                              <div className="modal-content">
                                <div className="modal-header">
                                  <h4 className="modal-title">Modal title</h4>
                                  <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                  >
                                    <span aria-hidden="true">×</span>
                                  </button>
                                </div>
                                <div className="modal-body">
                                  <h5>Default Modal</h5>
                                  <p>Import device from CSV.</p>
                                </div>
                                <div className="modal-footer">
                                  <button
                                    type="button"
                                    className="btn btn-default waves-effect "
                                    data-dismiss="modal"
                                  >
                                    Close
                                  </button>
                                  <button
                                    type="button"
                                    className="btn btn-primary waves-effect waves-light "
                                  >
                                    Save changes
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default Dashboard;
