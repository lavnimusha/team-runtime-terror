const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");
const User = require("../models/User");

exports.createNotification = asyncHandler(async (req, res, next) => {
  const body = req.body;
  try {
    const user = await User.findById(req.user.id);
    const notification = await Notification.create({
      to: body.to,
      from: req.user.id,
      notification: body.notification,
      profilePic: user.profilePic,
      contestId: body.contestId,
    });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json(err);
  }
});

exports.getNotification = asyncHandler(async (req, res, next) => {
  try {
    const allNotifications = await Notification.find({
      to: req.user.id,
    });
    res.status(200).json(allNotifications);
  } catch (err) {
    res.status(500).json(err);
  }
});

exports.getAllNotification = asyncHandler(async (req, res, next) => {
  try {
    const allNotifications = await Notification.find({
      to: req.user.id,
    });
    res.status(200).json(allNotifications);
  } catch (err) {
    res.status(500).json(err);
  }
});

exports.markNotification = asyncHandler(async (req, res, next) => {
  const body = req.body;
  const newNotification = {
    opened: body.opened,
    to: body.to,
    from: body.from,
    notification: body.notification,
    contestId: body.contestId,
  };
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      newNotification,
      { new: true }
    );
    res.status(200).json(notification);
  } catch (err) {
    res.status(500).json(err);
  }
});
