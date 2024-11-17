const express = require("express")
const router = express.Router()
const categoryService = require("../services/categoryService")

router.route("/")
.get(categoryService.getAllCategories)
.post(categoryService.createCategory)

module.exports = router