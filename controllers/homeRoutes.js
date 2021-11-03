const router = require("express").Router();
const { Book, Checkout, Location, User } = require("../models");
const withAuth = require("../utils/auth");

// checkbox route
router.get("/checkbox", async (req, res) => {
  const bookData = await Book.findAll();
  console.log('somthing``````````````````````````')
  console.log(bookData)
  console.log('somthing``````````````````````````')
  const books = bookData.map((book) => book.get({ plain: true }));
  console.log(books)
  books.forEach((book) => {
    if (book.user_id != null) {
      book.classList.add("hide");
    }
  });
  res.render("homepage", {
    books,
    logged_in: req.session.logged_in,
  });
});

// location route
router.get("/location/:location", async (req, res) => {
  console.log("-----------------------------work");
  try {
    const locationData = await Book.findAll({
      where: { location_id: req.params.location },
    });

    const books = locationData.map((location) => location.get({ plain: true }));
    console.log(books)
    res.render("homepage", { books });
  } catch (err) {
    res.status(500).json(err);
  }
});
// WORKS!! Yay!
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

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }

  res.render("login");
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

module.exports = router;
