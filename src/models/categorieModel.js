const db = require("../config/database")
const { DataTypes } = require("sequelize")

const Category = db.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

module.exports = category