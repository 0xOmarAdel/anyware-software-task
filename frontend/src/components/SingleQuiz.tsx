import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { FaHourglassHalf } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const SingleQuiz = () => {
  const [t] = useTranslation();

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
          {t("quizTitle")}
        </Typography>
      </Box>
      <Button variant="outlined" sx={{ marginTop: "0.5rem" }} fullWidth>
        {t("startQuiz")}
      </Button>
      <Divider sx={{ height: "1rem" }} />
    </>
  );
};

export default SingleQuiz;
