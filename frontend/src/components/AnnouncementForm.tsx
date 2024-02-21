import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const AnnouncementForm = () => {
  const [t] = useTranslation();

  const [title, setTitle] = useState("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        paddingX: "1.25rem",
        paddingY: "3rem",
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: "medium", textTransform: "capitalize" }}
      >
        New Announcement
      </Typography>
      <form
        onSubmit={submitHandler}
        style={{
          marginTop: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="name"
            label="Announcement Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
            sx={{ flexGrow: 1, width: "250px" }}
          />
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default AnnouncementForm;
