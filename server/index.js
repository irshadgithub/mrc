const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fileUpload = require('express-fileupload');
const authRoutes = require('./routes/auth');
const reportRoutes = require('./routes/reports');
const uploadRoutes = require('./routes/upload');
const projectDetails = require('./routes/projectDetails');
const projectList = require('./routes/projectList');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Middleware for file uploads
app.use(fileUpload());

app.use('/api/auth', authRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/project_details', projectDetails);
app.use('/api/project_list', projectList);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});