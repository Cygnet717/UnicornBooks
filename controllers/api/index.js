const router = require("express").Router();
const userRoutes = require("./userRoutes");
const projectRoutes = require("./projectRoutes"); // placeholder

router.use('/users', userRoutes);
router.use('/projects', projectRoutes); // placeholder

module.exports = router;
