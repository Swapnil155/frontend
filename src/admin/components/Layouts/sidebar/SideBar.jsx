import React, { useState } from "react";
import './Sidebar.css'
import {BiSearchAlt,BiHomeAlt,BiBarChartSquare,BiChevronRight,BiBell,BiPieChart, BiHeart, BiWalletAlt} from 'react-icons/bi'
import { Link } from "react-router-dom";

// const home = document.querySelector('home')
const SideBar = () => {
const [sidebarBtnToggle, SetSidebarBtnToggle] = useState(true) 

// document.querySelector('.toggle').addEventListener('click', ()=>{
//   document.querySelector('nav').classList.toggle('close')
// })

const toggleButton = () =>{
  sidebarBtnToggle? SetSidebarBtnToggle(false ):SetSidebarBtnToggle(true) 
  if(sidebarBtnToggle){
    SetSidebarBtnToggle(false)
    // home.classList.add('add')
    document.getElementById('home').style.marginLeft = '-160px'
    document.getElementById('home').style.width= 'calc(100% - 78px)'
   
  }else{
    SetSidebarBtnToggle(true)
    document.getElementById('home').style.marginLeft = '0px'
    document.getElementById('home').style.width= 'calc(100% - 250px)'
  }
}
  return (
    <div>
      <nav
      // className="sidebar" 
      className={sidebarBtnToggle? "sidebar" : "sidebar close"} id="sidebar"
      >
        <header>
          <div className="image-text">
            <span className="image">
              <img src="logo.png" alt="" />
            </span>
            <div className="text logo-text">
              <span className="name">Codinglab</span>
              <span className="profession">Web developer</span>
            </div>
          </div>
          <BiChevronRight className="bx bx-chevron-right toggle"  onClick={toggleButton}/>
        </header>
        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <BiSearchAlt className="icon" onClick={toggleButton}/>
              <input type="text" placeholder="Search..." />
            </li>
            <div className="menu-links">
              <li className="">
                <Link to="#">
                  <BiHomeAlt className="bx bx-home-alt icon" />
                  <span className="text nav-text">Dashboard</span>
                </Link>
              </li>
              <li className="">
                <Link to="#">
                  <BiBarChartSquare className="bx bx-bar-chart-alt-2 icon"  />
                  <span className="text nav-text">Revenue</span>
                </Link>
              </li>
              <li className="">
                <Link to="#">
                  <BiBell className="bx bx-bell icon" />
                  <span className="text nav-text">Notifications</span>
                </Link>
              </li>
              <li className="">
                <Link to="#">
                  <BiPieChart className="bx bx-pie-chart-alt icon" />
                  <span className="text nav-text">Analytics</span>
                </Link>
              </li>
              <li className="">
                <Link to="#">
                  <BiHeart className="bx bx-heart icon" />
                  <span className="text nav-text">Likes</span>
                </Link>
              </li>
              <li className="">
                <Link to="#">
                  <BiWalletAlt className="bx bx-wallet icon" />
                  <span className="text nav-text">Wallets</span>
                </Link>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
