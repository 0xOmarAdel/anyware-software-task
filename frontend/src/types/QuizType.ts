export type OptionType = {
  optionText: string;
};

export type QuizQuestionType = {
  _id: string;
  questionText: string;
  options: OptionType[];
};

type QuizType = {
  _id: string;
  title: string;
  questions: QuizQuestionType[];
};

export default QuizType;
