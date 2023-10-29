const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const fileExtension = path.extname(file.originalname);
    cb(null, uniqueSuffix + fileExtension);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1e10 }, // Specify the file size limit (in this case, 1 GB)
  fileFilter: function (req, file, cb) {
    // Specify the file types that are allowed to be uploaded
    if (["image/jpeg", "image/png"].includes(file.mimetype)) {
      cb(null, true);
    } else {
      // Reject the file if it's not a JPEG or PNG
      cb(new Error("Only JPEG and PNG files are allowed!"), false);
    }
  },
});

module.exports = upload;
