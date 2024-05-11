import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import fs from 'fs';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const randomName = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 36).toString(36),
    ).join('');
    cb(null, `${randomName}-${file.originalname}`);
  },
});

const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

export default (req, res, next) => {
  upload.single('picture')(req, res, (error) => {
    if (error) {
      return next(error);
    }

    if (!req.file) {
      return next();
    }

    cloudinary.uploader
      .upload(req.file.path)
      .then((result) => {
        req.body.picture = result.secure_url;
        fs.unlinkSync(req.file.path);
        next();
      })
      .catch((err) => {
        next(err);
      });
  });
};
