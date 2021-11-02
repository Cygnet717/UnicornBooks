const router = require("express").Router();
const userRoutes = require("./userRoutes");
const bookRoutes = require("./bookRoutes");
// const checkoutRoutes = require("./checkoutRoutes");

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
// router.use('/checkouts', checkoutRoutes);

module.exports = router;
