import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";

import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const Navbarmenu = () => {
  AOS.init();
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    // const [toggle, setToggle] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

   

    return (
      <NavStyle> 
    <header className="header__middle" data-aos="zoom-in">
        <div className="container">
            <div className="row">

                {/* Add Logo  */}
                <div className="header__middle__logo">
                    <NavLink exact activeClassName='is-active' to="/">
                       <div className='image'> <img src='./ynan.jpeg' alt="logo" /> </div>
                    </NavLink>
                </div>

                <div className="header__middle__menus">
                    <nav className="main-nav " >

                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}


                    <ul className={boxClass.join(' ')}>
                    <li  className="menu-item" >
                        <NavLink exact activeClassName='is-active' onClick={toggleClass} to={`/`}> Home </NavLink> 
                    </li>



                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/About`}> About </NavLink> </li>





                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/mentorship`}> Mentorship </NavLink> </li>

                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/membership`}> Membership </NavLink> </li>

                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/award`}> Award </NavLink> </li>
                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Events <FiChevronDown /> </Link>
                        <ul className={boxClassSubMenu.join(' ')} > 
                            <li> <NavLink onClick={toggleClass} activeClassName='is-active'  to={`/events`}> activities </NavLink> </li>
                            <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/blogCard`}> Blog</NavLink> </li>
                        </ul>
                    </li>
                    <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/gallery`}> Gallery </NavLink> </li>
                    </ul>


                    </nav>     
                </div>   



        
        
            </div>
	    </div>
    </header>

    </NavStyle>
    )
}

export default Navbarmenu


const NavStyle = styled.div` 
 margin-top:-5rem;
margin-bottom:-1rem;
height:5rem;
position:fixed;
background-color:black;
z-index:1;
width:100%;




@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

* {
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
}
.clearfix{
  clear:both;
}
a{
  text-decoration:none;
  transition:all 500ms ease;
  -moz-transition:all 500ms ease;
  -webkit-transition:all 500ms ease;
  -ms-transition:all 500ms ease;
  -o-transition:all 500ms ease;
}
a:hover{
  text-decoration:none;
  outline:none;
}

body {
  margin: auto;
  padding: 0px;

  background-repeat: repeat;
  font-family: 'Inter', sans-serif;
  display: grid;
}
.container {

  /* width: 100%; */
	padding-right:15px;
	padding-left:15px;
	margin-right:auto;
	margin-left:auto

}

.image{
  height:3rem;
  width:3rem;
}
img {
  max-width: 100%;
  height: 100%;
}

.sec__one {
    position: relative;
    width: 100%;
    display: flex;
    padding: 60px 0;
}
.sec__one h1{
  text-align: center;
  display: block;
  margin: 0 auto;
  color: #07a8ff;
  font-family: 'Inter', sans-serif;
}
.navBar .logo img {
  float: left;
  max-height: 120px;
}
.is-active {
  color: #ff5800!important;
}

.navBar .col-md-3 {
  z-index: 7;
}
ul.main-menu {
  display: inline-flex;
  list-style: none;
  margin: 0px auto 0;
  padding: 0;
  float: right;
  z-index: 7;
}
ul.main-menu>li.menu-item:first-child {
  padding-left: 0;
  margin-left: 0;
}
.menu-item {
  line-height: 23px;
}
li {
  list-style-type: none;
}
.menu-item a {
  font-size: 20px;
  font-weight: 600;
  line-height: 40px;
  position: relative;
  display: block;
  color: white;
  margin: 27px 17px;
  text-decoration: none;
  cursor: pointer;
}
.header__middle__logo{
  width: 20%;
  display: inline-block;
  float: left;
}
.header__middle__menus {
  width: 70%;
  display: inline-block;
  float: left;
}
.menu-item.menu__qqqitem a{
  margin: 27px 10px;
}
.header__middle__search {
  width: 7%;
  display: inline-block;
  float: right;
  padding: 36px 3px 27px 3px;
  border-left: 1px solid lavender;
}
.header__middle {
  display: flex;
  width: 100%;
  float: left;
  border-bottom: 1px dashed lavender;
  position: relative;
}
.header__middle__logo > a > h1 {
  color: #07a8ff;
  text-transform: uppercase;
  text-decoration: none;
  margin-top: 33px;
}

.header__middle__menus span.text {
  position: absolute;
  right: 177px;
  bottom: 10px;
  font-size: 14px;
  color: #ff1800;
}
.sub__menus__arrows{
  position: relative;
}
.sub__menus__arrows svg, .sub__menus__arrows__full svg{
  padding-top: 0px;
  position: absolute;
  top: 13px;
}
.sub__menus {
  position: absolute;
  display: none;
  background: gray;
  border: 1px solid lavender;
  width: 227px;
  left: -17px;
  padding: 2px 0 0 0;
  z-index: 1000;
  box-shadow: 0 10px 12px rgb(22 33 39 / 25%);
  
}

@media (max-width:767px) { 
  .header__middle .active {color: #ff3d00!important;}
}

@media (min-width:992px) { 
  .sub__menus__arrows:hover .sub__menus{
    display: block;
  }
  .sub__menus__arrows__full:hover .sub__menus{
    display: block;
    z-index: 1000000;
  }
}
.menu-item .sub__menus  a {
  padding: 7px 0 0px 0;
  margin: 7px 27px;
}
.menu-item:hover > a{
  color: green !important;
 
}
.menu-item .sub__menus li:hover a{
  color: green !important;
 
}

.header__middle__logo img{
  max-width: 207px;
  margin: 17px 0 0 0;
 
}


@media(max-width:991px){
.header__middle__logo {width: 77%;}
.header__middle__menus {width: 20%;}
.header__middle__logo img {max-width: 197px;margin: 27px 0 0 0;}
.main-nav .menubar__button:hover {background-color: green;}
.main-nav .menu-item:hover > a {color: white !important}
.main-nav .menubar__button {
  display: block!important;
  float: right;
  background-color: #080808;
  color: #fff;
  padding: 6px 7px;
  border-radius: 5px;
  margin: 27px auto 0;
  cursor: pointer;
  position: relative;
  z-index: 10037;
}
.main-nav .menubar__button svg{font-size: 27px;}
.main-nav ul.menuq2 {
  display: block!important;
  position: absolute;
  left: 0;
  z-index: 10007;
  background-color: green;
  border-bottom: 3px solid #ff3d00;
  right: 0;
  padding-bottom: 17px;
  padding-top: 57px;
}
.main-nav .menu-item a {margin: 10px 17px;text-align: center;color: #000000;}
.main-nav  ul.main-menu {display: none}
.main-nav .sub__menus__arrows:hover .sub__menus {margin: 0 auto;left: 0;right: 0;}
.sub__menus__Active{display: block!important;margin: 0 auto;left: 0;right: 0;}
.sub__menus__Active2{display: block!important;}
.menus__categorysss{display: none;}
.menus__categorysss2{display: none;}
.menu-item .sub__menus__full a {text-align: left;}

}

`