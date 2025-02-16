import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo.svg';
import LiveUpdates from './LiveUpdates';
import { useSidebar } from '../context/SidebarContext';

function Header() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [isUserSettingsOpen, setIsUserSettingsOpen] = useState(false);

    const toggleNotification = () => {
        setIsNotificationOpen(!isNotificationOpen);
        setIsUserSettingsOpen(false);
    };

    const toggleUserSettings = () => {
        setIsUserSettingsOpen(!isUserSettingsOpen);
        setIsNotificationOpen(false);
    };

    const { toggleSidebar } = useSidebar();

    return (
        <header className="app-header">
            <div className="container-fluid">
                <div className="row gutters">
                    <div className="col-xl-7 col-lg-7 col-md-6 col-sm-7 col-7">
                        {/* BEGIN .logo */}
                        <div className="logo-block">
                            <Link to="/" className="logo">
                                <img src={logo} alt="MoveInSync Admin Dashboard" />
                            </Link>
                            <a className="mini-nav-btn"  id="onoffcanvas-nav" onClick={toggleSidebar} style={{ cursor: "pointer" }}>
                                <i className="open"></i>
                                <i className="open"></i>
                                <i className="open"></i>
                            </a>
                            <a href="#app-side" data-toggle="onoffcanvas" style={{ cursor: "pointer" }} className="onoffcanvas-toggler" aria-expanded="true" onClick={toggleSidebar}>
                                <i className="open"></i>
                                <i className="open"></i>
                                <i className="open"></i>
                            </a>
                        </div>
                        {/* END .logo */}

                        <LiveUpdates/>
                    </div>

                    <div className="col-xl-5 col-lg-5 col-md-6 col-sm-5 col-5">
                        {/* Header actions start */}
                        <ul className="header-actions">
                            <li className={`dropdown ${isNotificationOpen ? 'show' : ''}`}>
                                <a href="#" 
                                   onClick={(e) => {
                                       e.preventDefault();
                                       toggleNotification();
                                   }}
                                   id="notifications" 
                                   data-toggle="dropdown" 
                                   aria-haspopup="true">
                                    <i className="icon-notifications_none"></i>
                                    <span className="count-label">7</span>
                                </a>
                                <div className={`dropdown-menu dropdown-menu-right lg ${isNotificationOpen ? 'show' : ''}`} 
                                     aria-labelledby="notifications">
                                    <ul className="imp-notify">
                                        <li>
                                            <div className="icon">J</div>
                                            <div className="details">
                                                <h6 className="username">Jay Prakash</h6>
                                                <p className="desc">Hey there! I'm your driver and will be arriving at your location shortly.</p>
                                                <p className="time">6:30 PM</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon green">A</div>
                                            <div className="details">
                                                <h6 className="username">Aryan Singh</h6>
                                                <p className="desc">Thank you for choosing MoveinSync! We appreciate your trust in our services."</p>
                                                <p className="time">7:20 PM</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon red">R</div>
                                            <div className="details">
                                                <h6 className="username">Rohit Raj</h6>
                                                <p className="desc">Safe travels! Thanks for choosing MoveinSync.</p>
                                                <p className="time">3:45 PM</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>

                            <li className={`dropdown ${isUserSettingsOpen ? 'show' : ''}`}>
                                <a href="#" 
                                   onClick={(e) => {
                                       e.preventDefault();
                                       toggleUserSettings();
                                   }}
                                   id="userSettings" 
                                   className="user-settings" 
                                   data-toggle="dropdown" 
                                   aria-haspopup="true">
                                    <span className="avatar">AK<span className="status online"></span></span>
                                    <span className="user-name">Ayush Kumar</span>
                                    <i className="icon-chevron-small-down downarrow"></i>
                                </a>
                                <div className={`dropdown-menu lg dropdown-menu-right ${isUserSettingsOpen ? 'show' : ''}`} 
                                     aria-labelledby="userSettings">
                                    <div className="admin-settings">
                                        <ul className="admin-settings-list">
                                            <li>
                                                <Link to="/profile">
                                                    <span className="icon icon-face"></span>
                                                    <span className="text-name">My Profile</span>
                                                    <span className="badge badge-success">75% Complete</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/notifications">
                                                    <span className="icon icon-notifications_none"></span>
                                                    <span className="text-name">Notifications</span>
                                                    <span className="badge badge-orange">12</span>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/settings">
                                                    <span className="icon icon-av_timer"></span>
                                                    <span className="text-name">Account Settings</span>
                                                </Link>
                                            </li>
                                        </ul>
                                        <div className="actions">
                                            <Link to="/logout" className="btn btn-primary">Logout</Link>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/* Header actions end */}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;