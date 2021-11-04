const router = require("express").Router();
const { Book } = require("../../models");
const withAuth = require("../../utils/auth");

//api/books
router.put("/:id", async (req, res) => {
  Book.update(req.body, { where: { id: req.params.id } })
    .then((updatedBookUser) => {
      res.status(200).json(updatedBookUser);
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
