const express = require ("express");
const router = express.Router();

const StudentController = require("../Controllers/StudentController");
const CourseController = require("..//Controllers/CourseController");

router.post("/register",StudentController.createStudent);
router.post("/course",CourseController.createCourse);

module.exports = router;

