import AnnouncementsList from "../components/AnnouncementsList";
import ExamsTips from "../components/ExamsTips";
import Grid from "@mui/material/Grid";
import NewQuizzes from "../components/NewQuizzes";

const Dashboard = () => {
  return (
    <>
      <ExamsTips />
      <Grid container sx={{ width: "100%", margin: "1.5rem 0 0 0" }}>
        <Grid xs={9}>
          <AnnouncementsList />
        </Grid>
        <Grid xs={3}>
          <NewQuizzes />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
