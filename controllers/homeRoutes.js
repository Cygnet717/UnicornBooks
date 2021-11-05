const router = require("express").Router();
const { Book, Checkout, Location, User } = require("../models");
const withAuth = require("../utils/auth");

// checkbox results route
router.get("/checkbox", async (req, res) => {
  const bookData = await Book.findAll({
    include: Location
  });
  const allBooks = bookData.map((book) => book.get({ plain: true }));
  const books = []
  allBooks.forEach((book) => {
    if (book.user_id === null) {
      books.push(book)
    }
  });
  res.render("homepage", {
    books,
    user_id: req.session.user_id,
    username: req.session.username,
    logged_in: req.session.logged_in,
  });
});

// location results route
router.get("/location/:location", async (req, res) => {
  try {
    const locationData = await Book.findAll({
      where: { location_id: req.params.location },
      include: Location
    });
    const books = locationData.map((location) => location.get({ plain: true }));
    res.render("homepage", { books,
      user_id: req.session.user_id,
      username: req.session.username,
      logged_in: req.session.logged_in, 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// genre results route
router.get("/genre/:genre", async (req, res) => {
  try {
    const bookGenreData = await Book.findAll({
      where: { genre: req.params.genre },
      include: Location
    });
    const books = bookGenreData.map((book) => book.get({ plain: true }));
    res.render("homepage", {
      books,
      user_id: req.session.user_id,
      username: req.session.username,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//login page route
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/dashboard");
    return;
  }
  res.render("login");
});

//homepage route
router.get("/", async (req, res) => {
  try {
    const bookData = await Book.findAll({
      include: Location
    });
    const books = bookData.map((book) => book.get({ plain: true }));
    res.render("homepage", {
      books,
      user_id: req.session.user_id,
      username: req.session.username,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//dashboard route
router.get("/dashboard/:id", async (req, res) => {
  try {
    const bookData = await Book.findAll(
      {
        where: {user_id: req.params.id}
      }
    );
    const books = bookData.map((book) => book.get({ plain: true })); 
    res.render("dashboard", {
      books,
      user_id: req.session.user_id,
      username: req.session.username,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//settings page route
router.get("/settings", async (req, res) => {
  try{
    const userData = await User.findByPk( req.session.user_id)
    const user = userData.get({ plain: true })
    res.render("settings", {
      user,
      user_id: req.session.user_id,
      username: req.session.username,
      logged_in: req.session.logged_in,
    })
  } catch (err){
    res.status(500).json(err)
  }
})

module.exports = router;
