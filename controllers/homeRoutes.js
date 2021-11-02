const router = require("express").Router();
const { Book, Checkout, Location, User } = require("../models");
const withAuth = require("../utils/auth");



router.get("/settings", withAuth, async (req, res) => {
  console.log('settings page')
  try {
    const userData = await User.findByPk(req.session.user_id);

    const user = userData.get({ plain: true });

    res.render("settings", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  console.log('################this')
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

router.get("/", async (req, res) => {
  console.log('home page')
  try {
    const bookData = await Book.findAll();

    const books = bookData.map((book) => book.get({ plain: true }));

    res.render("homepage", {
      books,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Book,
        },
      ],
    });

    const user = userData.get({ plain: true });

    res.render("dashboard", {
      ...user,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
