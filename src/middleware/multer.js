const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    const timeStamp = new Date().getTime();
    const fileName = file.originalname;

    cb(null, `${timeStamp}-${fileName}`);
  },
});

const upload = multer({
  storage: storage,
});

module.exports = upload;
