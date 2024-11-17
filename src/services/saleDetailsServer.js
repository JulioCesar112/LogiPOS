const saleDetailsController = require("../controllers/saleDetailsController")


const getAllSaleDetails = async  (req,res) => {
  try {
    const data = await saleDetailsController.getSaleDetails()
    return res.status(200).json(data)
  } catch (error) {
    console.error("Error in getSales Service", error.message)
    return res.status(500).json({message:"Error in getSales",error:error.message})
  }
}

const postSaleDetails = async (req,res) => {
  const saleId = req.params
  const productId = req.body
  try {
    const newSaleDetails = saleDetailsController.createSaleDetails({saleId,productId})
    return res.status(200).json(newSaleDetails)
  } catch (error) {
    console.error("Error in postSaleDetails", error.message)
    return res.status(500).json({message:"Error in postSaleDetails",error:error.message})
  }
}

module.exports = {
  getAllSaleDetails,
  postSaleDetails

}