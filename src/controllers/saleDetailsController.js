const Products = require("../models/productModel")
const SaleDetails = require("../models/saleDetailsModel")


const getSaleDetails = async ( ) => {
  try {
    const data = await SaleDetails.findAndCountAll()
    return data
  } catch (error) {
    console.error("Error in getSaleDetails", error.message)
  }
}
const createSaleDetails = async (data) => {
  const product = Products.findOne({
    where: data.id
  })
  try {
    const newSaleDetails = await SaleDetails.create({
      saleId:data.saleId,
      productId: data.ProductId,
      price:product.price
    })
    return newSaleDetails
  } catch (error) {
    console.error("Error in createSaleDetails", error.message)
  }
}

module.exports= {
  getSaleDetails,
  createSaleDetails
}