const express = require("express")
const router = express.Router()
const saleService = require("../services/saleService")
//? Protected routes
const passport = require("passport")
require("../middlewares/authMiddleware")(passport)


router.route("/")
.get(saleService.getAllSales)
.post(passport.authenticate("jwt",{session:false}),saleService.postSale)

router.route("/:id/details")
.get(passport.authenticate("jwt",{session:false}),)


module.exports = router