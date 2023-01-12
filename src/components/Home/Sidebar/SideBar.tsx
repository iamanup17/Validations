import React from "react";
import {
  NavIcon,
  NavItem,
  NavItems,
  Sidebar,
  NavItemName,
} from "./../homepage.styles";
import { BiTimer } from "react-icons/bi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { ProjectOutlined } from "@ant-design/icons";
import { AiOutlineTeam } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";

import { NavLink } from "react-router-dom";

const SideBar = () => {
  let activeStyle = {
    // textDecoration: "underline",
    color: " #47ceff",
    background:"#ededed",
    borderRadius:"5px"
  };
  return (
    <Sidebar>
      <NavItems>
        <NavLink
          to="/tracker"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          <NavItem>
            <NavIcon>
              <BiTimer style={{ color: "#29a9df" }} />
            </NavIcon>
            <NavItemName style={{ }}>Time Tracker</NavItemName>
          </NavItem>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/tracker/two"
        >
          <NavItem>
            <NavIcon>
              <MdOutlineDashboardCustomize />
            </NavIcon>
            <NavItemName>Dashboard</NavItemName>
          </NavItem>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/tracker/three"
        >
          <NavItem>
            <NavIcon>
              <TbReportSearch />
            </NavIcon>
            <NavItemName>Reports</NavItemName>
          </NavItem>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/tracker/four"
        >
          <NavItem>
            <NavIcon>
              <ProjectOutlined style={{}} />
            </NavIcon>
            <NavItemName>Projects</NavItemName>
          </NavItem>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/tracker/five"
        >
          <NavItem>
            <NavIcon>
              <AiOutlineTeam />
            </NavIcon>
            <NavItemName>Team</NavItemName>
          </NavItem>
        </NavLink>
        <NavLink
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/tracker/six"
        >
          <NavItem>
            <NavIcon>
              <IoMdSettings />
            </NavIcon>
            <NavItemName>Settings</NavItemName>
          </NavItem>
        </NavLink>
      </NavItems>
    </Sidebar>
  );
};

export default SideBar;
