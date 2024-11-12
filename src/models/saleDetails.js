const db = require("../config/database");
const Products = require("./productModel");
const Sale = require("./saleModel");


const SaleDetails = db.define("saleDetails", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false
  },
  saleId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Sale,
      key: "id"
    }
  },
  productId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Products,
      key: "id"
    }
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  }
});

module.exports = SaleDetails