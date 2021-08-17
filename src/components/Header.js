import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
  return (
    <div className="header">
      <div>
        <h2>Dashboard</h2>
      </div>
      <div className="header__lists">
        <ul>
          <Link to="/"><li>Summary</li></Link>
          <Link to="/subscribers">
            <li>Subscribers</li>
          </Link>
          <Link to="/subscriptionDetails">
            <li>Subscription Details</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
