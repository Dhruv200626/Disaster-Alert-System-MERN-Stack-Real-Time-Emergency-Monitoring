import {
  FaExclamationTriangle,
  FaUsers,
  FaShieldAlt,
  FaMapMarkedAlt,
} from "react-icons/fa";

import "../styles/statsCard.css";

function Stats() {
  return (
    <section className="stats">

      <div className="stat-card">

        <div className="icon red">
          <FaExclamationTriangle />
        </div>

        <h2>152</h2>

        <p>Active Alerts</p>

      </div>

      <div className="stat-card">

        <div className="icon blue">
          <FaUsers />
        </div>

        <h2>18,240</h2>

        <p>People Affected</p>

      </div>

      <div className="stat-card">

        <div className="icon green">
          <FaShieldAlt />
        </div>

        <h2>42</h2>

        <p>Safety Tips</p>

      </div>

      <div className="stat-card">

        <div className="icon purple">
          <FaMapMarkedAlt />
        </div>

        <h2>98</h2>

        <p>Safe Zones</p>

      </div>

    </section>
  );
}

export default Stats;