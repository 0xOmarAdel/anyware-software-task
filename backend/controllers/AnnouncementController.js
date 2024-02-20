const { StatusCodes } = require("http-status-codes");
const { NotFoundError, BadRequestError } = require("../errors");
const Announcement = require("../models/Announcement");

const getAllAnnouncements = async (req, res) => {
  const announcements = await Announcement.find().sort("createdAt");

  res
    .status(StatusCodes.OK)
    .json({ announcements, count: announcements.length });
};

const getAnnouncement = async (req, res) => {
  const announcementId = req.params.id;

  const announcement = await Announcement.findOne({ _id: announcementId });

  if (!announcement)
    throw new NotFoundError(`No announcement with id ${announcementId}`);

  res.status(StatusCodes.OK).json({ announcement });
};

const createAnnouncement = async (req, res) => {};

const updateAnnouncement = async (req, res) => {};

const deleteAnnouncement = async (req, res) => {
  const announcementId = req.params.id;

  const announcement = await Announcement.findOneAndRemove({
    _id: announcementId,
  });

  if (!announcement)
    throw new NotFoundError(`No announcement with id ${announcementId}`);

  res.status(StatusCodes.OK).send();
};

module.exports = {
  getAllAnnouncements,
  getAnnouncement,
  createAnnouncement,
  updateAnnouncement,
  deleteAnnouncement,
};
