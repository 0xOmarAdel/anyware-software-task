import SingleQuiz from "./SingleQuiz";
import QuizType from "../types/QuizType";

type Props = {
  quizzes: QuizType[];
};

const QuizList: React.FC<Props> = ({ quizzes }) => {
  return (
    <>
      {quizzes.map((quiz, index) => (
        <SingleQuiz
          key={quiz._id}
          quiz={quiz}
          lastElement={index + 1 === quizzes.length}
        />
      ))}
    </>
  );
};

export default QuizList;
