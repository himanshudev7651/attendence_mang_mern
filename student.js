const express = require('express');
const { getStudentsByClass } = require('../controllers/student');
const router = express.Router();

// Route to fetch students of a specific class
router.get('/class/:className', getStudentsByClass);

module.exports = router;
