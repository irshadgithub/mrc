const express = require('express');
const auth = require('../middleware/auth');
const db = require('../db');

const router = express.Router();

router.get('/', auth, (req, res) => {
  const { page = 1, sort = 'asc', sortColumn = 'id', search = '' } = req.query;
  const limit = 10;
  const offset = (page - 1) * limit;

  const searchQuery = `%${search}%`;
  const query = `
    SELECT * FROM reports
    WHERE name LIKE ?
    ORDER BY ${sortColumn} ${sort}
    LIMIT ? OFFSET ?
  `;
  const countQuery = `
    SELECT COUNT(*) as total FROM reports
    WHERE name LIKE ?
  `;

  db.query(countQuery, [searchQuery], (countErr, countResults) => {
    if (countErr) return res.status(500).send('Server error');
    
    const totalPages = Math.ceil(countResults[0].total / limit);

    db.query(query, [searchQuery, limit, offset], (err, results) => {
      if (err) return res.status(500).send('Server error');
      res.json({ reports: results, totalPages });
    });
  });
});

module.exports = router;