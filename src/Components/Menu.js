import React, { useEffect } from "react";
import "./Menu.css";
import { Link } from 'react-router-dom';

import {
  FaHome,
  FaCertificate,
  FaWallet,
  FaSearch,
  FaInfo,
  FaCog,
  FaSignOutAlt,
  FaPlus
} from "react-icons/fa";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  return (
    <menu>
      <ul id="mainMenu">
        <li>
          <Link to="/">
            <FaHome /> 
          </Link>
        </li>
        <li>
          <Link to="../certificate">
            <FaCertificate /> 
          </Link>
        </li>
        <li>
          <Link to="/search">
            <FaSearch /> 
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfo /> 
          </Link>
        </li>
        <li>
          <Link to="/generate">
            <FaPlus /> 
          </Link>
        </li>
      </ul>

      <ul className="lastMenu">
        <li>
          <Link to="/settings">
            <FaCog /> 
          </Link>
        </li>
        <li>
          <Link to="/logout">
            <FaSignOutAlt />
          </Link>
        </li>
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
