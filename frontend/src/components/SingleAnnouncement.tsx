import Typography from "@mui/material/Typography";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const SingleAnnouncement = () => {
  return (
    <TimelineItem sx={{ minHeight: "60px" }}>
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle1" component="p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, sit?
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export default SingleAnnouncement;
