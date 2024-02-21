import Stack from "@mui/material/Stack";
import AnnouncementForm from "../components/AnnouncementForm";
import AnnouncementsList from "../components/AnnouncementsList";

const Announcements = () => {
  return (
    <Stack direction="row" spacing={5}>
      <AnnouncementsList />
      <AnnouncementForm />
    </Stack>
  );
};

export default Announcements;
