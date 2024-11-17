const categoryController = require("../controllers/categoryController")

const getAllCategories = async (req, res) => {
  try {
    const results = await categoryController.getAllCategories()
    return res.status(200).json(results)
  } catch (error) {
    console.error("Error in getAllCategories service", error)
    return res.status(500).json({message:"An error occurred while retriving Categories"})
  }
}

const createCategory = async(req,res) =>{
  const {name} = req.body
  if(!name){
    return res.status(400).json({message:"All fields are require"})
  }
  try {
    const newCategory = await categoryController.createCategory({name})
    return res.status(200).json({message:"Category created successfuly",user:newCategory})
  } catch (error) {
    return res.status(500).json({message:"An error occurred while create category"})
  }
}

module.exports = {
  getAllCategories,
  createCategory
}