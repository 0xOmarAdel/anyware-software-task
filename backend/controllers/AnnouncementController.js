const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Announcement = require("../models/Announcement");

const getAllAnnouncements = async (req, res) => {};

const getAnnouncement = async (req, res) => {};

const createAnnouncement = async (req, res) => {};

const updateAnnouncement = async (req, res) => {};

const deleteAnnouncement = async (req, res) => {};

module.exports = {
  getAllAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
