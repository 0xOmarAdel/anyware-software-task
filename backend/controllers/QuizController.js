const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Quiz = require("../models/Quiz");

const getAllQuizzes = async (req, res) => {
  const quizzes = await Quiz.find().sort("createdAt");

  res.status(StatusCodes.OK).json({ quizzes, count: quizzes.length });
};

const getQuiz = async (req, res) => {
  const quizId = req.params.id;

  const quiz = await Quiz.findOne({ _id: quizId });

  if (!quiz) throw new NotFoundError(`No quiz with id ${quizId}`);

  res.status(StatusCodes.OK).json({ quiz });
};

const createQuiz = async (req, res) => {};

const updateQuiz = async (req, res) => {};

const deleteQuiz = async (req, res) => {
  const quizId = req.params.id;

  const quiz = await Quiz.findOneAndRemove({
    _id: quizId,
  });

  if (!quiz) throw new NotFoundError(`No quiz with id ${quizId}`);

  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllQuizzes,
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
};
