import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRECT_KEY,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2, // Use .v2 here
  params: {
    folder: 'demo', // The name of the folder in cloudinary
    allowed_formats: ['jpg', 'png'], // Supported formats
    transformation: [{ width: 500, height: 500, crop: 'limit' }], // Transformation options
  }
});

const upload = multer({ storage });

export default upload;
