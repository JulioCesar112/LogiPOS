const Products = require("./productModel")
const Category = require("./categoryModel")
const User = require("./userModel")
const Sales = require("./saleModel")

const initModels = () => {
  Products.belongsTo(Category)
  Category.hasMany(Products)

  User.hasMany(Sales)
  Sales.belongsTo(User)

}

module.exports = initModels