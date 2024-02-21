import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { QuizQuestionType } from "../../types/QuizType";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

type Props = {
  question: QuizQuestionType;
};

const QuizQuestion: React.FC<Props> = ({ question }) => {
  return (
    <Stack direction="column" spacing={1}>
      <p>{question.questionText}</p>
      <Stack direction="row" spacing={2}>
        {question.options.map((option) => (
          <Item>{option.optionText}</Item>
        ))}
      </Stack>
    </Stack>
  );
};

export default QuizQuestion;
