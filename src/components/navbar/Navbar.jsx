import React, {useState} from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import contact_light from "../../images/contact-light.png";
import contact_dark from "../../images/contact-dark.png"
import light from "../../images/day.png"
import dark from "../../images/night.png"
import menu from "../../images/R-menu.png"

function Navbar({theme, setTheme}) {

  const toggle_mode =()=>{
    theme == 'dark' ? setTheme("light") : setTheme("dark")
  }
  const [showMenu, setshowMenu]=useState(false)

  return (
    <>
      <nav className={`Nav-bar ${theme}`}>
         <img src={theme=="dark" ? light : dark} alt="" onClick={()=> toggle_mode()} className="theme" />
        <div className="menu">
          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="Menulist">Home</Link>
          <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className="Menulist">About</Link>
          <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-50} duration={500} className="Menulist">Projects</Link>
          <Link activeClass="active" to='Skills'spy={true} smooth={true} offset={-100} duration={500} className="Menulist">Skills</Link>
        </div>
        <button className="menubutton" onClick={()=>{
          document.getElementById('contact-page').scrollIntoView({behavior:'smooth'})
        }}>
          <img src={theme=="dark" ? contact_light : contact_dark} alt="" className="btn-img" /> <span className="contactBtn">contact me</span> 
        </button>
        <img src={menu} alt="" className="mobMenu" onClick={()=>{setshowMenu(!showMenu)}} />
        <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
          <Link activeClass="active" to='intro' spy={true} smooth={true} offset={-100} duration={500} className="MenuListItem" onClick={()=>setshowMenu(false)}>Home</Link>
          <Link activeClass="active" to='about' spy={true} smooth={true} offset={-100} duration={500} className="MenuListItem" onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeClass="active" to='projects' spy={true} smooth={true} offset={-50} duration={500} className="MenuListItem" onClick={()=>setshowMenu(false)}>Projects</Link>
          <Link activeClass="active" to='Skills'spy={true} smooth={true} offset={-100} duration={500} className="MenuListItem" onClick={()=>setshowMenu(false)}>Skills</Link>
          <Link activeClass="active" to='Skills'spy={true} smooth={true} offset={-100} duration={500} className="MenuListItem" onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
