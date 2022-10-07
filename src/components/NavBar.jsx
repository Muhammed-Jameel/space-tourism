import React from "react";
import { NavLink } from "react-router-dom";
import { StyledNavBar } from "../StyledComponents/Navigation/StyledNavBar";
import { useState } from "react";
import { MenuIcon, CloseIcon } from "../assets/shared/index";

/* const NavLinksList = () => {
  <>
    <NavLink to="/home">
      <p className="nav-text">
        <span>00</span> HOME
      </p>
    </NavLink>
    <NavLink to="/moon">
      <p className="nav-text">
        {" "}
        <span>01</span> Destination
      </p>
    </NavLink>
    <NavLink to="/commander">
      <p className="nav-text">
        <span>02</span> Crew
      </p>
    </NavLink>
    <NavLink to="/launch-vehicle">
      <p className="nav-text">
        <span>03</span> Technology
      </p>
    </NavLink>
  </>;
}; */

const NavBar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <StyledNavBar>
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
            <g fill="none" fill-rule="evenodd">
              <circle cx="24" cy="24" r="24" fill="#FFF" />
              <path
                fill="#0B0D17"
                d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
              />
            </g>
          </svg>
        </div>

        
        \\ toggle menu section
        <div className="toggle-menu">
          {ToggleMenu ? (
            <CloseIcon
              color="#FAF8FF"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <MenuIcon
              color="#FAF8FF"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}

          {ToggleMenu && (
            <div className="menu_links">
              <NavLink to="/home" className="link">
                <p className="nav-text">
                  <span>00</span> HOME
                </p>
              </NavLink>
              <NavLink to="/moon" className="link">
                <p className="nav-text">
                  <span>01</span> Destination
                </p>
              </NavLink>
              <NavLink to="/commander" className="link">
                <p className="nav-text">
                  <span>02</span> Crew
                </p>
              </NavLink>
              <NavLink to="/launch-vehicle" className="link">
                <p className="nav-text">
                  <span>03</span> Technology
                </p>
              </NavLink>
            </div>
          )}
        </div>

        \\ end of toggle menu section
        
        

         \\ the line and the nav links container for desktop and tablet

        <div className="line"></div>
        <div className="nav-links-container">
          <NavLink to="/home">
            <p className="nav-text">
              <span>00</span> HOME
            </p>
          </NavLink>
          <NavLink to="/moon">
            <p className="nav-text">
              {" "}
              <span>01</span> Destination
            </p>
          </NavLink>
          <NavLink to="/commander">
            <p className="nav-text">
              <span>02</span> Crew
            </p>
          </NavLink>
          <NavLink to="/launch-vehicle">
            <p className="nav-text">
              <span>03</span> Technology
            </p>
          </NavLink>
        </div>
      </StyledNavBar>
    </>
  );
};

export default NavBar;
