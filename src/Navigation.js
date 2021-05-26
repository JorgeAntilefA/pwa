import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHome,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

const tabs = [
  {
    route: "/",
    icon: faHome,
    label: "Login",
  },
  {
    route: "/manifests",
    icon: faSearch,
    label: "Manifiestos",
    display: "none",
  },
  {
    route: "/pendings",
    icon: faUserCircle,
    label: "Pendientes",
  },
];

const Navigation = (props) => {
  const location = useLocation();

  if (
    location.pathname.toLowerCase() !== "/manifests" &&
    location.pathname.toLowerCase() !== "/"
  ) {
    return (
      <div>
        <nav
          className="navbar fixed-bottom navbar-light d-block d-lg-none bottom-tab-nav"
          role="navigation"
        >
          <Nav className="w-100">
            <div
              className=" d-flex flex-row justify-content-around w-100"
              style={{ backgroundColor: "black" }}
            >
              {tabs.map((tab, index) => (
                <NavItem key={`tab-${index}`}>
                  <NavLink
                    to={tab.route}
                    className="nav-link bottom-nav-link"
                    activeClassName="active"
                  >
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <div className="bottom-tab-label">{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))}
            </div>
          </Nav>
        </nav>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Navigation;
