import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import Document from '../models/document.js';

const storage = new GridFsStorage({
  url: process.env.DATABASE_URL,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: 'documents'
    };
  }
});

const upload = multer({ storage }).single('file');


const uploadDocument = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      return res.status(500).json({ message: "File upload failed", success: false, error: err.message });
    }
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded", success: false });
      }

      var { title, description, owner } = req.body;
      if (!title || !owner) {
        return res.status(400).json({ message: "Missing required metadata", success: false });
      }

      const sanitizeInput = (input) => {
        if (typeof input === 'string') {
          // Replace unwanted quotation marks, only keep the innermost quotes if needed
          return input.replace(/^"|"$/g, '');
        }
        return input;
      };

      title = sanitizeInput(title);
      owner = sanitizeInput(owner);

      console.log("params", title, description, owner)
      const data = {
        title,
        description,
        owner: owner.toUpperCase(),
        documentUrl: req.file.filename,
        fileId: req.file.id
      };

      const newDocument = await Document.createDocument(data);
      res.json({
        message: "File uploaded successfully",
        success: true,
        document: newDocument
      });

    } catch (error) {
      return res.status(500).json({ message: "Error processing upload", success: false, error: error.message });
    }
  });
};

export { uploadDocument };
