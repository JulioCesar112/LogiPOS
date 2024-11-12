const db = require("../config/database")
const {DataTypes} =require("sequelize")
const category = require("./categorieModel")

const Products = db.define("products",{
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull:false,
    defaultValue: DataTypes.UUIDV4
  },
  UPC:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
  },
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  description:{
    type:DataTypes.STRING,
    allowNull:true
  },
  price:{
    type:DataTypes.DECIMAL,
    allowNull:false,
    validate:{
      min:0
    }
  },
  CategoryId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"category_id",
    references:{
      key:"id",
      model:category
    }
  }
},{
  timestamps:false
})

module.exports = Products