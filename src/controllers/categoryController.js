const Categories = require("../models/categoryModel")

const getAllCategories  = async () => {
  try {
    const data = await Categories.findAll()
    return data
  } catch (error) {
    console.error("Error in getAllCategories", error)
    throw new Error("could not retrive  Categories.")
  }
}

const getCategoryById = async(id) => {
  try {
    const data = await Categories.findOne({
      where:{
        id
      }
    })
    return data
  } catch (error) {
    console.error("Error in getCategoryById", error)
    throw new Error(`could not retrive category with ID${id}`)
  }
}

const createCategory = async (data) => {
  try {
    const newCategory = await Categories.create({
      name:data.name
    })
    return newCategory
  } catch (error) {
    console.error("Error in createCategory", error)
  }
}

const deleteCategory = async (id) => {
  try {
    await Categories.destroy({
      where:{
        id
      }
    })
  } catch (error) {
    console.error("Error in deleteCategory", error)
  }
} 

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  deleteCategory
}