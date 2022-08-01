import React, { Component } from "react";

export default class Dashboard extends Component {
  render() {
    return (
      <body>
        <div class="theme-loader">
          <div class="ball-scale">
            <div class="contain">
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
              <div class="ring">
                <div class="frame"></div>
              </div>
            </div>
          </div>
        </div>
        <div id="pcoded" class="pcoded">
          <div class="pcoded-overlay-box"></div>
          <div class="pcoded-container navbar-wrapper">
            <nav class="navbar header-navbar pcoded-header">
              <div class="navbar-wrapper">
                <div class="navbar-logo">
                  <a class="mobile-menu" id="mobile-collapse" href="#!">
                    <i class="feather icon-menu"></i>
                  </a>
                  <a href="/">
                    <img
                      class="img-fluid"
                      src="images\logo.png'"
                      alt="Theme-Logo"
                      width="50px"
                      height="50px"
                    />
                  </a>
                  <a class="mobile-options">
                    <i class="feather icon-more-horizontal"></i>
                  </a>
                </div>

                <div class="navbar-container container-fluid">
                  <ul class="nav-left">
                    <li class="header-search">
                      <div class="main-search morphsearch-search">
                        <div class="input-group">
                          <span class="input-group-addon search-close">
                            <i class="feather icon-x"></i>
                          </span>
                          <input type="text" class="form-control" />
                          <span class="input-group-addon search-btn">
                            <i class="feather icon-search"></i>
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <a href="#!" onclick="javascript:toggleFullScreen()">
                        <i class="feather icon-maximize full-screen"></i>
                      </a>
                    </li>
                  </ul>
                  <ul class="nav-right">
                    <li class="header-notification">
                      <div class="dropdown-primary dropdown">
                        <div class="dropdown-toggle" data-toggle="dropdown">
                          <i class="feather icon-bell"></i>
                          <span class="badge bg-c-pink">5</span>
                        </div>
                        <ul
                          class="show-notification notification-view dropdown-menu"
                          data-dropdown-in="fadeIn"
                          data-dropdown-out="fadeOut"
                        >
                          <li>
                            <h6>Notifications</h6>
                            <label class="label label-danger">New</label>
                          </li>
                          <li>
                            <div class="media">
                              <img
                                class="d-flex align-self-center img-radius"
                                src="libraries\assets\images\avatar-4.jpg"
                                alt="Generic placeholder image"
                              />
                              <div class="media-body">
                                <h5 class="notification-user">John Doe</h5>
                                <p class="notification-msg">
                                  Lorem ipsum dolor sit amet, consectetuer elit.
                                </p>
                                <span class="notification-time">
                                  30 minutes ago
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="media">
                              <img
                                class="d-flex align-self-center img-radius"
                                src="libraries\assets\images\avatar-3.jpg"
                                alt="Generic placeholder image"
                              />
                              <div class="media-body">
                                <h5 class="notification-user">
                                  Joseph William
                                </h5>
                                <p class="notification-msg">
                                  Lorem ipsum dolor sit amet, consectetuer elit.
                                </p>
                                <span class="notification-time">
                                  30 minutes ago
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div class="media">
                              <img
                                class="d-flex align-self-center img-radius"
                                src="libraries\assets\images\avatar-4.jpg"
                                alt="Generic placeholder image"
                              />
                              <div class="media-body">
                                <h5 class="notification-user">Sara Soudein</h5>
                                <p class="notification-msg">
                                  Lorem ipsum dolor sit amet, consectetuer elit.
                                </p>
                                <span class="notification-time">
                                  30 minutes ago
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li class="header-notification">
                      <div class="dropdown-primary dropdown">
                        <div class="dropdown-toggle" data-toggle="dropdown">
                          <i class="fa fa-globe"></i>
                          <span class="badge bg-simple-c-blue">En</span>
                        </div>
                      </div>
                    </li>

                    <li class="user-profile header-notification">
                      <div class="dropdown-primary dropdown">
                        <div class="dropdown-toggle" data-toggle="dropdown">
                          <img
                            src="libraries\assets\images\avatar-4.jpg"
                            class="img-radius"
                            alt="User-Profile-Image"
                          />
                          <span>John Doe</span>
                          <i class="feather icon-chevron-down"></i>
                        </div>
                        <ul
                          class="show-notification profile-notification dropdown-menu"
                          data-dropdown-in="fadeIn"
                          data-dropdown-out="fadeOut"
                        >
                          <li>
                            <a href="#!">
                              <i class="feather icon-settings"></i> Settings
                            </a>
                          </li>
                          <li>
                            <a href="/user-profile">
                              <i class="feather icon-user"></i> Profile
                            </a>
                          </li>
                          <li>
                            <a href="email-inbox.htm">
                              <i class="feather icon-mail"></i> My Messages
                            </a>
                          </li>

                          <li>
                            <a href="auth-normal-sign-in.htm">
                              <i class="feather icon-log-out"></i> Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>

            <div id="sidebar" class="users p-chat-user showChat">
              <div class="had-container">
                <div class="card card_main p-fixed users-main">
                  <div class="user-box">
                    <div class="chat-inner-header">
                      <div class="back_chatBox">
                        <div class="right-icon-control">
                          <input
                            type="text"
                            class="form-control  search-text"
                            placeholder="Search Friend"
                            id="search-friends"
                          />
                          <div class="form-icon">
                            <i class="icofont icofont-search"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="main-friend-list">
                      <div
                        class="media userlist-box"
                        data-id="1"
                        data-status="online"
                        data-username="Josephin Doe"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Josephin Doe"
                      >
                        <a class="media-left" href="#!">
                          <img
                            class="media-object img-radius img-radius"
                            src="libraries\assets\images\avatar-3.jpg"
                            alt="Generic placeholder image "
                          />
                          <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                          <div class="f-13 chat-header">Josephin Doe</div>
                        </div>
                      </div>
                      <div
                        class="media userlist-box"
                        data-id="2"
                        data-status="online"
                        data-username="Lary Doe"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Lary Doe"
                      >
                        <a class="media-left" href="#!">
                          <img
                            class="media-object img-radius"
                            src="libraries\assets\images\avatar-2.jpg"
                            alt="Generic placeholder image"
                          />
                          <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                          <div class="f-13 chat-header">Lary Doe</div>
                        </div>
                      </div>
                      <div
                        class="media userlist-box"
                        data-id="3"
                        data-status="online"
                        data-username="Alice"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Alice"
                      >
                        <a class="media-left" href="#!">
                          <img
                            class="media-object img-radius"
                            src="libraries\assets\images\avatar-4.jpg"
                            alt="Generic placeholder image"
                          />
                          <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                          <div class="f-13 chat-header">Alice</div>
                        </div>
                      </div>
                      <div
                        class="media userlist-box"
                        data-id="4"
                        data-status="online"
                        data-username="Alia"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Alia"
                      >
                        <a class="media-left" href="#!">
                          <img
                            class="media-object img-radius"
                            src="libraries\assets\images\avatar-3.jpg"
                            alt="Generic placeholder image"
                          />
                          <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                          <div class="f-13 chat-header">Alia</div>
                        </div>
                      </div>
                      <div
                        class="media userlist-box"
                        data-id="5"
                        data-status="online"
                        data-username="Suzen"
                        data-toggle="tooltip"
                        data-placement="left"
                        title="Suzen"
                      >
                        <a class="media-left" href="#!">
                          <img
                            class="media-object img-radius"
                            src="libraries\assets\images\avatar-2.jpg"
                            alt="Generic placeholder image"
                          />
                          <div class="live-status bg-success"></div>
                        </a>
                        <div class="media-body">
                          <div class="f-13 chat-header">Suzen</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="showChat_inner">
              <div class="media chat-inner-header">
                <a class="back_chatBox">
                  <i class="feather icon-chevron-left"></i> Josephin Doe
                </a>
              </div>
              <div class="media chat-messages">
                <a class="media-left photo-table" href="#!">
                  <img
                    class="media-object img-radius img-radius m-t-5"
                    src="libraries\assets\images\avatar-3.jpg"
                    alt="Generic placeholder image"
                  />
                </a>
                <div class="media-body chat-menu-content">
                  <div class="">
                    <p class="chat-cont">
                      I'm just looking around. Will you tell me something about
                      yourself?
                    </p>
                    <p class="chat-time">8:20 a.m.</p>
                  </div>
                </div>
              </div>
              <div class="media chat-messages">
                <div class="media-body chat-menu-reply">
                  <div class="">
                    <p class="chat-cont">
                      I'm just looking around. Will you tell me something about
                      yourself?
                    </p>
                    <p class="chat-time">8:20 a.m.</p>
                  </div>
                </div>
                <div class="media-right photo-table">
                  <a href="#!">
                    <img
                      class="media-object img-radius img-radius m-t-5"
                      src="libraries\assets\images\avatar-4.jpg"
                      alt="Generic placeholder image"
                    />
                  </a>
                </div>
              </div>
              <div class="chat-reply-box p-b-20">
                <div class="right-icon-control">
                  <input
                    type="text"
                    class="form-control search-text"
                    placeholder="Share Your Thoughts"
                  />
                  <div class="form-icon">
                    <i class="feather icon-navigation"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="pcoded-main-container">
              <div class="pcoded-wrapper">
                <nav class="pcoded-navbar">
                  <div class="pcoded-inner-navbar main-menu">
                    <div class="pcoded-navigatio-lavel">Navigation</div>
                    <ul class="pcoded-item pcoded-left-item">
                      <li>
                        <a href="/">
                          <span class="pcoded-micon">
                            <i class="feather icon-home"></i>
                          </span>
                          <span class="pcoded-mtext">Dashboard</span>
                        </a>
                      </li>

                      <li class="">
                        <a href="/navbar-light">
                          <span class="pcoded-micon">
                            <i class="feather icon-server"></i>
                          </span>
                          <span class="pcoded-mtext">Projects</span>
                        </a>
                      </li>

                      <li class="">
                        <a href="/navbar-light">
                          <span class="pcoded-micon">
                            <i class="feather icon-layers"></i>
                          </span>
                          <span class="pcoded-mtext">Stations</span>
                        </a>
                      </li>

                      <li class="active">
                        <a href="/devices">
                          <span class="pcoded-micon">
                            <i class="feather icon-instagram"></i>
                          </span>
                          <span class="pcoded-mtext">Devices</span>
                        </a>
                      </li>

                      <li class="">
                        <a href="/navbar-light">
                          <span class="pcoded-micon">
                            <i class="feather icon-bell"></i>
                          </span>
                          <span class="pcoded-mtext">Notifications</span>
                        </a>
                      </li>

                      <li class="">
                        <a href="/navbar-light">
                          <span class="pcoded-micon">
                            <i class="feather icon-check"></i>
                          </span>
                          <span class="pcoded-mtext">Tasks</span>
                        </a>
                      </li>

                      <li class="">
                        <a href="/navbar-light">
                          <span class="pcoded-micon">
                            <i class="feather icon-briefcase"></i>
                          </span>
                          <span class="pcoded-mtext">Reports</span>
                        </a>
                      </li>

                      <li class="">
                        <a href="/navbar-light">
                          <span class="pcoded-micon">
                            <i class="feather icon-settings"></i>
                          </span>
                          <span class="pcoded-mtext">Settings</span>
                        </a>
                      </li>
                    </ul>

                    <div class="pcoded-navigatio-lavel">Support</div>
                    <ul class="pcoded-item pcoded-left-item">
                      <li class="">
                        <a
                          href="http://html.codedthemes.com/Adminty/doc"
                          target="_blank"
                        >
                          <span class="pcoded-micon">
                            <i class="feather icon-monitor"></i>
                          </span>
                          <span class="pcoded-mtext">Documentation</span>
                        </a>
                      </li>
                      <li class="">
                        <a href="#" target="_blank">
                          <span class="pcoded-micon">
                            <i class="feather icon-help-circle"></i>
                          </span>
                          <span class="pcoded-mtext">Submit Issue</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div class="pcoded-content">
                  <div class="pcoded-inner-content">
                    <div class="main-body">
                      <div class="page-wrapper">
                        <div class="page-header">
                          <div class="row align-items-end">
                            <div class="col-lg-8">
                              <div class="page-header-title">
                                <div class="d-inline">
                                  <h4>DEVICES</h4>
                                </div>
                              </div>
                            </div>
                            <div class="col-lg-4">
                              <div class="page-header-breadcrumb">
                                <ul class="breadcrumb-title">
                                  <li class="breadcrumb-item">
                                    <a href="/">
                                      {" "}
                                      <i class="feather icon-home"></i>{" "}
                                    </a>
                                  </li>
                                  <li class="breadcrumb-item">
                                    <a href="#!">Devices</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="page-body">
                          <div class="card">
                            <div class="card-header"></div>

                            <div
                              class="dropdown-primary dropdown"
                              style={{marginLeft: '94%', width: '100px' }}
                            >
                              <div data-toggle="dropdown">
                                <button
                                  type="button"
                                  class="btn btn-primary waves-effect"
                                  data-toggle="modal"
                                  data-target="#large-Modal"
                                >
                                  +
                                </button>
                              </div>
                              <ul
                                class="show-notification notification-view dropdown-menu"
                                data-dropdown-in="fadeIn"
                                data-dropdown-out="fadeOut"
                              >
                                <li>
                                  <div class="media">
                                    <div class="media-body">
                                      <button
                                        id="addNewDeviceBtn"
                                        type="button"
                                        class="btn btn-primary waves-effect"
                                        style={{width : '100%'}}
                                        data-toggle="modal"
                                        data-target="#addDeviceModal"
                                      >
                                        Add new device
                                      </button>
                                    </div>
                                  </div>
                                </li>
                                <li>
                                  <div class="media">
                                    <div class="media-body">
                                      <button
                                        id="importDeviceBtn"
                                        type="button"
                                        class="btn btn-primary waves-effect"
                                        data-toggle="modal"
                                        data-target="#large-Modal"
                                        style={{width : '100%'}}
                                      >
                                        Import device
                                      </button>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div
                              class="modal fade"
                              id="large-Modal"
                              tabindex="-2"
                              role="dialog"
                            >
                              <div
                                class="modal-dialog modal-lg"
                                role="document"
                              >
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h4 class="modal-title">Modal title</h4>
                                    <button
                                      type="button"
                                      class="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">&times;</span>
                                    </button>
                                  </div>
                                  <div class="modal-body">
                                    <h5>Default Modal</h5>
                                    <p>Import device from CSV.</p>
                                  </div>
                                  <div class="modal-footer">
                                    <button
                                      type="button"
                                      class="btn btn-default waves-effect "
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                    <button
                                      type="button"
                                      class="btn btn-primary waves-effect waves-light "
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
  }
}
