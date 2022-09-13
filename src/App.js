import { Outlet, Link } from "react-router-dom";
import Logo from "../src/img/Logo.png";

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
          <img src={Logo} className="logo" alt="Logo" />
        </Link>
        <div>
          <Link to="/services">Services</Link>
          <Link to="/bridalhair">Bridal Hair</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/">Home</Link>
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
