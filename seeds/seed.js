const sequelize = require('../config/connection');
const { User, Project } = require('../models');

const userData = require('./userData.json');
const bookData = require('./booktData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 await Book.bulkCreate(bookData, {
    individualHooks: true,
    returning: true,
 });

  process.exit(0);
};

seedDatabase();
