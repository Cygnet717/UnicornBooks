const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    isbn: {
      type: DataTypes.BIGINT,
      allowNull: false,
    
    },
    book_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'book'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'location',
        key: 'id',
      },
    },
  
   
 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'book',
  }
);

module.exports = Book;