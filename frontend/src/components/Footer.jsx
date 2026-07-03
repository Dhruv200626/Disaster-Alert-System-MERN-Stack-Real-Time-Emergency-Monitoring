import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-logo">

          <h2>🌍 Disaster Alert</h2>

          <p>
            Real-time disaster monitoring and emergency
            response platform helping communities stay safe.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <a href="/">Dashboard</a>

          <a href="/map">Live Map</a>

          <a href="/login">Login</a>

          <a href="/register">Register</a>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>
            <FaEnvelope /> dhruvgosavi663@gmail.com
          </p>

          <div className="socials">

  <a
    href="https://github.com/Dhruv200626"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/dhruv-gosavi-828b25314/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://www.instagram.com/dhruv__2_0_0_6/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <FaInstagram />
  </a>

  <a
    href="https://leetcode.com/u/Dhruv_2006_26/"
    target="_blank"
    rel="noopener noreferrer"
    className="social-icon"
  >
    <SiLeetcode />
  </a>

</div>

        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Disaster Alert System • All Rights Reserved
      </p>

    </footer>
  );
}

export default Footer;