import Avatar from "../ui/Avatar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t] = useTranslation();

  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <Paper
      elevation={0}
      square
      sx={{
        padding: "1rem 2.5rem",
      }}
    >
      <Stack
        direction="row"
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          variant="h5"
          component="span"
          sx={{
            fontWeight: "700",
            color: "rgb(107 114 128)",
            fontSize: "1.875rem",
          }}
        >
          {t("welcome")} {user},
        </Typography>
        <Avatar />
      </Stack>
    </Paper>
  );
};

export default Navbar;
