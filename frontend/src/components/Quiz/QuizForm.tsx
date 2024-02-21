import { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useAxios } from "hookverse";
import QuizType from "../../types/QuizType";

type Option = {
  optionText: string;
};

interface Question {
  questionText: string;
  options: Option[];
  [key: string]: string | Option[];
}

type Props = {
  selectedQuiz: QuizType | null;
  setSelectedQuiz: React.Dispatch<React.SetStateAction<QuizType | null>>;
  addQuiz: (newAnnouncement: QuizType) => void;
  updateQuiz: (quiz: QuizType) => void;
};

const defaultQuestion = {
  questionText: "",
  options: [
    { optionText: "" },
    { optionText: "" },
    { optionText: "" },
    { optionText: "" },
  ],
};

const QuizForm: React.FC<Props> = ({
  selectedQuiz,
  setSelectedQuiz,
  addQuiz,
  updateQuiz,
}) => {
  const [quizTitle, setQuizTitle] = useState<string>("");
  const [questions, setQuestions] = useState<Question[]>([defaultQuestion]);

  useEffect(() => {
    setQuizTitle(selectedQuiz?.title || "");
    setQuestions(selectedQuiz?.questions || [defaultQuestion]);
  }, [selectedQuiz]);

  const handleQuestionChange = (
    index: number,
    fieldName: string,
    value: string
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][fieldName] = value;
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (
    questionIndex: number,
    optionIndex: number,
    value: string
  ) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].options[optionIndex] = {
      optionText: value,
    };
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([
      ...questions,
      {
        questionText: "",
        options: [
          { optionText: "" },
          { optionText: "" },
          { optionText: "" },
          { optionText: "" },
        ],
      },
    ]);
  };

  const { data: newQuiz, runAxios: createQuiz } = useAxios({
    url: `${import.meta.env.VITE_API_URL}/quiz`,
    method: "POST",
    body: {
      title: quizTitle,
      questions: questions.map((question) => ({
        questionText: question.questionText,
        options: question.options.map((option) => ({
          optionText: option.optionText,
        })),
      })),
    },
  });

  useEffect(() => {
    if (newQuiz) {
      addQuiz(newQuiz);
    }
  }, [newQuiz, addQuiz]);

  const { data: updatedQuiz, runAxios: patchQuiz } = useAxios({
    url: `${import.meta.env.VITE_API_URL}/quiz/${selectedQuiz?._id}`,
    method: "PATCH",
    body: {
      title: quizTitle,
      questions: questions.map((question) => ({
        questionText: question.questionText,
        options: question.options.map((option) => ({
          optionText: option.optionText,
        })),
      })),
    },
  });

  useEffect(() => {
    if (updatedQuiz) {
      updateQuiz(updatedQuiz);
    }
  }, [updatedQuiz, updateQuiz]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedQuiz) {
      await patchQuiz();
      setSelectedQuiz(null);
    } else {
      await createQuiz();
    }
  };

  return (
    <Paper
      variant="outlined"
      sx={{
        paddingX: "1.25rem",
        paddingY: "3rem",
        borderRadius: "10px",
        height: "fit-content",
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: "medium", textTransform: "capitalize" }}
      >
        New Quiz
      </Typography>
      <form
        onSubmit={submitHandler}
        style={{
          marginTop: "1rem",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            id="name"
            label="Quiz Title"
            variant="outlined"
            value={quizTitle}
            onChange={(e) => setQuizTitle(e.target.value)}
            autoComplete="off"
            sx={{ flexGrow: 1, width: "250px" }}
          />
          {questions.map((question, questionIndex) => (
            <>
              <TextField
                key={questionIndex}
                id="name"
                label={`Question ${questionIndex + 1} Title`}
                variant="outlined"
                value={question.questionText}
                onChange={(e) =>
                  handleQuestionChange(
                    questionIndex,
                    "questionText",
                    e.target.value
                  )
                }
                autoComplete="off"
                size="small"
                sx={{ flexGrow: 1, width: "250px" }}
              />
              {question.options.map((option, optionIndex) => (
                <TextField
                  id="name"
                  label={`Option ${optionIndex + 1}`}
                  variant="outlined"
                  value={option.optionText}
                  onChange={(e) =>
                    handleOptionChange(
                      questionIndex,
                      optionIndex,
                      e.target.value
                    )
                  }
                  autoComplete="off"
                  size="small"
                  sx={{ flexGrow: 1, width: "250px" }}
                />
              ))}
            </>
          ))}
          <Button variant="contained" onClick={handleAddQuestion} fullWidth>
            Add Question
          </Button>
          <Button variant="contained" type="submit" fullWidth>
            Submit
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default QuizForm;
