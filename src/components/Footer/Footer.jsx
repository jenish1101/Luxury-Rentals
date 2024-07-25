import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer className={isHomePage ? 'homePage_footer otherPage_footer': "otherPage_footer"} style={{background:"#00000073" , color:"white"}}>
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
          Discover our luxury rentals, featuring upscale amenities and elegant designs, providing a sophisticated living experience that combines comfort, style, and exclusivity.
          </p>
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/termsandconditions"}>Terms&Conditions</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Connect with us</h4>
          <p>+1234567897</p>
          <p>Luxury@gmail.com</p>
          <p>© All Rights Reserved By JENISH.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
