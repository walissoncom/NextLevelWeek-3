import multer from "multer";
import path from "path";

export default {
  // Using disk storage but could be Amazon S3, Google Could Storage, etc
  storage: multer.diskStorage({
    // __dirname = Current directory. This will return the directory of the upload.ts file, in this case /config
    // The '..' means to go back a directory. So '..', '..', 'uploads' would be the same as '../../uploads
    destination: path.join(__dirname, "..", "..", "uploads"),

    // Get the request from express, the file and a call back function.
    // Create a file name with timestamp and original name (concatenated)
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    }
  })
};
