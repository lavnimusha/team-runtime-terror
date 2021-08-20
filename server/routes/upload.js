const express = require("express");
const router = express.Router();
const multer = require("multer");
const AWS = require("aws-sdk");
const multerS3 = require("multer-s3");

AWS.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
  region: process.env.BUCKET_REGION,
});

const s3 = new AWS.S3();
const uploadS3 = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "teamruntimeterror",
    key: (req, file, cb) => {
      cb(null, Date.now().toString() + "-" + file.originalname);
    },
  }),
});

router.post(
  "/",
  (uploadS3.single("file"),
  (req, res) => {
    if (req.files.file === null) {
      return res.status(400).json({ msg: "no file is uploaded" });
    }

    const uploadedFile = req.files.file;
    try {
      const params = {
        Bucket: "teamruntimeterror",
        Key: `images/${uploadedFile.name}`,
        Body: uploadedFile.name,
      };
      s3.upload(params, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).send(err);
        }
        console.log(`File uploaded successfully. ${data.Location}`);
        res.json({
          fileName: uploadedFile.name,
          filePath: data.Location,
        });
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send(err);
    }
  })
);

module.exports = router;