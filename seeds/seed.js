const sequelize = require('../config/connection');
const { User, Book, Location } = require('../models');

const userData = require('./userData.json');
const bookData = require('./bookData.json');
const locationData = require('./locationData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

 await Location.bulkCreate(locationData, {
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
