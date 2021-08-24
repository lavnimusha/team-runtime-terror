const asyncHandler = require("express-async-handler");
const Notification = require("../models/Notification");
const User = require("../models/User");

exports.createNotification = asyncHandler(async (req, res) => {
  const { title, type, senderId, recipientId, message } = req.body;
  await User.findOne({ _id: senderId }, function (err) {
    if (err) {
      res.status(404).send("Sender not found!!");
    }
  });
  await User.findOne({ _id: recipientId }, function (err) {
    if (err) {
      res.status(404).send("Receiver not found");
    }
  });

  try {
    const notification = await Notification.create({
      type,
      title,
      recipientId,
      senderId,
      message,
      date,
    });
    res.status(201).json(notification);
  } catch (err) {
    res.status(500).json(err);
  }
});

exports.getAllNotifications = asyncHandler(async (req, res) => {
  const { recipientId } = req.user.id;
  await User.findOne({ _id: recipientId }, function (err) {
    if (err) {
      res.status(404).send("Receiver not found!");
    }
  });
  try {
    const allNotifications = await Notification.find({
      _id: recipientId,
    });
    if (!allNotifications) {
      res.send("No notifications found!");
    }
    res.status(200).json(allNotifications);
  } catch (err) {
    res.status(500).json(err);
  }
});

exports.markNotificationRead = asyncHandler(async (req, res, next) => {
  const notification_id = req.params.notification_id;
  const notification = Notification.findOne(
    { _id: notification_id },
    function (err) {
      if (err) {
        res.status(404).send("Notification not found!!");
      }
    }
  );
  if (notification) {
    const notification = await Notification.updateOne(
      { _id: notification_id },
      { isRead: true },
      function (err) {
        if (err) {
          res.status(500).send("Internal Server Error!");
        }

        res.status(200).json(notification);
      }
    );
  }
});

exports.getUnreadNotifications = asyncHandler(async (req, res, next) => {
  const { recipientId } = req.user.id;
  await User.findOne({ _id: recipientId }, function (err) {
    if (err) {
      res.status(404).send("Receiver not found");
    }
  });

  try {
    const unReadNotifications = await Notification.find({
      isRead: false,
    });
    if (!unReadNotifications) {
      res.send("No notifications found!");
    }
    res.status(200).json(unReadNotifications);
  } catch (err) {
    res.status(500).json(err);
  }
});