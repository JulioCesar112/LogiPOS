const Category = require("../models/categoryModel")
const Products = require("../models/productModel")

const getAllProducts = async () => {
  try {
    const data = await Products.findAndCountAll({
      include:[
        {
          model:Category
        }
      ]
    })
    return data
  } catch (error) {
    console.error("Error in getAllProduts", error)
    throw new Error("could not retrive Products")
  }
}

const createProduct = async (data) => {
  try {
    const newProduct = await Products.create({
      UPC: data.UPC,
      name: data.name,
      description: data.description,
      price: data.price,
      categoryId: data.categoryId
    })
    return newProduct
  } catch (error) {
    console.error("Error in createProduct", error)
  }
}

module.exports = {
  getAllProducts,
  createProduct
}