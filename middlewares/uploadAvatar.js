const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require("multer");
require("dotenv").config();


const {ClOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env
          
cloudinary.config({
  cloud_name: ClOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "userAvatars",
    allowedFormats: [ "png", "jpg"],
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadAvatar = multer({ storage });
module.exports =  uploadAvatar ;