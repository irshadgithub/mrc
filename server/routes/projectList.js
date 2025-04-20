const express = require('express');
const auth = require('../middleware/auth');
const db = require('../db');

const router = express.Router();

// router.get('/', auth, (req, res) => {
  router.get('/', (req, res) => {
  const { page = 1, sort = 'asc', sortColumn = 'project_id', search = '' } = req.query;
  const limit = 10;
  const offset = (page - 1) * limit;

  const searchQuery = `%${search}%`;
  let client_id = 6;
  const query = `
    SELECT * FROM crm_projects
    WHERE client_id = ?
    ORDER BY ${sortColumn} ${sort}
    LIMIT ? OFFSET ?
  `;
  const countQuery = `
    SELECT COUNT(*) as total FROM crm_projects
    WHERE client_id = ?
  `;

  db.query(countQuery, [client_id], (countErr, countResults) => {
    if (countErr) return res.status(500).send('Server error'+countErr);
    
    const totalPages = Math.ceil(countResults[0].total / limit);

    db.query(query, [client_id, limit, offset], (err, results) => {
      if (err) return res.status(500).send('Server error'+err);
      res.json({ reports: results, totalPages });
    });
  });
});

module.exports = router;