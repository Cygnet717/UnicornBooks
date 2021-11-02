const router = require("express").Router();
const userRoutes = require("./userRoutes");
<<<<<<< HEAD
const bookRoutes = require("./bookRoutes");
// const checkoutRoutes = require("./checkoutRoutes");

router.use('/users', userRoutes);
router.use('/books', bookRoutes);
// router.use('/checkouts', checkoutRoutes);
=======

router.use('/users', userRoutes);
>>>>>>> 2a479b08daf1b3028d4ef8da76b84235fdede7c9

module.exports = router;
