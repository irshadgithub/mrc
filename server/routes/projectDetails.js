const express = require('express');
const auth = require('../middleware/auth');
const db = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
  const { page = 1, sort = 'asc', sortColumn = 'id', search = '' } = req.query;
  const limit = 10;
  const offset = (page - 1) * limit;

  let client_id = 5529;
  let project_id = 8728;
  const searchQuery = `%${search}%`;

  

  // query 1: Get Client name using client_id
  const query1 = `
    SELECT client_id, first_name, last_name FROM crm_clients
    WHERE client_id = ?
  `;

  db.query(query1, [client_id], (err, clientResults) => {
    if (err) return res.status(500).send('Server error in query 1: ' + err);
    if (clientResults.length === 0) return res.status(404).send('Client not found');

    client_name = clientResults[0].first_name + " " + clientResults[0].last_name;

    // Query2: Get client_type (id), Project name using project_id
    const query2 = `
      SELECT client_type, project_name, project_type, worker_id, project_status, project_update, project_history, start_date FROM crm_projects
      WHERE project_id = ?
    `;
    db.query(query2, [project_id], (err, projectResults) => {
      if (err) return res.status(500).send('Server error in query 2: ' + err);

      project_name = projectResults[0].project_name;
      const client_type_id = projectResults[0].client_type;
      const project_type_id = projectResults[0].project_type;
      const project_status_id = projectResults[0].project_status;
      const worker_id = projectResults[0].worker_id;
      const project_update = projectResults[0].project_update;
      const project_history = projectResults[0].project_history;
      const start_date = projectResults[0].start_date;



      

      // Query3: Get client_type (name)
      const query3 = `
        SELECT status_name FROM crm_statuses
        WHERE status_id = ?
      `;
      db.query(query3, [client_type_id], (err, clientTypeResults) => {
        if (err) return res.status(500).send('Server error in query 3: ' + err);
        client_type = clientTypeResults[0]?.status_name || null;

        // Query4: Get project_type (name)
        const query4 = `
          SELECT status_name FROM crm_statuses
          WHERE status_id = ?
        `;
        db.query(query4, [project_type_id], (err, projectTypeResults) => {
          if (err) return res.status(500).send('Server error in query 4: ' + err);
          project_type = projectTypeResults[0]?.status_name || null;

          // Query5: Get Project Manager name
          const query5 = `
            SELECT first_name, last_name FROM crm_workers
            WHERE worker_id = ?
          `;
          db.query(query5, [worker_id], (err, projectMGRResults) => {
            if (err) return res.status(500).send('Server error in query 5: ' + err);
            project_mgr = projectMGRResults[0]?.first_name + " " + projectMGRResults[0]?.last_name;

            // Query6: Get Project Status name
          const query6 = `
          SELECT status_name FROM crm_statuses
          WHERE status_id = ?
        `;
          // return res.status(500).send( db.format(query6, [project_status_id]));
        db.query(query6, [project_status_id], (err, projectStatusResults) => {
          if (err) return res.status(500).send('Server error in query 6: ' + err);
          project_status = projectStatusResults[0]?.status_name;

          

          res.json({
            client: clientResults[0],
            project: projectResults[0] || null,
            client_name,
            client_type,
            project_name,
            project_type,
            project_mgr,
            project_status,
            project_update,
            project_history,
            start_date
          });
        }); 

           
          });
        });
      });
    });
  });
});

module.exports = router;
