const db = require("../config/database")
const {DataTypes} =require("sequelize")
const Category = require("./categoryModel")

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
  stock:{
    type:DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
  },
  categoryId:{
    type:DataTypes.INTEGER,
    allowNull:false,
    field:"category_id",
    references:{
      key:"id",
      model:Category
    }
  }
},{
  timestamps:false
})

module.exports = Products