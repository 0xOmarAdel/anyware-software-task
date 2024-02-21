import sidebarLinks from "../data/sidebarLinks";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SidebarLink from "./SidebarLink";

const Sidebar = () => {
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
        </ul>
      </nav>
    </Paper>
  );
};

export default Sidebar;
