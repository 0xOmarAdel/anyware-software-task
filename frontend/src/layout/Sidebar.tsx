import sidebarLinks from "../data/sidebarLinks";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SidebarLink from "./SidebarLink";
import { IoMdExit } from "react-icons/io";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <Paper
      elevation={3}
      square
      sx={{
        minHeight: "100vh",
        width: "16rem",
        backgroundImage: "linear-gradient(to bottom, #12567b, #398593)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box marginX="auto" paddingY="2.5rem">
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "600",
            color: "white",
            letterSpacing: "0.025em",
          }}
        >
          Coligo
        </Typography>
      </Box>
      <nav style={{ marginTop: "0.5rem" }}>
        <ul>
          {sidebarLinks.map((link) => (
            <SidebarLink key={link.id} link={link} />
          ))}
          <li>
            <button
              onClick={logoutHandler}
              className="sidebar-link"
              style={{ width: "100%" }}
            >
              <IoMdExit style={{ fontSize: "1.5rem" }} />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </Paper>
  );
};

export default Sidebar;
