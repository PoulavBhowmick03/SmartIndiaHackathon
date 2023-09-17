import React, { useEffect } from "react";
import "./Menu.css";
import logo from "../img/logo.png";
import {
  FaHome,
  FaCertificate,
  FaWallet,
  FaSearch,
  FaQuestion,
  FaCog,
  FaSignOutAlt,
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
        <Icon icon={<FaHome />} />
        <Icon icon={<FaCertificate />} />
        <Icon icon={<FaWallet />} />
        <Icon icon={<FaSearch />} />
        <Icon icon={<FaQuestion />} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<FaCog />} />
        <Icon icon={<FaSignOutAlt />} />
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
