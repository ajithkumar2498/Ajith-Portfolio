import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import contact_light from "../../images/contact-light.png";
import contact_dark from "../../images/contact-dark.png"
import light from "../../images/day.png"
import dark from "../../images/night.png"

function Navbar({theme, setTheme}) {

  const toggle_mode =()=>{
    theme == 'dark' ? setTheme("light") : setTheme("dark")
  }
  return (
    <>
      <nav className={`Nav-bar ${theme}`}>
        <span className="Name"> <img src={theme=="dark" ? light : dark} alt="" onClick={()=> toggle_mode()} className="theme" /></span>
        <div className="menu">
          <Link className="Menulist">Home</Link>
          <Link className="Menulist">About</Link>
          <Link className="Menulist">Projects</Link>
          <Link className="Menulist">Skills</Link>
        </div>
        <button className="menubutton">
          <img src={theme=="dark" ? contact_light : contact_dark} alt="" className="btn-img" /> <span>contact me</span> 
        </button>
      </nav>
    </>
  );
}

export default Navbar;
