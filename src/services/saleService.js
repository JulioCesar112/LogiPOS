const saleControllers = require("../controllers/saleController")

const getAllSales = async (req, res) => {

  try {
    const results = await saleControllers.getAllSales()
    return res.status(200).json(results)
  } catch (error) {
    console.error("Error in getAllSales service", error)
    return res.status(500).json({ message: "An error occurred while retriving Sales" })
  }
}

const postSale = async (req, res) => {
  const userId = req.user.id
  const { total } = req.body
  if(!userId,!total){
    return res.status(400).json({message:"All fields are require"})
  }

  try {
    const newSale = await saleControllers.createSale({ userId, total })
    return res.status(400).json({ message: "Sale created successfuly", sale: newSale })
  } catch (error) {
    console.error("Error in postSale service", error.message)
    return res.status(500).json({ message: "An error occurred while createPost" })
  }
}

module.exports = {
  getAllSales,
  postSale
}