const router = require("express").Router();
const { Book, Checkout, Location, User } = require("../models");
const withAuth = require("../utils/auth");

// checkbox route
router.get("/:", (req, res) => {
  const isCheckedOut = document.querySelectorAll("card-body");

  isCheckedOut.forEach((book) => {
    if (book.dataset.id === undefined) {
      book.classList.remove("hide");
    }
  });
});

// location route
router.get("location/:location", async (req, res) => {
  try {
    const locationData = await Location.findAll({
      where: { location_name: req.params.location_name },
    });

    const locations = locationData.map((location) =>
      location.get({ plain: true })
    );

    res.render("dashboard", {
      ...locations,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/genre/:genre", async (req, res) => {
  console.log("Test");
  try {
    const bookGenreData = await Book.findAll({
      where: { genre: req.params.genre },
    });

    const books = bookGenreData.map((book) => book.get({ plain: true }));

    res.render("dashboard", {
      books,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
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

router.get("/settings", withAuth, async (req, res) => {
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
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
});

module.exports = router;
