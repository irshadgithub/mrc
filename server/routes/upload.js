const express = require('express');
const router = express.Router();
const path = require('path');

router.post('/', (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).json({ msg: 'No file uploaded' });
  }

  const file = req.files.file;
  const uploadPath = path.join(__dirname, '..', 'uploads', file.name);

  file.mv(uploadPath, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

module.exports = router;