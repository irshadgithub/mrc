const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log('Login attempt:', email); // Log the login attempt
  
  const query = 'SELECT * FROM users WHERE email = ?';
  db.query(query, [email], async (err, results) => {
    if (err) {
      console.error('Database error:', err); // Log database errors
      return res.status(500).send('Server error');
    }
    if (results.length === 0) {
      console.log('No user found with email:', email); // Log if no user found
      return res.status(400).send('Invalid credentials');
    }
    const user = results[0];
    try {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log('Password mismatch for user:', email); // Log if password mismatch
        return res.status(400).send('Invalid credentials');
      }
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      console.log('Login successful for user:', email); // Log successful login
      res.json({ token });
    } catch (compareError) {
      console.error('Error comparing passwords:', compareError); // Log errors during password comparison
      return res.status(500).send('Server error');
    }
  });
});

module.exports = router;