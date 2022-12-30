import "./navbar.css";
import logo from "../../img/logo.ico";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const signin = () => {
  
    navigate("/login");
  };
  const signout = () => {
    navigate("/register");
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="title">SDB Trip Booking</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton"onClick={signout}>Register</button>
            <button className="navButton" onClick={signin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
