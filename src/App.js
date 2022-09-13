import { Outlet, Link } from "react-router-dom";
import LogoW from "../src/img/LogoW.png";

import {
  BsInstagram,
  BsFacebook,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import "./App.css";

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav>
        <Link to="/">
          <img src={LogoW} style={{ width: 100, height: 100 }} alt="Logo" />
        </Link>
        <div className="navItems">
          <Link to="/services" className="navItem">
            Services
          </Link>
          <Link to="/bridalhair" className="navItem">
            Bridal Hair
          </Link>
          <Link to="/contact" className="navItem">
            Contact
          </Link>
          <Link to="/" className="navItem">
            Home
          </Link>
        </div>
      </nav>
      <Outlet />
      <footer>
        <ul>
          <li>
            {" "}
            <Link to="/services">Services</Link>
          </li>
          <li>
            {" "}
            <Link to="/bridalhair">Bridal Hair</Link>
          </li>
          <li>
            {" "}
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
        </ul>
        <a href="https://www.instagram.com/salon__144/">
          <BsInstagram size={40} />
        </a>
        <a href="https://www.facebook.com/BarrancaBridal">
          <BsFacebook size={40} />
        </a>
        <a href="https://www.instagram.com/salon__144/">
          <BsFillTelephoneFill size={40} />
        </a>
        <a href="https://www.facebook.com/BarrancaBridal">
          <BsFillEnvelopeFill size={40} />
        </a>

        <p>&copy; 2022 Salon 144 Inc.</p>
      </footer>
    </>
  );
}

export default App;
