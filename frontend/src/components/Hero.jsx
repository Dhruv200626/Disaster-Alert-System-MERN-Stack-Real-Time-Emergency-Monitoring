import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaBell } from "react-icons/fa";
import "../styles/hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <div className="live-badge">
          🔴 Real-time Disaster Monitoring & Alerts
        </div>

        <h1>
          Stay <span>Informed.</span>
          <br />
          Stay <span className="gradient">Protected.</span>
        </h1>

        <p>
          Get real-time alerts about floods, earthquakes,
          cyclones and other disasters in your area.
          Stay prepared with instant notifications and
          interactive live maps.
        </p>

        <div className="hero-buttons">

          <Link to="/map" className="primary-btn">
            <FaMapMarkerAlt />
            View Live Map
          </Link>

          <Link to="/" className="secondary-btn">
            <FaBell />
            View Alerts
          </Link>

        </div>

      </div>

      

    </section>
  );
}

export default Hero;