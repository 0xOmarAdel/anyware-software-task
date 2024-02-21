import Timeline from "@mui/lab/Timeline";
import SingleAnnouncement from "./SingleAnnouncement";

const AnnouncementsTimeline = () => {
  return (
    <Timeline sx={{ marginTop: "1rem", padding: 0 }}>
      <SingleAnnouncement />
      <SingleAnnouncement />
      <SingleAnnouncement />
    </Timeline>
  );
};

export default AnnouncementsTimeline;
