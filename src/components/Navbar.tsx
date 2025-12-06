import { Link } from "react-router-dom";
import "../style/Navbar.css";
import Button from "./Button";
import logo from "../assets/brandmark_main.svg";

export function Navbar() {
  return (
    <div className="wrapper">
      <div className="stickyNavbar">
        <Link to="/Record">
          <Button color="outline-primary" buttonName="navbarButton">
            <span>
              <img src={logo} className="buttonLogo" alt="Snackpod logo" />
            </span>
          </Button>
        </Link>
        <div className="pages">
          <Link to="/Feed" style={{ textDecoration: "none" }}>
            <p>Feed</p>
          </Link>
          <Link to="/Saved" style={{ textDecoration: "none" }}>
            <p>Saved</p>
          </Link>
          <p>Profile</p>
        </div>
      </div>
    </div>
  );
}
