import React, { useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import Logo from "../img/logo.png";
import PB from "../img/PB.jpg";

function TopContainer() {
  useEffect(() => {
    const mouseTarget = document.getElementById("menuChevron");
    const menuContainer = document.getElementById("menuContainer");
    mouseTarget.addEventListener("mouseenter", () => {
      mouseTarget.style.transform = "rotate(180deg)";
      menuContainer.style.transform = "translateX(0px)";
    });

    menuContainer.addEventListener("mouseleave", () => {
      mouseTarget.style.transform = "rotate(0deg)";
      menuContainer.style.transform = "translateX(300px)";
    });
  }, []);

  return (
    <div className="topContainer">
      <img className="logo" src={Logo} alt="logo" width={70} />
      <div className="inputBox">
        <input type="text" placeholder="Search Users" />
        <i>
          <BiSearchAlt />
        </i>
      </div>


      <div className="profileContainer">
      <button type="button" className="btnS">0xd0c...C24BD</button>
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage">
          <img src={PB}alt="" />
        </div>
        <p className="profileName">Poulav Bhowmick</p>
        <i className="menuChevron" id="menuChevron">
          <FaChevronDown />
        </i>

        <div className="menuContainer" id="menuContainer">
          <ul>
            <li>Profile</li>
            <li>Logout</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TopContainer;
