import mongoose from 'mongoose';
import Document from '../models/document.js';
import Grid from 'gridfs-stream';

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

let gfs;
const conn = mongoose.connection;
Grid.mongo = mongoose.mongo;

conn.once('open', () => {
  gfs = Grid(conn.db);
  gfs.collection('documents');
});


const getDocument = async (req, res) => {
  const { title } = req.params;

  try {
    const document = await Document.getDocument(title);
    if (!document) return res.status(404).json({ message: "Document not found" });
    if (document.owner !== req.user.role) return res.status(403).json({ message: "You don't have an acces" });

    gfs.files.findOne({ filename: document.documentUrl }, (err, file) => {
      if (err) {
        return res.status(500).json({ message: "Error searching for the document", error: err.message });
      }
      if (!file) {
        return res.status(404).json({ message: "Document not found" });
      }
  
      const readStream = gfs.createReadStream(file.filename);
      res.setHeader('Content-Type', file.contentType);
      res.setHeader('Content-Disposition', 'attachment; filename="' + file.filename + '"');
      readStream.pipe(res);
    });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving document", error: err.message });
  }  
};


export { getDocument }
