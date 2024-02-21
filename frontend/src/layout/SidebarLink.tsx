import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SidebarLink = ({ link }) => {
  const [t] = useTranslation();

  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) => `sidebar-link ${isActive && "active"}`}
      >
        {link.icon}
        {t(link.text)}
      </NavLink>
    </li>
  );
};

export default SidebarLink;
