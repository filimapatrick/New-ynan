import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {MdKeyboardArrowDown} from "react-icons/md";
import styled from "styled-components";

function NavBar() {
  const [click, setClick] = useState(false);
 const [dropdown, setDropdown] = useState(false)
  const handleClick = () => setClick(!click);

  return (
    <NavStyle>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
           <div className="logo-area">
           <img src='./ynan.jpeg' alt=''/>
           </div>
          
          
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/mentorship"
                activeClassName="active"
                className="nav-links"
                onHover={handleClick}
              >
                Mentorship
              </NavLink>
            </li>




            <li className="nav-item">
              <NavLink
                exact
                to="#"
              
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Award <MdKeyboardArrowDown/>
                
              </NavLink>
              <ul className="dropdown">
                 <li>here is the best part of the day</li> 
                 <li>Now</li>
                 <li>Now</li>
                 <li>Now</li>
                 <li>Now</li>
                 <li>Now</li>
              </ul>
            </li>

            
            <li className="nav-item">
              <NavLink
                exact
                to="involved"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Get Involved
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/events"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                 Activities
              </NavLink>
            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ NavStyle>
  );
}

export default NavBar;


const NavStyle = styled.nav ` 
  
  .navbar {
    background-color: white;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: fixed;
    top: 0;
    z-index: 20;
    width: 100%;
  }
  
  .nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    max-width: 1500px;
   
  }
  
  .nav-logo {
  
    align-items: center;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    flex-grow: 1;
    

  }

  .logo-area{
    width: 4rem;
    height: 4rem;
    margin-left: 2rem;
    object-fit: contain;
  }

  .logo-area img{
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  
  .register{
    color:black;
  }
  
  .nav-menu {
    display: flex;
    list-style: none;
    text-align: center;
    margin-right: 2rem;
  }
  
  .nav-links {
    color: black;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    border-bottom: 3px solid transparent;
  }
  .fa-code {
    margin-left: 1rem;
  }
  
  .nav-item {
    line-height: 40px;
    margin-right: 1rem;
  }
  
  .nav-item:after {
    content: "";
    display: block;
    height: 3px;
    width: 0;
    background: transparent;
    transition: width 0.7s ease, background-color 0.5s ease;
  }
  
  .nav-item:hover:after {
    width: 100%;
    background: rgb(101,170,86);
  }
  
  .nav-item .active {
    color: rgb(101,170,86);
    border: 1px solid rgb(101,170,86);
  }
  
  .nav-icon {
    display: none;
  }
  
  @media screen and (max-width: 960px) {
    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      border-top: 1pxsolid #fff;
      position: absolute;
      top: 80px;
      left: -110%;
      opacity: 1;
      transition: all 0.5s ease;
    }
  
    .nav-menu.active {
      background: #1f5156;
      left: 0px;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }
    .nav-item .active {
      color: rgb(101,170,86);;
      border: none;
    }
    .nav-links {
      padding: 1.5rem;
      width: 100%;
      display: table;
    }
  
    .nav-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      color: rgb(101,170,86);;
    }
  }

  /* a:link, a:visited {
  background-color: white;
  color: black;
  border: 2px solid green;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:hover, a:active {
  background-color: green;
  color: white;
} */

.dropdown{
  position:absolute;
  margin-left:auto;
  margin-right:auto;
  width:auto;
  background-color:green;
  margin-left:-6rem;
  margin-top:2rem;
  border-radius:4px;
}

.dropdown > li{
  padding:0.5rem;
  list-style:none;
  padding-right:2rem;

}
  `