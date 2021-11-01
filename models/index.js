const User = require('./User');
const Book = require('./Book');
const Location = require('./Location');
const Checkout = require('./Checkout');

Book.hasOne(Location, {
    foreignKey: 'location_id',
  });
  Location.hasMany(Book, {
    foreignKey: 'location_id',
  });
  Book.belongsTo(User, {
    foreignKey: 'book_id',
  });
  User.hasMany(Book,{
      foreignKey: 'book_id'
  });


// Book.hasMany(Location, {
//   foreignKey: 'location_id',
// });

// Book.belongsTo(Location, {
//   foreignKey: 'book_id',
// });

// // Define a Driver as having one License to create a foreign key in the `license` table
// Driver.hasOne(License, {
//   foreignKey: 'driver_id',
//   // When we delete a Driver, make sure to also delete the associated License.
//   onDelete: 'CASCADE',
// });

// // We can also define the association starting with License
// License.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

// // Define a Driver as having many Cars, thus creating a foreign key in the `car` table
// Driver.hasMany(Car, {
//   foreignKey: 'driver_id',
//   onDelete: 'CASCADE',
// });

// // The association can also be created from the Car side
// Car.belongsTo(Driver, {
//   foreignKey: 'driver_id',
// });

module.exports = { User, Book, Location, Checkout };