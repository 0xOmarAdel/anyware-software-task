const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Quiz = require("../models/Quiz");

const getAllQuizzes = async (req, res) => {};

const getQuiz = async (req, res) => {};

const createQuiz = async (req, res) => {};

const updateQuiz = async (req, res) => {};

const deleteQuiz = async (req, res) => {};

module.exports = {
  getAllQuizzes,
  getQuiz,
  createQuiz,
  updateQuiz,
  deleteQuiz,
};
