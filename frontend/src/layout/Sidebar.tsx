import { NavLink } from "react-router-dom";
import sidebarLinks from "../data/sidebarLinks";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-primary-gradient flex flex-col shadow-xl drop-shadow-xl">
      <div className="mx-auto py-10">
        <span className="text-3xl text-white font-semibold tracking-wide">
          Coligo
        </span>
      </div>
      <nav className="mt-2">
        <ul>
          {sidebarLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `py-4 px-10 flex flex-row items-center gap-3 text-lg tracking-wide ${
                    isActive
                      ? "bg-gray-200 text-primary font-medium"
                      : "text-gray-200 transition duration-300 hover:bg-gray-200 hover:text-primary"
                  }`
                }
              >
                {link.icon}
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
