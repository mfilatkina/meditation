import { Link, NavLink } from "react-router-dom";

import "./sidebar.scss";
import userIcon from "../../resources/icons/user.svg";
import studyIcon from "../../resources/icons/study.svg";
import timerIcon from "../../resources/icons/timer.svg";
import logoutIcon from "../../resources/icons/logout.svg";
import sunIcon from "../../resources/icons/sun.svg";
import moonIcon from "../../resources/icons/moon.svg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <Link to="/">
          <h1 className="logo">meditation</h1>
        </Link>
      </div>
      <hr />
      <div className="sidebar__center">
        <nav className="sidebar__menu">
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#9f0013" : "inherit",
                })}
                to="/"
              >
                <img src={userIcon} alt="user" />
                <span>Профиль</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#9f0013" : "inherit",
                })}
                to="/lessons"
              >
                <img src={studyIcon} alt="study" />
                <span>Обучение</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => ({
                  color: isActive ? "#9f0013" : "inherit",
                })}
                to="/timer"
              >
                <img src={timerIcon} alt="timer" />
                <span>Таймер</span>
              </NavLink>
            </li>
            <li>
              {/* <Link to="/"> */}
              <img src={logoutIcon} alt="logout" />
              <span>Выйти</span>
              {/* </Link> */}
            </li>
          </ul>
        </nav>
      </div>
      <div className="sidebar__bottom">
        <label htmlFor="switch" className="switch">
          <img src={sunIcon} alt="sun" />
          <input type="checkbox" id="switch" className="visually-hidden" />
          <span>Dark mode</span>
          <img src={moonIcon} alt="moon" />
        </label>
      </div>
    </div>
  );
}

export default Sidebar;
