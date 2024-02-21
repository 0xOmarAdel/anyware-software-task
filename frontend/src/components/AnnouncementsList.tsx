import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import AnnouncementsTimeline from "./AnnouncementsTimeline";
import AnnouncementType from "../types/AnnouncementType";

type Props = {
  loading: boolean;
  announcements: AnnouncementType[];
  deleteAnnouncement?: (_id: AnnouncementType["_id"]) => void;
  setSelectedAnnouncement?: React.Dispatch<
    React.SetStateAction<AnnouncementType | null>
  >;
  displayActions?: boolean;
};

const AnnouncementsList: React.FC<Props> = ({
  loading,
  announcements,
  deleteAnnouncement,
  setSelectedAnnouncement,
  displayActions,
}) => {
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
      {!loading && announcements ? (
        <AnnouncementsTimeline
          announcements={announcements}
          deleteAnnouncement={deleteAnnouncement}
          setSelectedAnnouncement={setSelectedAnnouncement}
          displayActions={displayActions}
        />
      ) : (
        <p>Loading...</p>
      )}
    </Paper>
  );
};

export default AnnouncementsList;
