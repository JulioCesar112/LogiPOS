const Sales = require("../models/saleModel")
const uuid = require("uuid")
const User = require("../models/userModel")

const getAllSales = async () => {
  try {
    const response = await Sales.findAndCountAll({
      include:[
        {
          model:User,
          attributes:["firstName"]
        }
      ]
    })
    return response
  } catch (error) {
    console.error("Error in getAllSales", error.message)
    throw new Error("could not retrive getAllSales")
  }
}

const createSale = async (data) => {
   try {
    const newSale = Sales.create({
      id:uuid.v4(),
      userId:data.userId,
      total:data.total
    })
    return newSale
  } catch (error) {
    console.error("Error in createSale", error.message)
  }
}

module.exports = {
  getAllSales,
  createSale
}