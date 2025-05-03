const Products = require(".../models/ecommers/ecom.productModel");

const getAllProducts = async () => {
  try {
    const data = await Products.findAndCountAll();
    return data;
  } catch (error) {
    console.error("Error iin getAll Prioducts", error);
    throw new Error("Could not retrive Products");
  }
};
module.exports = {
  getAllProducts,
};
