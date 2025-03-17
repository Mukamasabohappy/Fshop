import React from 'react';
import { NavLink } from 'react-router-dom'; // Use for routing
import '../Dahboard/DashStyle/DashSidebar.css'; // Styles

function Sidebar() {
  return (
    <aside className="dashboard-sidebar">
      <div className="sidebar-logo">
        {/* Replace with your logo or brand name */}
        <NavLink to="/">
          <img src="" />
        </NavLink>
      </div>

      <nav>
        <ul className="sidebar-nav-list">
          <li className="sidebar-nav-item">
            <NavLink to="/Dashboard" activeClassName="active" exact className="sidebar-nav-link">
              Dashboard
            </NavLink>
          </li>

          <li className="sidebar-nav-item">
            <NavLink to="/products" activeClassName="active" className="sidebar-nav-link">
              <i className="fas fa-tshirt sidebar-nav-icon"></i>
              Products
            </NavLink>
          </li>

          <li className="sidebar-nav-item">
            <NavLink to="/inventory" activeClassName="active" className="sidebar-nav-link">
              Inventory
            </NavLink>
          </li>

          <li className="sidebar-nav-item">
            <NavLink to="/Orders" activeClassName="active" className="sidebar-nav-link">
              <i className="fas fa-shopping-cart sidebar-nav-icon"></i>
              Orders
            </NavLink>
          </li>

          <li className="sidebar-nav-item">
            <NavLink to="/customers" activeClassName="active" className="sidebar-nav-link">
              <i className="fas fa-users sidebar-nav-icon"></i>
              Customers
            </NavLink>
          </li>

          <li className="sidebar-nav-item">
            <NavLink to="/reports" activeClassName="active" className="sidebar-nav-link">
              <i className="fas fa-chart-line sidebar-nav-icon"></i>
              Reports & Analytics
            </NavLink>
          </li>

          <li className="sidebar-nav-item">
            <NavLink to="/marketing" activeClassName="active" className="sidebar-nav-link">
              <i className="fas fa-bullhorn sidebar-nav-icon"></i>
              Marketing
            </NavLink>
          </li>

          <li className="sidebar-nav-item">
            <NavLink to="/Setting" activeClassName="active" className="sidebar-nav-link">
              <i className="fas fa-cog sidebar-nav-icon"></i>
              Settings
            </NavLink>
          </li>

        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;