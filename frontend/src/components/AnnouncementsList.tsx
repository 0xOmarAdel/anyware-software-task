import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AnnouncementsTimeline from "./AnnouncementsTimeline";

const AnnouncementsList = () => {
  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: "10px",
        paddingX: 5,
        paddingY: 3,
        height: "100%",
        flexGrow: 1,
      }}
    >
      <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
        Announcements
      </Typography>
      <AnnouncementsTimeline />
    </Paper>
  );
};

export default AnnouncementsList;
