const router = require("express").Router();
const { User } = require("../../models");
const withAuth = require("../../utils/auth");

//new user route
router.post("/", async (req, res) => {
  try {
    const userData = await User.create(
      req.body,
      );

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//re-add withAuth, if error is pw not long enough <-- have browser check or use an error message

//update user route
router.put("/:id", async (req, res) => {
  console.log('updating user')
  User.update(req.body, { where: { id: req.params.id } })
    .then((updatedUser) => {
      res.status(200).json(updatedUser);
    })
    .catch((err) => res.status(400).json(err));
});

//delete user route
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    
    req.session.destroy(() => {
      res.status(204).end();
    });
    
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// login user - DONE
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//logout user - DONE?
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
