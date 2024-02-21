import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { FaHourglassHalf } from "react-icons/fa6";

const SingleQuiz = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "0.5rem",
          marginTop: "1rem",
        }}
      >
        <FaHourglassHalf
          style={{ transform: "scale(1.2)", color: "#48a296" }}
        />
        <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 500 }}>
          Quiz Title
        </Typography>
      </Box>
      <Typography
        variant="subtitle2"
        component="h3"
        sx={{ marginTop: "0.5rem", fontWeight: 500 }}
      >
        Topic: Quiz Topic
      </Typography>
      <Button variant="outlined" sx={{ marginTop: "0.5rem" }} fullWidth>
        start quiz
      </Button>
      <Divider sx={{ height: "1rem" }} />
    </>
  );
};

export default SingleQuiz;
