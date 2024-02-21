import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import examsImage from "../assets/exams.svg";

const ExamsTips = () => {
  return (
    <Paper variant="outlined" sx={{ borderRadius: "10px" }}>
      <Grid container spacing={2} sx={{ width: "100%", margin: 0 }}>
        <Grid xs={7} paddingX={3} paddingY={2}>
          <Typography
            variant="h4"
            component="h2"
            className="gradient-text"
            sx={{ fontWeight: 700, textTransform: "uppercase" }}
          >
            exams time
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <Typography variant="subtitle1" component="p">
              Here we are, Are you ready to fight? Don't worry, we prepared some
              tips to be ready for your exams.
            </Typography>
            <Typography variant="body2" component="p">
              Nothing happens until something moves - Albert Einstein
            </Typography>
            <Button variant="contained" sx={{ width: "fit-content" }}>
              View exams tips
            </Button>
          </Box>
        </Grid>
        <Grid xs={5} sx={{ overflow: "hidden" }}>
          <img
            src={examsImage}
            style={{ height: "13rem", transform: "scale(1.8)" }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ExamsTips;
