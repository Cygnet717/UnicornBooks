const router = require("express").Router();
const { Book } = require("../../models");
const withAuth = require("../../utils/auth");

// FIX put route to change user id
router.put("/", async (req, res) => {
  try {
    const newBook = await Book.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
