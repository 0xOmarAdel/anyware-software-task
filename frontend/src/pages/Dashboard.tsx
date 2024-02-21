import AnnouncementsList from "../components/AnnouncementsList";
import ExamsTips from "../components/ExamsTips";
import Grid from "@mui/material/Grid";
import NewQuizzes from "../components/NewQuizzes";
import { useAxios } from "hookverse";
import { useEffect, useState } from "react";
import AnnouncementType from "../types/AnnouncementType";

const Dashboard = () => {
  const [announcements, setAnnouncements] = useState<AnnouncementType[] | null>(
    null
  );

  const { data, runAxios, loading } = useAxios({
    url: `${import.meta.env.VITE_API_URL}/announcement`,
  });

  useEffect(() => {
    runAxios();
  }, [runAxios]);

  useEffect(() => {
    if (data) {
      setAnnouncements(data.announcements);
    }
  }, [data]);

  return (
    <>
      <ExamsTips />
      <Grid container sx={{ width: "100%", margin: "1.5rem 0 0 0" }}>
        <Grid xs={9} item>
          <AnnouncementsList loading={loading} announcements={announcements!} />
        </Grid>
        <Grid xs={3} item>
          <NewQuizzes />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
