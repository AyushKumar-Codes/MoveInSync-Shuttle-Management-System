import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSidebar } from '../context/SidebarContext';

const Sidebar = () => {
    const location = useLocation();
    const { isSidebarOpen, toggleSidebar } = useSidebar();
    const sidebarRef = useRef();

    // Click outside handler
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSidebarOpen && 
                sidebarRef.current && 
                !sidebarRef.current.contains(event.target) &&
                !event.target.closest('.mini-nav-btn') &&
                !event.target.closest('.onoffcanvas-toggler')) {
                toggleSidebar();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isSidebarOpen, toggleSidebar]);

    // Quick links data
    const quickLinks = [
        {
            title: "Trip History",
            icon: "icon-assignment_turned_in",
            path: "/trip-history"
        },
        {
            title: "Peak Hour Reports",
            icon: "icon-chart-line",
            path: "/peak-hours"
        },
        {
            title: "Upcoming Trips",
            icon: "icon-book3",
            path: "/upcoming-trips",
            className: "orange"
        },
        {
            title: "Account Settings",
            icon: "icon-verified_user",
            path: "/settings",
            className: "orange"
        }
    ];

    // Navigation menu items
    const menuItems = [
        {
            title: "User Portal",
            icon: "icon-laptop_windows",
            path: "/"
        },
        {
            title: "Admin Portal",
            icon: "icon-broken_image",
            path: "/admin"
        }
    ];

    return (
        <aside 
            ref={sidebarRef}
            className={`app-side fixed ${isSidebarOpen ? 'open' : 'closed'}`} 
            id="app-side"
        >
            <style>
                {`
                    .app-side {
                        position: fixed;
                        height: 100%;
                        background: #fff;
                        border-right: 1px solid #eee;
                        transition: transform 0.3s ease-in-out;
                        width: 240px;
                        z-index: 1000;
                    }

                    .app-side.closed {
                        transform: translateX(-240px);
                    }

                    .app-side.open {
                        transform: translateX(0);
                    }

                    @media (max-width: 768px) {
                        .app-side.open::after {
                            content: '';
                            position: fixed;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            background: rgba(0,0,0,0.5);
                            z-index: -1;
                        }
                    }

                    .side-content {
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                    }

                    .user-actions {
                        list-style: none;
                        padding: 15px;
                        margin: 0;
                        border-bottom: 1px solid #eee;
                    }

                    .user-actions li {
                        display: inline-block;
                        margin-right: 10px;
                    }

                    .user-actions .quick-links {
                        display: block;
                        margin-bottom: 10px;
                        font-weight: 500;
                    }

                    .user-actions a {
                        width: 36px;
                        height: 36px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background: #f5f5f5;
                        color: #333;
                        transition: all 0.3s ease;
                        position: relative;
                    }

                    .user-actions a:hover {
                        background: #e0e0e0;
                    }

                    .user-actions a.orange {
                        color: #ff6b6b;
                    }

                    .user-actions a:hover::after {
                        content: attr(title);
                        position: absolute;
                        top: -30px;
                        left: 50%;
                        transform: translateX(-50%);
                        background: rgba(0,0,0,0.8);
                        color: white;
                        padding: 4px 8px;
                        border-radius: 4px;
                        font-size: 12px;
                        white-space: nowrap;
                        z-index: 1001;
                    }

                    .sidebarNavScroll {
                        flex: 1;
                        overflow-y: auto;
                    }

                    .unifyMenu {
                        list-style: none;
                        padding: 0;
                        margin: 0;
                    }

                    .unifyMenu li {
                        margin: 0;
                        padding: 0;
                    }

                    .unifyMenu li a {
                        padding: 12px 25px;
                        display: flex;
                        align-items: center;
                        color: #333;
                        text-decoration: none;
                        transition: all 0.3s ease;
                    }

                    .unifyMenu li.selected a,
                    .unifyMenu li a:hover {
                        background: #f8f9fa;
                        color: #007bff;
                    }

                    .has-icon {
                        margin-right: 10px;
                        width: 20px;
                        text-align: center;
                    }

                    .nav-title {
                        font-size: 14px;
                    }
                `}
            </style>

            <div className="side-content">
                {/* Quick Links */}
                <ul className="user-actions">
                    <li className="quick-links">Quick Links</li>
                    {quickLinks.map((link, index) => (
                        <li key={index}>
                            <Link 
                                to={link.path}
                                className={link.className}
                                title={link.title}
                                onClick={() => {
                                    if (window.innerWidth <= 768) {
                                        toggleSidebar();
                                    }
                                }}
                            >
                                <i className={link.icon}></i>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Navigation Menu */}
                <div className="sidebarNavScroll">
                    <nav className="side-nav">
                        <ul className="unifyMenu" id="unifyMenu">
                            {menuItems.map((item, index) => (
                                <li 
                                    key={index}
                                    className={location.pathname === item.path ? 'selected' : ''}
                                >
                                    <Link 
                                        to={item.path}
                                        onClick={() => {
                                            if (window.innerWidth <= 768) {
                                                toggleSidebar();
                                            }
                                        }}
                                    >
                                        <span className="has-icon">
                                            <i className={item.icon}></i>
                                        </span>
                                        <span className="nav-title">{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;