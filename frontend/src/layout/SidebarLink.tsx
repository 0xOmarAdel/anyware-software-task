import { NavLink } from "react-router-dom";

const SidebarLink = ({ link }) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) => `sidebar-link ${isActive && "active"}`}
      >
        {link.icon}
        {link.text}
      </NavLink>
    </li>
  );
};

export default SidebarLink;
