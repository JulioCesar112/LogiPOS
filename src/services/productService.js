const productController = require("../controllers/productController")

const getAllProducts = async (req,res)=> {
  try {
    const data = await productController.getAllProducts()
    return res.status(200).json(data)
  } catch (error) {
    console.error("Error in getAllProducts Service")
    return res.status(500).json({message:"An error occurred while retriving Products"})}
}

const postProduct = async(req,res) => {
  const {UPC, name, description,price,categoryId} = req.body

  if(!UPC,!name,!description,!price,!categoryId){
    return res.status(400).json({message:"All fields are require"})
  }
  try {
    const data = await productController.createProduct({UPC,name,description,price,categoryId})
    return res.status(200).json(data)
  } catch (error) {
    console.error("Error in postProduct service",error)
    return res.status(500).json({message:"An error occurrent while create Post"})
    
  }
}

module.exports = {
  getAllProducts,
  postProduct
}