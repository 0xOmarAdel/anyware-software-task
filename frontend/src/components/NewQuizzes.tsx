import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import QuizList from "./QuizList";
import { useTranslation } from "react-i18next";

const NewQuizzes = () => {
  const [t] = useTranslation();

  return (
    <Paper
      variant="outlined"
      sx={{ borderRadius: "10px", paddingX: 5, paddingY: 3 }}
    >
      <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
        {t("newQuizzes")}
      </Typography>
      <QuizList />
    </Paper>
  );
};

export default NewQuizzes;
