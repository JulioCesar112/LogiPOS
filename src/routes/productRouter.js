const express = require("express")
const router = express.Router()
const productService = require("../services/productService")

router.route("/")
.get(productService.getAllProducts)
.post(productService.postProduct)


module.exports = router

