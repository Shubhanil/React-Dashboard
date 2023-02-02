import React from 'react'
import { Link } from 'react-router-dom';

function SideMenu() {
    return (
        <div className="app-menu navbar-menu">
            {/* <!-- LOGO --> */}
            <div className="navbar-brand-box">
                {/* <!-- Dark Logo--> */}
                <Link to="#" className="logo logo-dark">
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src="assets/images/logo-dark.png" alt="" height="17" />
                    </span>
                </Link>
                {/* <!-- Light Logo--> */}
                <Link to="#" className="logo logo-light">
                    <span className="logo-sm">
                        <img src="assets/images/logo-sm.png" alt="" height="22" />
                    </span>
                    <span className="logo-lg">
                        <img src="assets/images/logo-light.png" alt="" height="17" />
                    </span>
                </Link>
            </div>

            <div id="scrollbar" className="h-100">

                <ul>
                    <li>Dashboard</li>
                    <ul>
                        <li>Analytice
                        </li>
                        <li>Users</li>
                        <li>Product</li>
                        <li>Orders</li>
                        <li>Subscription</li>
                    </ul>
                    <li>Contact</li>
                    <ul>
                        <li>WhatsApp</li>
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                    <li>Support</li>
                    <li>Report</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Dashboard</li>
                    <ul>
                        <li>Analytice</li>
                        <li>Users</li>
                        <li>Product</li>
                        <li>Orders</li>
                        <li>Subscription</li>
                    </ul>
                    <li>Contact</li>
                    <ul>
                        <li>WhatsApp</li>
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                    <li>Support</li>
                    <li>Report</li>
                    <li>Profile</li>
                    <li>Settings</li>
                    <li>Dashboard</li>
                    <ul>
                        <li>Analytice</li>
                        <li>Users</li>
                        <li>Product</li>
                        <li>Orders</li>
                        <li>Subscription</li>
                    </ul>
                    <li>Contact</li>
                    <ul>
                        <li>WhatsApp</li>
                        <li>Email</li>
                        <li>Phone</li>
                    </ul>
                    <li>Support</li>
                    <li>Report</li>
                    <li>Profile</li>
                    <li>Settings</li>
                </ul>
            </div>
        </div>
    )
}

export default SideMenu;