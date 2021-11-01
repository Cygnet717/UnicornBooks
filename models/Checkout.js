const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Checkout extends Model {}

// Checkout.init(
//   {
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user',
//         key: 'id',
//       },
//     },
//     book_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'book',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'checkout',
//   }
// );

module.exports = Checkout;