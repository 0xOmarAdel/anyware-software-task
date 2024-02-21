import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import QuizList from "./QuizList";
import { useTranslation } from "react-i18next";
import QuizType from "../types/QuizType";

type Props = {
  loading: boolean;
  quizzes: QuizType[];
};

const NewQuizzes: React.FC<Props> = ({ loading, quizzes }) => {
  const [t] = useTranslation();

  return (
    <Paper
      variant="outlined"
      sx={{
        borderRadius: "10px",
        paddingX: 5,
        paddingY: 3,
        width: { xs: "100%", md: "fit-content" },
        height: "fit-content",
      }}
    >
      <Typography variant="h5" component="h3" sx={{ fontWeight: 500 }}>
        {t("newQuizzes")}
      </Typography>
      {!loading && quizzes ? (
        <QuizList quizzes={quizzes} />
      ) : (
        <p> {t("loading")}</p>
      )}
    </Paper>
  );
};

export default NewQuizzes;
